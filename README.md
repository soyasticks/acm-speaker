# Guess the Speaker — Spidey-Sense Tech Edition

A single-page trivia game for your committee showcase: a tech quote appears,
players pick who said it before the "spidey-sense" radar timer runs out.

No build tools, no backend, no dependencies beyond two Google Fonts.

## Files

| File           | Purpose                                              |
|----------------|-------------------------------------------------------|
| `index.html`   | Page structure (start / game / end screens)           |
| `style.css`    | Comic/Spidey visual theme, all colors & type          |
| `script.js`    | Game logic — timer, scoring, streaks, rank calculation|
| `questions.js` | The question bank — **edit this to add your own quotes** |

## Run it

Just open `index.html` in a browser — no server needed. For the showcase,
it's easiest to:

1. Zip the folder and open `index.html` locally, **or**
2. Push it to a free static host (GitHub Pages, Netlify, Vercel) for a shareable link, **or**
3. Run a quick local server so fonts/assets load cleanly:
   ```bash
   cd guess-the-speaker
   python3 -m http.server 8000
   # visit http://localhost:8000
   ```

## Customize the questions

Open `questions.js`. Each round looks like this:

```js
{
  quote: "Talk is cheap. Show me the code.",
  answer: "Linus Torvalds",
  options: ["Linus Torvalds", "Richard Stallman", "Guido van Rossum", "Dennis Ritchie"],
  fact: "Creator of Linux and Git."
}
```

- `options` must include `answer` plus 3 distractors (any order — they're
  shuffled at runtime).
- `fact` is shown briefly after the player answers — keep it to one line.
- Add or remove entries freely; the game reads `QUESTIONS.length`
  automatically (round counter, start-screen count, etc. all update).

## Tuning the game

At the top of `script.js`:

```js
const ROUND_SECONDS = 12;   // seconds per question
const BASE_POINTS   = 100;  // points for a correct answer
const STREAK_BONUS  = 20;   // extra points per consecutive correct answer
```

## Notes

- Fully keyboard/screen-reader friendly (visible focus states, `aria-live`
  feedback) and respects `prefers-reduced-motion`.
- Responsive down to phone widths — good for a QR-code "play from your seat"
  moment during the showcase.
- All visuals are drawn with CSS/SVG (halftone dots, web-corner rings, radar
  timer) — no external image assets required.
