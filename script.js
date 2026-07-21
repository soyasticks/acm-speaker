// ============================================================
// GUESS THE SPEAKER — game logic
// ============================================================

const ROUNDS_PER_GAME = 7; 
const ROUND_SECONDS = 12;
const BASE_POINTS = 100;
const STREAK_BONUS = 20;

const state = {
  playerName: "Anonymous Spider",
  gameRunId: "", 
  order: [],
  index: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  answers: [],      
  timer: null,
  timeLeft: ROUND_SECONDS,
  locked: false,
};

// ---- Audio Manager (Web Audio API Synthesizer Loop) ----
let audioCtx = null;
let bgmInterval = null;
let isMuted = false;
let currentBgmBeat = 0;

function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  startBgmLoop();
}

function startBgmLoop() {
  if (bgmInterval) clearInterval(bgmInterval);
  
  bgmInterval = setInterval(() => {
    if (isMuted || !audioCtx || audioCtx.state === 'suspended') return;
    
    const time = audioCtx.currentTime;
    const bassline = [110, 110, 130.81, 146.83, 164.81, 164.81, 146.83, 130.81];
    const pitch = bassline[currentBgmBeat % bassline.length];
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(pitch, time);
    
    const subOsc = audioCtx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(pitch / 2, time);
    
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, time);
    
    osc.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    
    gain.gain.setValueAtTime(0.06, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);
    
    osc.start(time);
    subOsc.start(time);
    osc.stop(time + 0.25);
    subOsc.stop(time + 0.25);
    
    currentBgmBeat++;
  }, 200);
}

function playSound(type) {
  if (isMuted || !audioCtx) return;
  const time = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === 'correct') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, time); 
    osc.frequency.setValueAtTime(659.25, time + 0.1); 
    gain.gain.setValueAtTime(0.1, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);
    osc.start(time);
    osc.stop(time + 0.3);
  } else if (type === 'wrong' || type === 'timeout') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, time);
    osc.frequency.linearRampToValueAtTime(90, time + 0.25);
    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);
    osc.start(time);
    osc.stop(time + 0.3);
  } else if (type === 'interstitial') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(329.63, time); 
    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
    osc.start(time);
    osc.stop(time + 0.15);
  }
}

// ---- Element refs ----
const screenStart = document.getElementById('screen-start');
const screenGame = document.getElementById('screen-game');
const screenEnd = document.getElementById('screen-end');

const playerNameInput = document.getElementById('player-name');
const btnStart = document.getElementById('btn-start');
const btnReplay = document.getElementById('btn-replay');
const btnClearLeaderboard = document.getElementById('btn-clear-leaderboard');
const audioToggle = document.getElementById('audio-toggle');

const hudRound = document.getElementById('hud-round');
const hudScore = document.getElementById('hud-score');
const streakBar = document.getElementById('streak-bar');
const quoteText = document.getElementById('quote-text');
const optionsGrid = document.getElementById('options-grid');
const feedback = document.getElementById('feedback');

const radar = document.getElementById('radar');
const radarProgress = document.getElementById('radar-progress');
const RADAR_CIRCUMFERENCE = 2 * Math.PI * 52; 

const gameplayActiveLayout = document.getElementById('gameplay-active-layout');
const gameplayInterstitialLayout = document.getElementById('gameplay-interstitial-layout');
const interstitialTitle = document.getElementById('interstitial-title');
const interstitialSub = document.getElementById('interstitial-sub');

const endRank = document.getElementById('end-rank');
const endScoreNum = document.getElementById('end-score-num');
const endDetail = document.getElementById('end-detail');
const leaderboardList = document.getElementById('leaderboard-list');

if (radarProgress) {
  radarProgress.style.strokeDasharray = RADAR_CIRCUMFERENCE;
}

// ---- Helpers ----
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(el) {
  [screenStart, screenGame, screenEnd].forEach(s => {
    if (s) s.hidden = true;
  });
  if (el) el.hidden = false;
}

// ---- Leaderboard Handlers ----
function getLeaderboard() {
  const data = localStorage.getItem('spidey_movie_leaderboard');
  return data ? JSON.parse(data) : [];
}

function saveToLeaderboard(name, score, runId) {
  const board = getLeaderboard();
  board.push({ name, score, runId, date: new Date().toLocaleDateString() });
  board.sort((a, b) => b.score - a.score);
  localStorage.setItem('spidey_movie_leaderboard', JSON.stringify(board.slice(0, 7)));
}

function renderLeaderboard() {
  if (!leaderboardList) return;
  leaderboardList.innerHTML = '';
  const board = getLeaderboard();
  if (board.length === 0) {
    leaderboardList.innerHTML = `<li class="leaderboard-item" style="justify-content:center; color:var(--muted);">No records yet.</li>`;
    if (btnClearLeaderboard) btnClearLeaderboard.disabled = true;
    return;
  }
  if (btnClearLeaderboard) btnClearLeaderboard.disabled = false;
  board.forEach((entry, idx) => {
    const li = document.createElement('li');
    li.className = 'leaderboard-item';
    if (entry.runId === state.gameRunId) {
      li.classList.add('current-user');
    }
    li.innerHTML = `<span>#${idx + 1} ${entry.name}</span><span>${entry.score} pts</span>`;
    leaderboardList.appendChild(li);
  });
}

if (btnClearLeaderboard) {
  btnClearLeaderboard.addEventListener('click', () => {
    if (confirm("Clear all leaderboard historical scores?")) {
      localStorage.removeItem('spidey_movie_leaderboard');
      renderLeaderboard();
    }
  });
}

// ---- Game Progress Flow ----
function startGame() {
  if (typeof QUESTIONS === 'undefined' || !Array.isArray(QUESTIONS) || QUESTIONS.length === 0) {
    alert("Error: questions.js failed to load or is empty. Check browser console!");
    return;
  }

  const val = playerNameInput ? playerNameInput.value.trim() : "";
  state.playerName = val ? val : "Web Head";
  state.gameRunId = "run_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
  
  initAudio();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  
  const fullyShuffledPool = shuffle(QUESTIONS.map((_, i) => i));
  state.order = fullyShuffledPool.slice(0, Math.min(ROUNDS_PER_GAME, QUESTIONS.length));
  
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answers = [];
  
  showScreen(screenGame);
  triggerRoundInterstitial(true);
}

function triggerRoundInterstitial(isStart) {
  clearInterval(state.timer);
  gameplayActiveLayout.hidden = true;
  gameplayInterstitialLayout.hidden = false;
  playSound('interstitial');

  if (isStart) {
    interstitialTitle.textContent = `ROUND ${String(state.index + 1).padStart(2, '0')}`;
    interstitialTitle.style.color = "var(--spidey-gold)";
    interstitialSub.textContent = "Prepare your Spidey-Sense...";
    setTimeout(() => {
      gameplayInterstitialLayout.hidden = true;
      gameplayActiveLayout.hidden = false;
      loadRound();
    }, 1400);
  } else {
    interstitialTitle.textContent = `ROUND ${String(state.index).padStart(2, '0')} END`;
    interstitialTitle.style.color = "var(--comic-red)";
    interstitialSub.textContent = `Current Score: ${state.score} pts`;
    setTimeout(() => {
      gameplayInterstitialLayout.hidden = true;
      if (state.index >= state.order.length) {
        endGame();
      } else {
        triggerRoundInterstitial(true);
      }
    }, 1300);
  }
}

function loadRound() {
  state.locked = false;
  feedback.innerHTML = '';
  const q = QUESTIONS[state.order[state.index]];

  hudRound.innerHTML = `${String(state.index + 1).padStart(2, '0')}<span class="hud-value__of">/${ROUNDS_PER_GAME}</span>`;
  hudScore.textContent = state.score;
  quoteText.textContent = q.quote;

  const opts = shuffle(q.options);
  optionsGrid.innerHTML = '';
  opts.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.type = 'button';
    btn.textContent = name;
    btn.addEventListener('click', () => selectAnswer(name, btn));
    optionsGrid.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(state.timer);
  state.timeLeft = ROUND_SECONDS;
  radar.classList.remove('is-pulsing');
  radarProgress.classList.remove('is-low');
  radarProgress.style.transition = 'none';
  radarProgress.style.strokeDashoffset = 0;
  void radarProgress.getBoundingClientRect();
  radarProgress.style.transition = 'stroke-dashoffset 1s linear, stroke 0.3s ease';

  state.timer = setInterval(() => {
    state.timeLeft -= 1;
    const pct = state.timeLeft / ROUND_SECONDS;
    radarProgress.style.strokeDashoffset = RADAR_CIRCUMFERENCE * (1 - pct);

    if (state.timeLeft <= 4) {
      radarProgress.classList.add('is-low');
      radar.classList.add('is-pulsing');
    }
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      selectAnswer(null, null); 
    }
  }, 1000);
}

function parseFactToHtml(prefixText, factString) {
  const parts = factString.split(' — ');
  if(parts.length >= 2) {
    const movieLabel = parts[0]; 
    const descriptionLabel = parts.slice(1).join(' — ');
    return `<span>${prefixText}</span> <span class="feedback-movie-title">${movieLabel}</span> <span>${descriptionLabel}</span>`;
  }
  return `<span>${prefixText} ${factString}</span>`;
}

function selectAnswer(picked, btnEl) {
  if (state.locked) return;
  state.locked = true;
  clearInterval(state.timer);

  const q = QUESTIONS[state.order[state.index]];
  const correct = picked === q.answer;

  [...optionsGrid.children].forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.answer) btn.classList.add('is-correct');
    else if (btn === btnEl) btn.classList.add('is-wrong');
    else btn.classList.add('is-dim');
  });

  if (correct) {
    playSound('correct');
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    const timeBonus = Math.max(0, state.timeLeft) * 5;
    const gained = BASE_POINTS + timeBonus + ((state.streak - 1) * STREAK_BONUS);
    state.score += gained;
    
    feedback.innerHTML = parseFactToHtml(`✓ Correct — +${gained} pts &middot;`, q.fact);
    streakBar.textContent = state.streak > 1 ? `🕸️ ${state.streak}-dialogue streak!` : '';
  } else {
    if (picked === null) playSound('timeout');
    else playSound('wrong');
    state.streak = 0;
    streakBar.textContent = '';
    
    const contextPrefix = picked 
      ? `✗ It was ${q.answer} &middot; ` 
      : `⏱ Time's up — it was ${q.answer} &middot; `;
    feedback.innerHTML = parseFactToHtml(contextPrefix, q.fact);
  }

  hudScore.textContent = state.score;
  state.answers.push({ quote: q.quote, answer: q.answer, picked: picked || '—', correct });

  setTimeout(() => {
    state.index += 1;
    triggerRoundInterstitial(false);
  }, 1200);
}

function endGame() {
  clearInterval(state.timer);
  gameplayActiveLayout.hidden = false;
  gameplayInterstitialLayout.hidden = true;
  showScreen(screenEnd);

  saveToLeaderboard(state.playerName, state.score, state.gameRunId);
  renderLeaderboard();

  const total = state.answers.length;
  const correctCount = state.answers.filter(a => a.correct).length;
  const pct = correctCount / total;

  let rank;
  if (pct === 1) rank = 'MASTER CINEPHILE';
  else if (pct >= 0.8) rank = 'BLOCKBUSTER HERO';
  else if (pct >= 0.6) rank = 'POP CORN CRITIC';
  else if (pct >= 0.4) rank = 'EXTRA ON SET';
  else rank = 'THEATRE ROOKIE';

  endRank.textContent = rank;
  endScoreNum.textContent = state.score;
  endDetail.textContent = `${correctCount}/${total} correct · best streak ${state.bestStreak}`;
}

if (btnStart) btnStart.addEventListener('click', startGame);
if (btnReplay) btnReplay.addEventListener('click', startGame);

if (audioToggle) {
  audioToggle.addEventListener('click', () => {
    if (!audioCtx) initAudio();
    isMuted = !isMuted;
    audioToggle.textContent = isMuted ? "🔈 Music: Off" : "🔊 Music: On";
  });
}