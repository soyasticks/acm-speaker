// ============================================================
// GUESS THE SPEAKER — Questions Dataset (Balanced Difficulty)
// ============================================================

const QUESTIONS = [
  {
    quote: "With great power comes great responsibility.",
    options: ["Uncle Ben", "Tony Stark", "Nick Fury", "Professor X"],
    answer: "Uncle Ben",
    fact: "Spider-Man (2002) — The iconic lesson delivered by Cliff Robertson as Ben Parker that defines Peter Parker's journey."
  },
  {
    quote: "I am inevitable.",
    options: ["Thanos", "Darth Vader", "Voldemort", "Sauron"],
    answer: "Thanos",
    fact: "Avengers: Endgame — Thanos declares his fate before attempting his second universe-altering snap."
  },
  {
    quote: "Why so serious?",
    options: ["The Joker", "Bane", "Loki", "Green Goblin"],
    answer: "The Joker",
    fact: "The Dark Knight — Heath Ledger's sinister signature line while recounting the story of his scars."
  },
  {
    quote: "May the Force be with you.",
    options: ["Han Solo", "General Dodonna", "Luke Skywalker", "Darth Vader"],
    answer: "General Dodonna",
    fact: "Star Wars: A New Hope — First spoken on screen by General Dodonna to the Rebel pilots before the Attack on the Death Star."
  },
  {
    quote: "I'll be back.",
    options: ["The Terminator", "John McClane", "Rambo", "Dutch"],
    answer: "The Terminator",
    fact: "The Terminator (1984) — Arnold Schwarzenegger's iconic promise before driving a car through the police station."
  },
  {
    quote: "There's no place like home.",
    options: ["Dorothy Gale", "Glinda", "The Wicked Witch", "Aunt Em"],
    answer: "Dorothy Gale",
    fact: "The Wizard of Oz — Judy Garland clicks her ruby slippers three times to return to Kansas."
  },
  {
    quote: "To infinity and beyond!",
    options: ["Buzz Lightyear", "Woody", "Emperor Zurg", "Rex"],
    answer: "Buzz Lightyear",
    fact: "Toy Story — Space Ranger Buzz Lightyear's catchphrase throughout the Pixar franchise."
  },
  {
    quote: "I'm the king of the world!",
    options: ["Jack Dawson", "Cal Hockley", "Captain Smith", "Tommy Ryan"],
    answer: "Jack Dawson",
    fact: "Titanic — Leonardo DiCaprio shouts this from the bow of the ship alongside his friend Fabrizio."
  },
  {
    quote: "You're gonna need a bigger boat.",
    options: ["Martin Brody", "Matt Hooper", "Quint", "Mayor Vaughn"],
    answer: "Martin Brody",
    fact: "Jaws — Chief Brody's stunned reaction after seeing the size of the great white shark for the first time."
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    options: ["Michael Corleone", "Vito Corleone", "Sonny Corleone", "Tom Hagen"],
    answer: "Michael Corleone",
    fact: "The Godfather Part II — Al Pacino's character attributes this classic strategy tip to his father."
  },
  {
    quote: "Fasten your seatbelts. It's going to be a bumpy night.",
    options: ["Margo Channing", "Karen Richards", "Eve Harrington", "Birdie"],
    answer: "Margo Channing",
    fact: "All About Eve — Bette Davis delivers this warning before her tense house party."
  },
  {
    quote: "Say hello to my little friend!",
    options: ["Tony Montana", "Manny Ribera", "Frank Lopez", "Alejandro Sosa"],
    answer: "Tony Montana",
    fact: "Scarface — Al Pacino introduces his grenade launcher during the mansion shootout climax."
  },
  {
    quote: "Houston, we have a problem.",
    options: ["Jim Lovell", "Jack Swigert", "Fred Haise", "Ken Mattingly"],
    answer: "Jim Lovell",
    fact: "Apollo 13 — Tom Hanks as Captain Lovell reports the oxygen tank explosion to Mission Control."
  },
  {
    quote: "Show me the money!",
    options: ["Rod Tidwell", "Jerry Maguire", "Avery Bishop", "Bob Sugar"],
    answer: "Rod Tidwell",
    fact: "Jerry Maguire — Cuba Gooding Jr.'s energetic NFL client forces Tom Cruise to scream it on the phone."
  },
  {
    quote: "You can't handle the truth!",
    options: ["Col. Nathan R. Jessep", "Lt. Daniel Kaffee", "Capt. Jack Ross", "Lt. Cmdr. JoAnne Galloway"],
    answer: "Col. Nathan R. Jessep",
    fact: "A Few Good Men — Jack Nicholson erupts during intense courtroom questioning from Tom Cruise."
  },
  {
    quote: "E.T. phone home.",
    options: ["E.T.", "Elliott", "Gertie", "Michael"],
    answer: "E.T.",
    fact: "E.T. the Extra-Terrestrial — The beloved alien learns to express his desire to contact his spaceship."
  },
  {
    quote: "You talking to me?",
    options: ["Travis Bickle", "Iris", "Sport", "Tom"],
    answer: "Travis Bickle",
    fact: "Taxi Driver — Robert De Niro rehearses his tough-guy confrontation in the mirror."
  },
  {
    quote: "Bond. James Bond.",
    options: ["James Bond", "M", "Q", "Felix Leiter"],
    answer: "James Bond",
    fact: "Dr. No — Sean Connery introduces himself at the baccarat table, establishing cinema's famous introduction."
  },
  {
    quote: "Elementary, my dear Watson.",
    options: ["Sherlock Holmes", "Dr. Watson", "Professor Moriarty", "Mycroft Holmes"],
    answer: "Sherlock Holmes",
    fact: "The Adventures of Sherlock Holmes (1939) — Basil Rathbone popularized this iconic line."
  },
  {
    quote: "I've a feeling we're not in Kansas anymore.",
    options: ["Dorothy Gale", "Scarecrow", "Tin Man", "Cowardly Lion"],
    answer: "Dorothy Gale",
    fact: "The Wizard of Oz — Dorothy speaks to her dog Toto upon stepping out into the vibrant land of Oz."
  },
  {
    quote: "Here's looking at you, kid.",
    options: ["Rick Blaine", "Ilsa Lund", "Victor Laszlo", "Captain Renault"],
    answer: "Rick Blaine",
    fact: "Casablanca — Humphrey Bogart bids farewell to Ingrid Bergman at the airfield."
  },
  {
    quote: "I am Iron Man.",
    options: ["Tony Stark", "Steve Rogers", "Thor", "Bruce Banner"],
    answer: "Tony Stark",
    fact: "Iron Man (2008) — Robert Downey Jr. discards his prepared notes and reveals his secret identity to the press."
  },
  {
    quote: "Chewie, we're home.",
    options: ["Han Solo", "Luke Skywalker", "Princess Leia", "Lando Calrissian"],
    answer: "Han Solo",
    fact: "Star Wars: The Force Awakens — Harrison Ford steps back onto the Millennium Falcon after years away."
  },
  {
    quote: "Just keep swimming.",
    options: ["Dory", "Marlin", "Nemo", "Crush"],
    answer: "Dory",
    fact: "Finding Nemo — Ellen DeGeneres' optimistic blue tang offers advice when things get difficult."
  },
  {
    quote: "My precious.",
    options: ["Gollum", "Bilbo Baggins", "Frodo Baggins", "Boromir"],
    answer: "Gollum",
    fact: "The Lord of the Rings — Andy Serkis' iconic obsession with the One Ring."
  },
  {
    quote: "Hasta la vista, baby.",
    options: ["The Terminator", "John Connor", "Sarah Connor", "T-1000"],
    answer: "The Terminator",
    fact: "Terminator 2: Judgment Day — The T-800 uses the slang taught to him by John Connor before shattering the frozen T-1000."
  },
  {
    quote: "I'll offer him a deal he can't refuse.",
    options: ["Don Vito Corleone", "Michael Corleone", "Sonny Corleone", "Clemenza"],
    answer: "Don Vito Corleone",
    fact: "The Godfather — Marlon Brando assures Johnny Fontane that his movie role will be secured."
  },
  {
    quote: "Carpe diem. Seize the day, boys.",
    options: ["John Keating", "Neil Perry", "Todd Anderson", "Headmaster Gale Nolan"],
    answer: "John Keating",
    fact: "Dead Poets Society — Robin Williams inspires his students while looking at old school photographs."
  },
  {
    quote: "I'm walkin' here!",
    options: ["Ratso Rizzo", "Joe Buck", "Enrico", "O'Daniel"],
    answer: "Ratso Rizzo",
    fact: "Midnight Cowboy — Dustin Hoffman shouts at a real New York taxi that almost ran him over while filming."
  },
  {
    quote: "It's alive! It's alive!",
    options: ["Henry Frankenstein", "Fritz", "Dr. Waldman", "Victor Moritz"],
    answer: "Henry Frankenstein",
    fact: "Frankenstein (1931) — Colin Clive celebrates as his creation's hand moves during the thunderstorm."
  },
  {
    quote: "I feel the need... the need for speed!",
    options: ["Maverick & Goose", "Iceman & Slider", "Viper & Jester", "Charlie & Goose"],
    answer: "Maverick & Goose",
    fact: "Top Gun — Tom Cruise and Anthony Edwards high-five before heading out to the flight line."
  },
  {
    quote: "After all, tomorrow is another day!",
    options: ["Scarlett O'Hara", "Rhett Butler", "Ashley Wilkes", "Melanie Hamilton"],
    answer: "Scarlett O'Hara",
    fact: "Gone with the Wind — Vivien Leigh resolves to win Rhett back as the film closes."
  },
  {
    quote: "Mama always said life was like a box of chocolates.",
    options: ["Forrest Gump", "Bubba Blue", "Lieutenant Dan", "Jenny Curran"],
    answer: "Forrest Gump",
    fact: "Forrest Gump — Tom Hanks shares his mother's wisdom on the bus stop bench."
  },
  {
    quote: "There's no crying in baseball!",
    options: ["Jimmy Dugan", "Dottie Hinson", "Kit Keller", "Mae Mordabito"],
    answer: "Jimmy Dugan",
    fact: "A League of Their Own — Tom Hanks yells at right fielder Evelyn Gardner after a play."
  },
  {
    quote: "You had me at hello.",
    options: ["Dorothy Boyd", "Jerry Maguire", "Rod Tidwell", "Avery Bishop"],
    answer: "Dorothy Boyd",
    fact: "Jerry Maguire — Renée Zellweger interrupts Jerry's long speech to accept him back."
  }
];