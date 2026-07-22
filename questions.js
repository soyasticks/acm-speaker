// ============================================================
// GUESS THE SPEAKER — Questions Dataset (Easy & Reward-Friendly)
// ============================================================

const QUESTIONS = [
  // ==================== BOLLYWOOD (25) ====================
  {
    quote: "Kitne aadmi the?",
    options: ["Gabbar Singh", "Thakur", "Jai", "Veeru"],
    answer: "Gabbar Singh",
    fact: "Sholay (1975) — Amrish Puri's famous dacoit line."
  },
  {
    quote: "Mogambo khush hua!",
    options: ["Mogambo", "Arun (Mr. India)", "Calendar", "Seema"],
    answer: "Mogambo",
    fact: "Mr. India (1987) — Amrish Puri's iconic villain phrase."
  },
  {
    quote: "Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain, Senorita.",
    options: ["Raj Malhotra", "Karan", "Prem", "Sameer"],
    answer: "Raj Malhotra",
    fact: "DDLJ (1995) — Shah Rukh Khan comforting Kajol."
  },
  {
    quote: "Don ko pakadna mushkil hi nahi, naamumkin hai.",
    options: ["Don", "Inspector Vijay", "Roma", "Narang"],
    answer: "Don",
    fact: "Don — Spoken by Amitabh Bachchan and Shah Rukh Khan."
  },
  {
    quote: "Rahul, naam toh suna hoga?",
    options: ["Rahul", "Sameer", "Aman", "Kabir"],
    answer: "Rahul",
    fact: "Dil To Pagal Hai (1997) — Shah Rukh Khan's classic introduction."
  },
  {
    quote: "Rishte mein toh hum tumhare baap lagte hain, naam hai Shahenshah.",
    options: ["Shahenshah", "Anthony", "Vijay", "Inspector Amar"],
    answer: "Shahenshah",
    fact: "Shahenshah (1988) — Amitabh Bachchan's famous dialogue."
  },
  {
    quote: "Babu Rao ka style hai!",
    options: ["Babu Rao", "Raju", "Shyam", "Kachra Seth"],
    answer: "Babu Rao",
    fact: "Hera Pheri (2000) — Paresh Rawal's signature phrase."
  },
  {
    quote: "Crime Master Gogo naam hai mera, aankhen nikaal ke goti khelta hoon!",
    options: ["Crime Master Gogo", "Amar", "Prem", "Teja"],
    answer: "Crime Master Gogo",
    fact: "Andaz Apna Apna (1994) — Shakti Kapoor's iconic role."
  },
  {
    quote: "Picture abhi baaki hai mere dost!",
    options: ["Om Kapoor", "Mukesh", "Pappu", "OK"],
    answer: "Om Kapoor",
    fact: "Om Shanti Om (2007) — Shah Rukh Khan's legendary line."
  },
  {
    quote: "Main apni favorite hoon!",
    options: ["Geet Dhillon", "Simran", "Poo", "Naina"],
    answer: "Geet Dhillon",
    fact: "Jab We Met (2007) — Kareena Kapoor's self-love dialogue."
  },
  {
    quote: "All is well!",
    options: ["Rancho", "Farhan", "Raju", "Virus"],
    answer: "Rancho",
    fact: "3 Idiots (2009) — Aamir Khan's heart-soothing mantra."
  },
  {
    quote: "Tareekh pe tareekh, tareekh pe tareekh!",
    options: ["Govind (Lawyer)", "Judge", "Chaddha", "Shekhar"],
    answer: "Govind (Lawyer)",
    fact: "Damini (1993) — Sunny Deol's courtroom outrage."
  },
  {
    quote: "Thappad se darr nahi lagta sahab, pyaar se lagta hai.",
    options: ["Rajjo", "Chulbul Pandey", "Chedi Singh", "Prajapati"],
    answer: "Rajjo",
    fact: "Dabangg (2010) — Sonakshi Sinha's line to Salman Khan."
  },
  {
    quote: "Aata maajhi satakli!",
    options: ["Singham", "Jaikant Shikre", "Daya", "Kavya"],
    answer: "Singham",
    fact: "Singham (2011) — Ajay Devgn's famous rage phrase."
  },
  {
    quote: "How's the josh?",
    options: ["Major Vihaan", "Captain Karan", "Sartaj", "Rana"],
    answer: "Major Vihaan",
    fact: "Uri: The Surgical Strike (2019) — Vicky Kaushal rallying his team."
  },
  {
    quote: "Pushpa, I hate tears!",
    options: ["Anand", "Dr. Bhaskar", "Raju", "Shyamu"],
    answer: "Anand",
    fact: "Amar Prem (1972) — Rajesh Khanna's iconic line."
  },
  {
    quote: "Control Uday, Control!",
    options: ["Majnu Bhai", "Uday Shetty", "Ghungroo", "RDX"],
    answer: "Majnu Bhai",
    fact: "Welcome (2007) — Anil Kapoor calming down Nana Patekar."
  },
  {
    quote: "Teja main hoon, mark idhar hai!",
    options: ["Teja", "Amar", "Prem", "Crime Master Gogo"],
    answer: "Teja",
    fact: "Andaz Apna Apna (1994) — Paresh Rawal proving his identity."
  },
  {
    quote: "Ek baar jo maine commitment kar di...",
    options: ["Radhe", "Chulbul Pandey", "Devil", "Bajrangi"],
    answer: "Radhe",
    fact: "Wanted (2009) — Salman Khan's character rule."
  },
  {
    quote: "Apna Time Aayega!",
    options: ["Murad (Gully Boy)", "MC Sher", "Safeena", "Moin"],
    answer: "Murad (Gully Boy)",
    fact: "Gully Boy (2019) — Ranveer Singh's motivational anthem."
  },
  {
    quote: "Kaun kambakht bardaasht karne ko peeta hai?",
    options: ["Devdas", "Chunni Babu", "Paro", "Chandramukhi"],
    answer: "Devdas",
    fact: "Devdas (2002) — Shah Rukh Khan's dramatic line."
  },
  {
    quote: "Don't underestimate the power of a common man!",
    options: ["Rahul", "Meenamma", "Tangaballi", "Durgeshwara"],
    answer: "Rahul",
    fact: "Chennai Express (2013) — Shah Rukh Khan's catchphrase."
  },
  {
    quote: "Violence, Violence, Violence... I don't like it!",
    options: ["Rocky Bhai", "Adheera", "Garuda", "Reena"],
    answer: "Rocky Bhai",
    fact: "KGF: Chapter 2 (2022) — Yash's mass hit dialogue."
  },
  {
    quote: "Tumse na ho payega!",
    options: ["Ramadhir Singh", "Sardar Khan", "Faizal Khan", "Definite"],
    answer: "Ramadhir Singh",
    fact: "Gangs of Wasseypur (2012) — Tigmanshu Dhulia scolding his son."
  },
  {
    quote: "Life mein jitna bhi try karo, kuch na kuch toh chhootega hi...",
    options: ["Bunny", "Naina", "Avi", "Aditi"],
    answer: "Bunny",
    fact: "YJHD (2013) — Ranbir Kapoor discussing priorities."
  },

  // ==================== HOLLYWOOD (25) ====================
  {
    quote: "Why so serious?",
    options: ["The Joker", "Batman", "Alfred", "Gordon"],
    answer: "The Joker",
    fact: "The Dark Knight (2008) — Heath Ledger's iconic quote."
  },
  {
    quote: "I am inevitable.",
    options: ["Thanos", "Iron Man", "Captain America", "Thor"],
    answer: "Thanos",
    fact: "Avengers: Endgame (2019) — Thanos before his final snap attempt."
  },
  {
    quote: "I am Iron Man.",
    options: ["Tony Stark", "Steve Rogers", "Thor", "Bruce Banner"],
    answer: "Tony Stark",
    fact: "Iron Man (2008) — RDJ revealing his secret identity."
  },
  {
    quote: "Wakanda Forever!",
    options: ["Black Panther", "Iron Man", "Captain America", "Thor"],
    answer: "Black Panther",
    fact: "Black Panther (2018) — Chadwick Boseman's battle cry."
  },
  {
    quote: "With great power comes great responsibility.",
    options: ["Uncle Ben", "Tony Stark", "Nick Fury", "Hulk"],
    answer: "Uncle Ben",
    fact: "Spider-Man (2002) — Cliff Robertson's advice to Peter Parker."
  },
  {
    quote: "I'll be back.",
    options: ["The Terminator", "John Wick", "Rambo", "Batman"],
    answer: "The Terminator",
    fact: "The Terminator (1984) — Arnold Schwarzenegger's classic line."
  },
  {
    quote: "To infinity and beyond!",
    options: ["Buzz Lightyear", "Woody", "Sheriff", "Slinky"],
    answer: "Buzz Lightyear",
    fact: "Toy Story (1995) — Buzz Lightyear's catchphrase."
  },
  {
    quote: "I'm the king of the world!",
    options: ["Jack Dawson", "Rose", "Cal", "Captain"],
    answer: "Jack Dawson",
    fact: "Titanic (1997) — Leonardo DiCaprio on the bow."
  },
  {
    quote: "My precious.",
    options: ["Gollum", "Frodo", "Sam", "Gandalf"],
    answer: "Gollum",
    fact: "The Lord of the Rings — Andy Serkis' iconic line."
  },
  {
    quote: "May the Force be with you.",
    options: ["Star Wars Rebels", "Darth Vader", "Joker", "Terminator"],
    answer: "Star Wars Rebels",
    fact: "Star Wars — Spoken before major missions."
  },
  {
    quote: "Houston, we have a problem.",
    options: ["Jim Lovell", "Superman", "Batman", "Spiderman"],
    answer: "Jim Lovell",
    fact: "Apollo 13 (1995) — Tom Hanks calling NASA."
  },
  {
    quote: "You're gonna need a bigger boat.",
    options: ["Chief Brody", "Shark", "Sailor", "Captain"],
    answer: "Chief Brody",
    fact: "Jaws (1975) — Seeing the giant shark for the first time."
  },
  {
    quote: "Hasta la vista, baby.",
    options: ["The Terminator", "Robocop", "Superman", "Batman"],
    answer: "The Terminator",
    fact: "Terminator 2 (1991) — Arnold Schwarzenegger shattering the villain."
  },
  {
    quote: "E.T. phone home.",
    options: ["E.T.", "Yoda", "Wall-E", "Minion"],
    answer: "E.T.",
    fact: "E.T. (1982) — The alien learning to speak."
  },
  {
    quote: "Bond. James Bond.",
    options: ["James Bond", "Ethan Hunt", "John Wick", "Jason Bourne"],
    answer: "James Bond",
    fact: "Dr. No (1962) — Sean Connery's famous introduction."
  },
  {
    quote: "Say hello to my little friend!",
    options: ["Tony Montana", "The Godfather", "John Wick", "Joker"],
    answer: "Tony Montana",
    fact: "Scarface (1983) — Al Pacino with his grenade launcher."
  },
  {
    quote: "You can't handle the truth!",
    options: ["Colonel Jessep", "Kaffee", "Ross", "Judge"],
    answer: "Colonel Jessep",
    fact: "A Few Good Men (1992) — Jack Nicholson's courtroom shout."
  },
  {
    quote: "I'll make him an offer he can't refuse.",
    options: ["Don Vito Corleone", "Scarface", "John Wick", "Joker"],
    answer: "Don Vito Corleone",
    fact: "The Godfather (1972) — Marlon Brando's classic line."
  },
  {
    quote: "I have a hulk.",
    options: ["Tony Stark", "Thor", "Loki", "Captain America"],
    answer: "Tony Stark",
    fact: "The Avengers (2012) — RDJ confronting Loki."
  },
  {
    quote: "Just keep swimming.",
    options: ["Dory", "Nemo", "Marlin", "Shark"],
    answer: "Dory",
    fact: "Finding Nemo (2003) — Ellen DeGeneres' blue tang song."
  },
  {
    quote: "Avengers... Assemble!",
    options: ["Captain America", "Iron Man", "Thor", "Hulk"],
    answer: "Captain America",
    fact: "Avengers: Endgame (2019) — Chris Evans leading the final battle."
  },
  {
    quote: "There's no place like home.",
    options: ["Dorothy", "Witch", "Scarecrow", "Lion"],
    answer: "Dorothy",
    fact: "The Wizard of Oz (1939) — Judy Garland clicking her slippers."
  },
  {
    quote: "I can do this all day.",
    options: ["Captain America", "Iron Man", "Thor", "Hawkeye"],
    answer: "Captain America",
    fact: "Captain America (MCU) — Cap's signature phrase."
  },
  {
    quote: "Mama always said life was like a box of chocolates.",
    options: ["Forrest Gump", "Bubba", "Dan", "Jenny"],
    answer: "Forrest Gump",
    fact: "Forrest Gump (1994) — Tom Hanks sharing wisdom."
  },
  {
    quote: "I am Kenough.",
    options: ["Ken", "Barbie", "Allan", "CEO"],
    answer: "Ken",
    fact: "Barbie (2023) — Ryan Gosling discovering his identity."
  }
];