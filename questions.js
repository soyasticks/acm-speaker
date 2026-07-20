// ============================================================
// QUESTION BANK — 35 Curated Hindi & English Movie Lines
// Balanced Easy-Medium Difficulty with Movie Names Included
// ============================================================

const QUESTIONS = [
  {
    quote: "Why so serious?",
    answer: "The Joker",
    options: ["The Joker", "Batman", "Bane", "Two-Face"],
    fact: "Movie: The Dark Knight (2008) — Heath Ledger's legendary line."
  },
  {
    quote: "Kitne aadmi the?",
    answer: "Gabbar Singh",
    options: ["Gabbar Singh", "Thakur", "Jai", "Veeru"],
    fact: "Movie: Sholay (1975) — Amjad Khan's chilling introduction."
  },
  {
    quote: "May the Force be with you.",
    answer: "Han Solo",
    options: ["Han Solo", "Luke Skywalker", "Darth Vader", "Obi-Wan Kenobi"],
    fact: "Movie: Star Wars (1977) — Spoken across the sci-fi saga."
  },
  {
    quote: "Babumoshai, zindagi badi honi chahiye, lambi nahi.",
    answer: "Anand",
    options: ["Anand", "Dr. Bhaskar", "Raghu", "Babu"],
    fact: "Movie: Anand (1971) — Delivered by Rajesh Khanna."
  },
  {
    quote: "I'm gonna make him an offer he can't refuse.",
    answer: "Don Corleone",
    options: ["Don Corleone", "Michael Corleone", "Sonny Corleone", "Tom Hagen"],
    fact: "Movie: The Godfather (1972) — Marlon Brando's iconic mafia line."
  },
  {
    quote: "Mogambo khush hua!",
    answer: "Mogambo",
    options: ["Mogambo", "Mr. India", "Calendar", "Arun"],
    fact: "Movie: Mr. India (1987) — Amrish Puri's supervillain catchphrase."
  },
  {
    quote: "Bond. James Bond.",
    answer: "James Bond",
    options: ["James Bond", "M", "Q", "Blofeld"],
    fact: "Movie: Dr. No (1962) — First spoken by Sean Connery."
  },
  {
    quote: "Don ko pakadna mushkil hi nahi, namumkin hai.",
    answer: "Don",
    options: ["Don", "Vijay", "Roma", "Inspector D'Silva"],
    fact: "Movie: Don (1978) — Amitabh Bachchan's classic dialogue."
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    answer: "Michael Corleone",
    options: ["Michael Corleone", "Don Corleone", "Tony Montana", "Frank Pentangeli"],
    fact: "Movie: The Godfather Part II (1974) — Al Pacino's cold wisdom."
  },
  {
    quote: "Bade bade deshon mein aisi choti choti baatein hoti rehti hain, Senorita.",
    answer: "Raj",
    options: ["Raj", "Simran", "Bauji", "Kuljeet"],
    fact: "Movie: Dilwale Dulhania Le Jayenge (1995) — Shah Rukh Khan's signature romance line."
  },
  {
    quote: "You talking to me?",
    answer: "Travis Bickle",
    options: ["Travis Bickle", "Vito Corleone", "Tony Montana", "Jimmy Conway"],
    fact: "Movie: Taxi Driver (1976) — Robert De Niro ad-libbed the mirror scene."
  },
  {
    quote: "Rishte mein toh hum tumhare baap lagte hain, naam hai Shahenshah.",
    answer: "Shahenshah",
    options: ["Shahenshah", "Vijay", "Inspector Shrivastav", "Anthony"],
    fact: "Movie: Shahenshah (1988) — Amitabh Bachchan's punchline."
  },
  {
    quote: "There's no place like home.",
    answer: "Dorothy",
    options: ["Dorothy", "The Scarecrow", "The Tin Man", "The Cowardly Lion"],
    fact: "Movie: The Wizard of Oz (1939) — Clicking her ruby slippers."
  },
  {
    quote: "Pushpa, I hate tears...",
    answer: "Anand Babu",
    options: ["Anand Babu", "Pushpa", "Samrat", "Shyam"],
    fact: "Movie: Amar Prem (1972) — Rajesh Khanna setting romantic standards."
  },
  {
    quote: "Here's looking at you, kid.",
    answer: "Rick Blaine",
    options: ["Rick Blaine", "Ilsa Lund", "Victor Laszlo", "Captain Renault"],
    fact: "Movie: Casablanca (1942) — Humphrey Bogart parting ways."
  },
  {
    quote: "Rahul, naam toh suna hoga.",
    answer: "Rahul",
    options: ["Rahul", "Pooja", "Nisha", "Ajay"],
    fact: "Movie: Dil To Pagal Hai (1997) — Shah Rukh Khan's screen identity."
  },
  {
    quote: "I'll be back.",
    answer: "The Terminator",
    options: ["The Terminator", "John Connor", "Sarah Connor", "T-1000"],
    fact: "Movie: The Terminator (1984) — Arnold Schwarzenegger's timeless line."
  },
  {
    quote: "Tarikh par tarikh, tarikh par tarikh, tarikh par tarikh milti rahi hai aur...!",
    answer: "Govind",
    options: ["Govind", "Balwant Rai", "Amrit", "Judge"],
    fact: "Movie: Damini (1993) — Sunny Deol's courtroom justice."
  },
  {
    quote: "Houston, we have a problem.",
    answer: "Jim Lovell",
    options: ["Jim Lovell", "Fred Haise", "Jack Swigert", "Gene Kranz"],
    fact: "Movie: Apollo 13 (1995) — Tom Hanks bringing space survival to life."
  },
  {
    quote: "All is well.",
    answer: "Ranchoddas 'Rancho' Chanchad",
    options: ["Ranchoddas 'Rancho' Chanchad", "Farhan Qureshi", "Raju Rastogi", "Virus"],
    fact: "Movie: 3 Idiots (2009) — Aamir Khan's life philosophy."
  },
  {
    quote: "Main udna chahta hoon, daudna chahta hoon, girna bhi chahta hoon... bas rukna nahi chahta.",
    answer: "Bunny",
    options: ["Bunny", "Ved", "Barfi", "Aditya"],
    fact: "Movie: Yeh Jawaani Hai Deewani (2013) — Ranbir Kapoor's wanderlust anthem."
  },
  {
    quote: "The things you own end up owning you.",
    answer: "Tyler Durden",
    options: ["Tyler Durden", "The Narrator", "Patrick Bateman", "Gordon Gekko"],
    fact: "Movie: Fight Club (1999) — Brad Pitt's anti-consumerist philosophy."
  },
  {
    quote: "Success ke peeche mat bhaago, Excellence ka peechha karo, Success jhak maar ke peeche aayegi.",
    answer: "Rancho",
    options: ["Rancho", "Farhan", "Raju", "Virus"],
    fact: "Movie: 3 Idiots (2009) — Excellence over success lesson."
  },
  {
    quote: "Duniya mein do tarah ke log hote hain... Winners and Losers. Lekin zindagi har loser ko woh ek mauka zaroor deti hai.",
    answer: "Charlie",
    options: ["Charlie", "Kabir Khan", "Sahir", "Don"],
    fact: "Movie: Happy New Year (2014) — Shah Rukh Khan opening the heist-drama."
  },
  {
    quote: "Filmein sirf teen cheezon ki wajah se chalti hain... entertainment, entertainment, entertainment.",
    answer: "Silk",
    options: ["Silk", "Suryakant", "Abraham", "Ramakant"],
    fact: "Movie: The Dirty Picture (2011) — Vidya Balan's meta-statement."
  },
  {
    quote: "Great men are not born great, they grow great.",
    answer: "Vito Corleone",
    options: ["Vito Corleone", "Michael Corleone", "Tony Montana", "Jay Gatsby"],
    fact: "Movie: The Godfather (1972) — Marlon Brando's classic observation."
  },
  {
    quote: "Insaan ko dibbe mein sirf tab hona chahiye... jab woh mar chuka ho.",
    answer: "Imran",
    options: ["Imran", "Arjun", "Kabir", "Farhan"],
    fact: "Movie: Zindagi Na Milegi Dobara (2011) — Farhan Akhtar on corporate life."
  },
  {
    quote: "Every man dies, not every man really lives.",
    answer: "William Wallace",
    options: ["William Wallace", "Maximus", "King Leonidas", "Alexander"],
    fact: "Movie: Braveheart (1995) — Mel Gibson rallying his Scottish forces."
  },
  {
    quote: "Kahin pahunchne ke liye, kahin se nikalna bahut zaroori hota hai.",
    answer: "Naina",
    options: ["Naina", "Geet", "Ayesha", "Alizeh"],
    fact: "Movie: Yeh Jawaani Hai Deewani (2013) — Deepika Padukone's grounded advice."
  },
  {
    quote: "Real power jhukne mein nahi... rokne mein hai.",
    answer: "Guruji",
    options: ["Guruji", "Ganesh Gaitonde", "Sartaj Singh", "Kaleen Bhaiya"],
    fact: "Movie/Series: Sacred Games — Pankaj Tripathi's calculated chills."
  },
  {
    quote: "Do or do not. There is no try.",
    answer: "Yoda",
    options: ["Yoda", "Obi-Wan Kenobi", "Luke Skywalker", "Dumbledore"],
    fact: "Movie: The Empire Strikes Back (1980) — The Jedi Master instructing Luke."
  },
  {
    quote: "Zindagi mein jab koi bada faisla lena ho... toh dil se faisla lo, dimaag se nahi.",
    answer: "Kabir Khan",
    options: ["Kabir Khan", "Coach Raj", "Major Ram", "Surinder Sahni"],
    fact: "Movie: Chak De! India (2007) — Shah Rukh Khan instilling intuition."
  },
  {
    quote: "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
    answer: "Andy Dufresne",
    options: ["Andy Dufresne", "Ellis Boyd Redding", "John Coffey", "Forrest Gump"],
    fact: "Movie: The Shawshank Redemption (1994) — Tim Robbins writing on resilience."
  },
  {
    quote: "What we do in life echoes in eternity.",
    answer: "Maximus",
    options: ["Maximus", "Commodus", "Leonidas", "Achilles"],
    fact: "Movie: Gladiator (2000) — Russell Crowe motivating his cavalry."
  },
  {
    quote: "It is not our abilities that show what we truly are… it is our choices.",
    answer: "Dumbledore",
    options: ["Dumbledore", "Harry Potter", "Sirius Black", "Gandalf"],
    fact: "Movie: Harry Potter and the Chamber of Secrets (2002) — Albus Dumbledore's wisdom."
  }
];