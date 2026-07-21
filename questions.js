// ============================================================
// GUESS THE SPEAKER — Questions Dataset (50 Bolly-Holly Mix)
// ============================================================

const QUESTIONS = [
  // ==================== BOLLYWOOD (25) ====================
  {
    quote: "Mogambo khush hua!",
    options: ["Mogambo", "General Dong", "Shakaal", "Gabbar Singh"],
    answer: "Mogambo",
    fact: "Mr. India (1987) — Amrish Puri's legendary line whenever his villainous plans succeed."
  },
  {
    quote: "Babu Rao ka style hai!",
    options: ["Babu Rao", "Raju", "Shyam", "Kachra Seth"],
    answer: "Babu Rao",
    fact: "Hera Pheri (2000) — Paresh Rawal's iconic character explaining his quirky antics."
  },
  {
    quote: "Parampara, Pratishtha, Anushasan. Yeh is gurukul ke teen stambh hain.",
    options: ["Narayan Shankar", "Raj Aryan", "Principal Sen", "Dr. Asthana"],
    answer: "Narayan Shankar",
    fact: "Mohabbatein (2000) — Amitabh Bachchan establishing the strict values of Gurukul."
  },
  {
    quote: "Don ko pakadna mushkil hi nahi, naamumkin hai.",
    options: ["Don", "Vijay", "Inspector D'Silva", "Vardhaan"],
    answer: "Don",
    fact: "Don (1978 / 2006) — Spoken by Amitabh Bachchan and later Shah Rukh Khan while evading police."
  },
  {
    quote: "Picture abhi baaki hai mere dost!",
    options: ["Om Kapoor", "Pappu Master", "Mukesh Mehra", "Sandy"],
    answer: "Om Kapoor",
    fact: "Om Shanti Om (2007) — Shah Rukh Khan reminding everyone that the story isn't over yet."
  },
  {
    quote: "Crime Master Gogo naam hai mera, aankhen nikaal ke goti khelta hoon!",
    options: ["Crime Master Gogo", "Teja", "Robert", "Bhalla"],
    answer: "Crime Master Gogo",
    fact: "Andaz Apna Apna (1994) — Shakti Kapoor introducing his iconic goofy villain persona."
  },
  {
    quote: "All is well!",
    options: ["Ranchoddas (Rancho)", "Farhan Qureshi", "Raju Rastogi", "Virus"],
    answer: "Ranchoddas (Rancho)",
    fact: "3 Idiots (2009) — Aamir Khan's trick to trick the heart during high-stress situations."
  },
  {
    quote: "Tareekh pe tareekh, tareekh pe tareekh milti rahi hai...",
    options: ["Damini's Lawyer (Govind)", "Advocate Chaddha", "Judge", "Shekhar"],
    answer: "Damini's Lawyer (Govind)",
    fact: "Damini (1993) — Sunny Deol's explosive court monologue fighting for justice."
  },
  {
    quote: "Rahul, naam toh suna hoga?",
    options: ["Rahul Khanna", "Rahul Joshi", "Raj Malhotra", "Prem"],
    answer: "Rahul Khanna",
    fact: "Dil To Pagal Hai (1997) — Shah Rukh Khan's classic charming introduction."
  },
  {
    quote: "Har team mein sirf ek hi gunda ho sakta hai... aur iss team ka gunda main hoon!",
    options: ["Kabir Khan", "Vidya Sharma", "Komal Chautala", "Baldev"],
    answer: "Kabir Khan",
    fact: "Chak De! India (2007) — Shah Rukh Khan establishing authority over the hockey team."
  },
  {
    quote: "Rishte mein toh hum tumhare baap lagte hain, naam hai Shahenshah.",
    options: ["Shahenshah", "Vijay", "Inspector Vijay", "Anthony Gonsalves"],
    answer: "Shahenshah",
    fact: "Shahenshah (1988) — Amitabh Bachchan's vigilante identity declaration."
  },
  {
    quote: "Main apni favorite hoon!",
    options: ["Geet Dhillon", "Simran Singh", "Pooja (Poo)", "Naina Talwar"],
    answer: "Geet Dhillon",
    fact: "Jab We Met (2007) — Kareena Kapoor's self-loving anthem on the train."
  },
  {
    quote: "Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain, Senorita.",
    options: ["Raj Malhotra", "Rahul", "Aman Mathur", "Kabir"],
    answer: "Raj Malhotra",
    fact: "Dilwale Dulhania Le Jayenge (1995) — Shah Rukh Khan comforting Kajol in Europe."
  },
  {
    quote: "Kiske hain yeh aanso? Kaun hai jo pareshan hai?",
    options: ["Anand", "Dr. Bhaskar Banerjee", "Raju", "Babu Moshai"],
    answer: "Anand",
    fact: "Anand (1971) — Rajesh Khanna spreading warmth and optimism despite his illness."
  },
  {
    quote: "Thappad se darr nahi lagta sahab, pyaar se lagta hai.",
    options: ["Rajjjo", "Chulbul Pandey", "Makhanchand", "Chedi Singh"],
    answer: "Rajjjo",
    fact: "Dabangg (2010) — Sonakshi Sinha's debut iconic line to Salman Khan."
  },
  {
    quote: "Aapke paon dekhe, bahut haseen hain. Inhein zameen par mat utariye ga...",
    options: ["Salim", "Anarkali", "Chaudhvin", "Nawab Sahib"],
    answer: "Salim",
    fact: "Pakeezah (1972) — Raj Kumar leaving a romantic note for Meena Kumari in the train."
  },
  {
    quote: "Kismat badi kutti cheez hai, kabhi bhi palat sakti hai.",
    options: ["Gaitonde", "Sartaj", "Bunty", "Trivedi"],
    answer: "Gaitonde",
    fact: "Sacred Games (2018) — Nawazuddin Siddiqui reflecting on power dynamics in Mumbai."
  },
  {
    quote: "Tumse na ho payega!",
    options: ["Ramadhir Singh", "Sardar Khan", "Faizal Khan", "Definite"],
    answer: "Ramadhir Singh",
    fact: "Gangs of Wasseypur (2012) — Tigmanshu Dhulia scolding his son in the cinema hall."
  },
  {
    quote: "Our business is our business, none of your business!",
    options: ["Daisy Rana", "Sikander", "Yash", "Jessica"],
    answer: "Daisy Rana",
    fact: "Race 3 (2018) — Daisy Shah delivering the internet's favorite viral dialogue."
  },
  {
    quote: "Teja main hoon, mark idhar hai!",
    options: ["Teja / Bajaj", "Amar", "Prem", "Crime Master Gogo"],
    answer: "Teja / Bajaj",
    fact: "Andaz Apna Apna (1994) — Paresh Rawal pointing to his cheek mark to prove his identity."
  },
  {
    quote: "Mahaul toh aise bana rakha hai jaise PM hain yahan ke!",
    options: ["Bittoo Sharma", "Shruti Kakkar", "Satyendra Mishra", "Bablu"],
    answer: "Bittoo Sharma",
    fact: "Band Baaja Baaraat (2010) — Ranveer Singh teasing Anushka Sharma during wedding prep."
  },
  {
    quote: "Life mein jitna bhi try karo, kuch na kuch toh chhootega hi.",
    options: ["Bunny (Kabir)", "Naina Talwar", "Avi", "Aditi"],
    answer: "Bunny (Kabir)",
    fact: "Yeh Jawaani Hai Deewani (2013) — Ranbir Kapoor discussing priorities in Udaipur."
  },
  {
    quote: "Zindagi mein teeno cheezein zaroori hain — Entertainment, Entertainment, Entertainment!",
    options: ["Silk", "Suryakanth", "Abraham", "Nothoth"],
    answer: "Silk",
    fact: "The Dirty Picture (2011) — Vidya Balan's rule for box office success."
  },
  {
    quote: "Ek baar jo maine commitment kar di, uske baad toh main khud ki bhi nahi sunta.",
    options: ["Radhe", "Chulbul Pandey", "Devil", "Lovely Singh"],
    answer: "Radhe",
    fact: "Wanted (2009) — Salman Khan establishing his unbreakable word."
  },
  {
    quote: "Kitne aadmi the?",
    options: ["Gabbar Singh", "Sambha", "Kalia", "Thakur"],
    answer: "Gabbar Singh",
    fact: "Sholay (1975) — Amrish Puri questioning his henchmen after the dacoit retreat."
  },

  // ==================== HOLLYWOOD (25) ====================
  {
    quote: "Why so serious?",
    options: ["The Joker", "Bane", "Loki", "Green Goblin"],
    answer: "The Joker",
    fact: "The Dark Knight (2008) — Heath Ledger's menacing line during his interrogation of mobsters."
  },
  {
    quote: "I am inevitable.",
    options: ["Thanos", "Darth Vader", "Voldemort", "Sauron"],
    answer: "Thanos",
    fact: "Avengers: Endgame (2019) — Thanos declaring his confidence right before the final snap."
  },
  {
    quote: "With great power comes great responsibility.",
    options: ["Uncle Ben", "Tony Stark", "Nick Fury", "Professor X"],
    answer: "Uncle Ben",
    fact: "Spider-Man (2002) — Cliff Robertson delivering the ultimate lesson to Peter Parker."
  },
  {
    quote: "I'll make him an offer he can't refuse.",
    options: ["Don Vito Corleone", "Michael Corleone", "Sonny Corleone", "Tom Hagen"],
    answer: "Don Vito Corleone",
    fact: "The Godfather (1972) — Marlon Brando ensuring his godson gets his movie role."
  },
  {
    quote: "Houston, we have a problem.",
    options: ["Jim Lovell", "Jack Swigert", "Fred Haise", "Ken Mattingly"],
    answer: "Jim Lovell",
    fact: "Apollo 13 (1995) — Tom Hanks alerting NASA Mission Control to an onboard explosion."
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    options: ["Michael Corleone", "Vito Corleone", "Tony Montana", "Frank Costello"],
    answer: "Michael Corleone",
    fact: "The Godfather Part II (1974) — Al Pacino sharing strategic wisdom inherited from his father."
  },
  {
    quote: "You can't handle the truth!",
    options: ["Col. Nathan R. Jessep", "Lt. Daniel Kaffee", "Capt. Jack Ross", "Lt. Cmdr. Galloway"],
    answer: "Col. Nathan R. Jessep",
    fact: "A Few Good Men (1992) — Jack Nicholson snapping under cross-examination by Tom Cruise."
  },
  {
    quote: "Show me the money!",
    options: ["Rod Tidwell", "Jerry Maguire", "Avery Bishop", "Bob Sugar"],
    answer: "Rod Tidwell",
    fact: "Jerry Maguire (1996) — Cuba Gooding Jr. forcing his sports agent to shout on the phone."
  },
  {
    quote: "To infinity and beyond!",
    options: ["Buzz Lightyear", "Woody", "Emperor Zurg", "Rex"],
    answer: "Buzz Lightyear",
    fact: "Toy Story (1995) — Space Ranger Buzz Lightyear's signature hero catchphrase."
  },
  {
    quote: "I am Iron Man.",
    options: ["Tony Stark", "Steve Rogers", "Thor", "Bruce Banner"],
    answer: "Tony Stark",
    fact: "Iron Man (2008) — Robert Downey Jr. revealing his secret identity at the press conference."
  },
  {
    quote: "I'll be back.",
    options: ["The Terminator", "John McClane", "Rambo", "Dutch"],
    answer: "The Terminator",
    fact: "The Terminator (1984) — Arnold Schwarzenegger's iconic promise before driving through the police station."
  },
  {
    quote: "May the Force be with you.",
    options: ["General Dodonna", "Han Solo", "Luke Skywalker", "Darth Vader"],
    answer: "General Dodonna",
    fact: "Star Wars: A New Hope (1977) — Spoken to Rebel pilots before attacking the Death Star."
  },
  {
    quote: "You're gonna need a bigger boat.",
    options: ["Martin Brody", "Matt Hooper", "Quint", "Mayor Vaughn"],
    answer: "Martin Brody",
    fact: "Jaws (1975) — Chief Brody's reaction upon seeing the size of the great white shark."
  },
  {
    quote: "Say hello to my little friend!",
    options: ["Tony Montana", "Manny Ribera", "Frank Lopez", "Alejandro Sosa"],
    answer: "Tony Montana",
    fact: "Scarface (1983) — Al Pacino introduces his grenade launcher in the mansion shootout."
  },
  {
    quote: "E.T. phone home.",
    options: ["E.T.", "Elliott", "Gertie", "Michael"],
    answer: "E.T.",
    fact: "E.T. the Extra-Terrestrial (1982) — The alien learning to express his desire to contact his ship."
  },
  {
    quote: "You talking to me?",
    options: ["Travis Bickle", "Iris", "Sport", "Tom"],
    answer: "Travis Bickle",
    fact: "Taxi Driver (1976) — Robert De Niro rehearsing his tough-guy confrontation in the mirror."
  },
  {
    quote: "Bond. James Bond.",
    options: ["James Bond", "M", "Q", "Felix Leiter"],
    answer: "James Bond",
    fact: "Dr. No (1962) — Sean Connery introducing himself at the baccarat table."
  },
  {
    quote: "Elementary, my dear Watson.",
    options: ["Sherlock Holmes", "Dr. Watson", "Professor Moriarty", "Mycroft"],
    answer: "Sherlock Holmes",
    fact: "The Adventures of Sherlock Holmes (1939) — Basil Rathbone popularizing the classic phrase."
  },
  {
    quote: "I've a feeling we're not in Kansas anymore.",
    options: ["Dorothy Gale", "Scarecrow", "Tin Man", "Cowardly Lion"],
    answer: "Dorothy Gale",
    fact: "The Wizard of Oz (1939) — Dorothy speaking to Toto upon arriving in Oz."
  },
  {
    quote: "Here's looking at you, kid.",
    options: ["Rick Blaine", "Ilsa Lund", "Victor Laszlo", "Captain Renault"],
    answer: "Rick Blaine",
    fact: "Casablanca (1942) — Humphrey Bogart bidding farewell to Ingrid Bergman at the airfield."
  },
  {
    quote: "Just keep swimming.",
    options: ["Dory", "Marlin", "Nemo", "Crush"],
    answer: "Dory",
    fact: "Finding Nemo (2003) — Ellen DeGeneres' optimistic blue tang offering advice."
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
    fact: "Terminator 2 (1991) — The T-800 shattering the frozen T-1000."
  },
  {
    quote: "Carpe diem. Seize the day, boys.",
    options: ["John Keating", "Neil Perry", "Todd Anderson", "Nolan"],
    answer: "John Keating",
    fact: "Dead Poets Society (1989) — Robin Williams inspiring his students looking at old photos."
  },
  {
    quote: "I feel the need... the need for speed!",
    options: ["Maverick & Goose", "Iceman & Slider", "Viper & Jester", "Charlie"],
    answer: "Maverick & Goose",
    fact: "Top Gun (1986) — Tom Cruise and Anthony Edwards high-fiving on the flight deck."
  }
];