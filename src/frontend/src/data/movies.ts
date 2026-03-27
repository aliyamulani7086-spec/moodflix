export type Mood = {
  id: string;
  name: string;
  emoji: string;
  description: string;
  gradient: string;
  borderColor: string;
};

export type Movie = {
  id: string;
  title: string;
  year: number;
  genre: string;
  language: string;
  duration: string;
  rating: number;
  description: string;
  moodIds: string[];
  posterColor: string;
  trailerUrl?: string;
  thumbnail?: string;
};

export const MOODS: Mood[] = [
  {
    id: "happy",
    name: "Happy",
    emoji: "😄",
    description: "Feel-good vibes",
    gradient:
      "linear-gradient(135deg, oklch(0.82 0.18 80 / 15%), oklch(0.82 0.18 80 / 5%))",
    borderColor: "oklch(0.82 0.18 80)",
  },
  {
    id: "sad",
    name: "Sad",
    emoji: "😢",
    description: "Emotional & moving",
    gradient:
      "linear-gradient(135deg, oklch(0.58 0.20 265 / 15%), oklch(0.58 0.20 265 / 5%))",
    borderColor: "oklch(0.58 0.20 265)",
  },
  {
    id: "excited",
    name: "Excited",
    emoji: "🤩",
    description: "High energy thrills",
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.27 330 / 15%), oklch(0.62 0.27 330 / 5%))",
    borderColor: "oklch(0.62 0.27 330)",
  },
  {
    id: "scared",
    name: "Scared",
    emoji: "😱",
    description: "Spine-chilling horror",
    gradient:
      "linear-gradient(135deg, oklch(0.45 0.2 30 / 15%), oklch(0.45 0.2 30 / 5%))",
    borderColor: "oklch(0.55 0.22 30)",
  },
  {
    id: "romantic",
    name: "Romantic",
    emoji: "💕",
    description: "Love & passion",
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.27 330 / 15%), oklch(0.55 0.22 350 / 5%))",
    borderColor: "oklch(0.70 0.22 5)",
  },
  {
    id: "anxious",
    name: "Anxious",
    emoji: "😰",
    description: "Edge-of-seat suspense",
    gradient:
      "linear-gradient(135deg, oklch(0.51 0.27 285 / 15%), oklch(0.51 0.27 285 / 5%))",
    borderColor: "oklch(0.51 0.27 285)",
  },
  {
    id: "bored",
    name: "Bored",
    emoji: "😴",
    description: "Something new & fresh",
    gradient:
      "linear-gradient(135deg, oklch(0.87 0.15 200 / 15%), oklch(0.87 0.15 200 / 5%))",
    borderColor: "oklch(0.87 0.15 200)",
  },
  {
    id: "angry",
    name: "Angry",
    emoji: "😤",
    description: "Intense action",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.22 30 / 15%), oklch(0.55 0.22 30 / 5%))",
    borderColor: "oklch(0.65 0.25 40)",
  },
];

export const MOVIES: Movie[] = [
  // === ENGLISH ===
  {
    id: "1",
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy / Adventure",
    language: "English",
    duration: "1h 39m",
    rating: 8.1,
    description:
      "A legendary concierge at a famous European hotel between the wars becomes embroiled in a comically elaborate caper involving the theft of a priceless Renaissance painting.",
    moodIds: ["happy", "bored", "excited"],
    posterColor: "linear-gradient(135deg, #c62828, #e53935)",
    trailerUrl: "https://www.youtube.com/watch?v=UxKpUoVJGSs",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/nX5C4eFzmy8KwXFWFcYS9mBgMky.jpg",
  },
  {
    id: "2",
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi / Drama",
    language: "English",
    duration: "2h 49m",
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces an environmental collapse.",
    moodIds: ["excited", "anxious", "sad"],
    posterColor: "linear-gradient(135deg, #0a0a1a, #1a237e)",
    trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: "3",
    title: "La La Land",
    year: 2016,
    genre: "Musical / Romance",
    language: "English",
    duration: "2h 8m",
    rating: 8.0,
    description:
      "While navigating their careers in Los Angeles, a pianist and an aspiring actress fall in love while attempting to reconcile their dreams and ambitions with the necessities of day-to-day life.",
    moodIds: ["romantic", "happy", "sad"],
    posterColor: "linear-gradient(135deg, #1a237e, #4a148c)",
    trailerUrl: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
  },
  {
    id: "4",
    title: "Get Out",
    year: 2017,
    genre: "Horror / Thriller",
    language: "English",
    duration: "1h 44m",
    rating: 7.7,
    description:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering unease about their family grows to a terrifying reality.",
    moodIds: ["scared", "anxious", "angry"],
    posterColor: "linear-gradient(135deg, #1b0000, #4e0000)",
    trailerUrl: "https://www.youtube.com/watch?v=sRfnevzM9kQ",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/tFXcEccSQMVl9dQ3LFQQmqZouXL.jpg",
  },
  {
    id: "5",
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action / Sci-Fi",
    language: "English",
    duration: "3h 1m",
    rating: 8.4,
    description:
      "After the devastating events of Infinity War, the Avengers assemble once more to reverse the actions of Thanos and restore balance to the universe.",
    moodIds: ["excited", "sad", "happy"],
    posterColor: "linear-gradient(135deg, #1a0533, #4b0082)",
    trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: "6",
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genre: "Romance / Sci-Fi",
    language: "English",
    duration: "1h 48m",
    rating: 8.3,
    description:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    moodIds: ["romantic", "sad", "anxious"],
    posterColor: "linear-gradient(135deg, #0d47a1, #283593)",
    trailerUrl: "https://www.youtube.com/watch?v=gqzDApDPnzE",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
  },
  {
    id: "7",
    title: "The Silence of the Lambs",
    year: 1991,
    genre: "Thriller / Horror",
    language: "English",
    duration: "1h 58m",
    rating: 8.6,
    description:
      "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer.",
    moodIds: ["scared", "anxious", "excited"],
    posterColor: "linear-gradient(135deg, #1a1a1a, #3e0000)",
    trailerUrl: "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
  },
  {
    id: "8",
    title: "Crazy Rich Asians",
    year: 2018,
    genre: "Comedy / Romance",
    language: "English",
    duration: "2h 0m",
    rating: 6.9,
    description:
      "This contemporary romantic comedy follows native New Yorker Rachel Chu as she accompanies her longtime boyfriend, Nick Young, to his best friend's wedding in Singapore.",
    moodIds: ["romantic", "happy"],
    posterColor: "linear-gradient(135deg, #f9a825, #e65100)",
    trailerUrl: "https://www.youtube.com/watch?v=gZyoRJ_Ej1E",
  },
  {
    id: "9",
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action / Sci-Fi",
    language: "English",
    duration: "2h 0m",
    rating: 8.1,
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the help of a group of female prisoners.",
    moodIds: ["excited", "angry", "anxious"],
    posterColor: "linear-gradient(135deg, #bf360c, #e64a19)",
    trailerUrl: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
  },
  {
    id: "10",
    title: "Inside Out",
    year: 2015,
    genre: "Animation / Family",
    language: "English",
    duration: "1h 35m",
    rating: 8.2,
    description:
      "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions – Joy, Fear, Anger, Disgust and Sadness – conflict on how to navigate a new city and high school.",
    moodIds: ["happy", "sad", "bored"],
    posterColor: "linear-gradient(135deg, #f9a825, #1565c0)",
    trailerUrl: "https://www.youtube.com/watch?v=yRUAzGQ3nSY",
  },
  // === HINDI / BOLLYWOOD ===
  {
    id: "11",
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    genre: "Romance / Drama",
    language: "Hindi",
    duration: "3h 9m",
    rating: 8.1,
    description:
      "When Raj meets Simran on a trip to Europe, he falls in love with her, but she is engaged to someone else. Raj vows to win over her family and win her heart.",
    moodIds: ["romantic", "happy"],
    posterColor: "linear-gradient(135deg, #880e4f, #c2185b)",
    trailerUrl: "https://www.youtube.com/watch?v=x7Np4FQl5w0",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/mwI7PAZqQVaF1p7fvAMIxJH2Iic.jpg",
  },
  {
    id: "12",
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy / Drama",
    language: "Hindi",
    duration: "2h 50m",
    rating: 8.4,
    description:
      "Two friends embark on a quest for a lost buddy. On this journey, they recall their college days and the friend who changed their lives.",
    moodIds: ["happy", "bored", "sad"],
    posterColor: "linear-gradient(135deg, #1565c0, #1976d2)",
    trailerUrl: "https://www.youtube.com/watch?v=xvszmNXdM4w",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
  },
  {
    id: "13",
    title: "Dangal",
    year: 2016,
    genre: "Biography / Sport",
    language: "Hindi",
    duration: "2h 41m",
    rating: 8.4,
    description:
      "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become world-class wrestlers.",
    moodIds: ["excited", "happy", "angry"],
    posterColor: "linear-gradient(135deg, #e65100, #bf360c)",
    trailerUrl: "https://www.youtube.com/watch?v=x_7YlGv9u1g",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/jkfGg3LsOHiEPVKmqnSZTINlbXD.jpg",
  },
  {
    id: "14",
    title: "Gangs of Wasseypur",
    year: 2012,
    genre: "Crime / Action",
    language: "Hindi",
    duration: "5h 21m",
    rating: 8.2,
    description:
      "A clash between a powerful coal mafia and a fearless rebel unfolds across decades, blending revenge, politics, and the lure of power.",
    moodIds: ["excited", "angry", "anxious"],
    posterColor: "linear-gradient(135deg, #1a0000, #4e1600)",
    trailerUrl: "https://www.youtube.com/watch?v=GsOt4xK24Z8",
  },
  {
    id: "15",
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    genre: "Comedy / Drama",
    language: "Hindi",
    duration: "2h 33m",
    rating: 8.2,
    description:
      "Three friends decide to turn a pre-wedding road trip across Spain into a trip of a lifetime by completing each member's dream adventure.",
    moodIds: ["happy", "bored", "excited"],
    posterColor: "linear-gradient(135deg, #006064, #00838f)",
    trailerUrl: "https://www.youtube.com/watch?v=GiEJgJLSNnM",
  },
  // === KOREAN ===
  {
    id: "16",
    title: "Parasite",
    year: 2019,
    genre: "Thriller / Drama",
    language: "Korean",
    duration: "2h 12m",
    rating: 8.5,
    description:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Park family and concocts a scheme to become entangled in their lives.",
    moodIds: ["anxious", "angry", "excited"],
    posterColor: "linear-gradient(135deg, #1b5e20, #2e7d32)",
    trailerUrl: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: "17",
    title: "Train to Busan",
    year: 2016,
    genre: "Horror / Action",
    language: "Korean",
    duration: "1h 58m",
    rating: 7.6,
    description:
      "While a zombie apocalypse overtakes South Korea, passengers on a high-speed train fight to survive as the undead horde rapidly consumes the country.",
    moodIds: ["scared", "excited", "anxious"],
    posterColor: "linear-gradient(135deg, #1a0000, #3e0000)",
    trailerUrl: "https://www.youtube.com/watch?v=pyWuHv2-Ixo",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/1d5FJc0GkSHMQb1MDI8G0z3fMjU.jpg",
  },
  {
    id: "18",
    title: "Oldboy",
    year: 2003,
    genre: "Mystery / Thriller",
    language: "Korean",
    duration: "2h 0m",
    rating: 8.4,
    description:
      "After being imprisoned for 15 years without explanation, a man is released and given five days to find his captor and the reason for his imprisonment.",
    moodIds: ["anxious", "angry", "excited"],
    posterColor: "linear-gradient(135deg, #212121, #424242)",
    trailerUrl: "https://www.youtube.com/watch?v=2HkjrJ6IK5E",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbZwKQW4YBJ5ok.jpg",
  },
  {
    id: "19",
    title: "The Handmaiden",
    year: 2016,
    genre: "Thriller / Romance",
    language: "Korean",
    duration: "2h 25m",
    rating: 8.1,
    description:
      "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
    moodIds: ["romantic", "anxious", "excited"],
    posterColor: "linear-gradient(135deg, #880e4f, #4a148c)",
    trailerUrl: "https://www.youtube.com/watch?v=whldChqCsYk",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/zSufsRbqerFGBkfBYkUUFGCMsMH.jpg",
  },
  {
    id: "20",
    title: "Burning",
    year: 2018,
    genre: "Mystery / Drama",
    language: "Korean",
    duration: "2h 28m",
    rating: 7.5,
    description:
      "Jong-su runs into Hae-mi, a girl from his hometown who asks him to look after her cat while she travels to Africa. When she returns with Ben, Jong-su is consumed with unsettling jealousy.",
    moodIds: ["sad", "anxious", "bored"],
    posterColor: "linear-gradient(135deg, #bf360c, #4e342e)",
    trailerUrl: "https://www.youtube.com/watch?v=2pSJ3YTxXog",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/lRLQqGnkWDEFuVJyFcAoEFJhGGe.jpg",
  },
  // === JAPANESE ===
  {
    id: "21",
    title: "Spirited Away",
    year: 2001,
    genre: "Animation / Fantasy",
    language: "Japanese",
    duration: "2h 5m",
    rating: 8.6,
    description:
      "During her family's move to the suburbs, a sulky ten-year-old girl wanders into a world ruled by gods, witches and spirits, where humans are changed into beasts.",
    moodIds: ["happy", "excited", "bored"],
    posterColor: "linear-gradient(135deg, #00838f, #006064)",
    trailerUrl: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
  },
  {
    id: "22",
    title: "Your Name",
    year: 2016,
    genre: "Animation / Romance",
    language: "Japanese",
    duration: "1h 46m",
    rating: 8.4,
    description:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    moodIds: ["romantic", "sad", "excited"],
    posterColor: "linear-gradient(135deg, #1565c0, #e91e63)",
    trailerUrl: "https://www.youtube.com/watch?v=xU47nhruN-Q",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
  },
  {
    id: "23",
    title: "Battle Royale",
    year: 2000,
    genre: "Action / Thriller",
    language: "Japanese",
    duration: "1h 54m",
    rating: 7.6,
    description:
      "In the future, a junior high class is taken to a deserted island where, as part of a ruthless authoritarian program, they must fight each other until only one survivor remains.",
    moodIds: ["excited", "scared", "anxious"],
    posterColor: "linear-gradient(135deg, #1a0000, #b71c1c)",
    trailerUrl: "https://www.youtube.com/watch?v=5pSgfEMpEsM",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/mUxJgLGHerFmfCe7NNrUPfVNFnN.jpg",
  },
  {
    id: "24",
    title: "Seven Samurai",
    year: 1954,
    genre: "Action / Drama",
    language: "Japanese",
    duration: "3h 27m",
    rating: 8.6,
    description:
      "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    moodIds: ["excited", "bored", "angry"],
    posterColor: "linear-gradient(135deg, #263238, #37474f)",
    trailerUrl: "https://www.youtube.com/watch?v=QMLx_yRPAeE",
  },
  // === SPANISH ===
  {
    id: "25",
    title: "Pan's Labyrinth",
    year: 2006,
    genre: "Fantasy / Drama",
    language: "Spanish",
    duration: "1h 58m",
    rating: 8.2,
    description:
      "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    moodIds: ["scared", "sad", "excited"],
    posterColor: "linear-gradient(135deg, #1b5e20, #880e4f)",
    trailerUrl: "https://www.youtube.com/watch?v=gG22XNhtnoY",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/nFPMPDqjWBzAaRZWQcKxdWuAB44.jpg",
  },
  {
    id: "26",
    title: "The Sea Inside",
    year: 2004,
    genre: "Biography / Drama",
    language: "Spanish",
    duration: "2h 5m",
    rating: 8.1,
    description:
      "The true story of Ramón Sampedro, who was paralyzed from the neck down after a diving accident and spent 30 years fighting for the right to die with dignity.",
    moodIds: ["sad", "bored", "anxious"],
    posterColor: "linear-gradient(135deg, #0277bd, #01579b)",
    trailerUrl: "https://www.youtube.com/watch?v=eMKHDLpjGLE",
  },
  // === FRENCH ===
  {
    id: "27",
    title: "Amélie",
    year: 2001,
    genre: "Romance / Comedy",
    language: "French",
    duration: "2h 2m",
    rating: 8.3,
    description:
      "Amélie is an innocent and naive girl in Paris with whom she unconventionally aims to bring happiness to those around her. All the while, she is neglecting her own feelings.",
    moodIds: ["happy", "romantic", "bored"],
    posterColor: "linear-gradient(135deg, #e65100, #f9a825)",
    trailerUrl: "https://www.youtube.com/watch?v=M5uYCWVFuPQ",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/f4AF3JiSOcuDmBXSGGNaFiMqXIy.jpg",
  },
  {
    id: "28",
    title: "Blue Is the Warmest Colour",
    year: 2013,
    genre: "Drama / Romance",
    language: "French",
    duration: "3h 0m",
    rating: 7.7,
    description:
      "Adèle's life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire and to assert herself as a woman and as an adult.",
    moodIds: ["romantic", "sad", "anxious"],
    posterColor: "linear-gradient(135deg, #1565c0, #880e4f)",
    trailerUrl: "https://www.youtube.com/watch?v=FDGBKjTlXXc",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/5oCOE0KNFg16mUr9xbhEWD3BXPR.jpg",
  },
  // === TAMIL ===
  {
    id: "29",
    title: "Jai Bhim",
    year: 2021,
    genre: "Legal / Drama",
    language: "Tamil",
    duration: "2h 44m",
    rating: 8.8,
    description:
      "A fearless High Court advocate fights for justice for a tribal couple after a police officer arrests the husband for a crime he didn't commit and is then killed in custody.",
    moodIds: ["angry", "sad", "anxious"],
    posterColor: "linear-gradient(135deg, #bf360c, #e65100)",
    trailerUrl: "https://www.youtube.com/watch?v=PBkzFq0Bfqg",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/nAbMSbeFZ4pJZFpzTfJDIxjxwMd.jpg",
  },
  {
    id: "30",
    title: "Vikram Vedha",
    year: 2017,
    genre: "Action / Thriller",
    language: "Tamil",
    duration: "2h 28m",
    rating: 8.4,
    description:
      "A tough police officer Vikram sets out to track down and kill an encounter specialist gangster Vedha. But, after a series of meetings, Vedha narrates three stories that change Vikram's perspective.",
    moodIds: ["excited", "anxious", "angry"],
    posterColor: "linear-gradient(135deg, #1a0000, #4e0000)",
    trailerUrl: "https://www.youtube.com/watch?v=hROLHMIkm0k",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/jTSwACnRdovPYfEcHCdgJdHanBb.jpg",
  },
  // === ITALIAN ===
  {
    id: "31",
    title: "Life Is Beautiful",
    year: 1997,
    genre: "Drama / Comedy",
    language: "Italian",
    duration: "1h 56m",
    rating: 8.6,
    description:
      "When an open-spirited Jewish man and his son become victims of the Holocaust, he uses a creative sense of humor to help his son endure the brutal reality.",
    moodIds: ["happy", "sad", "romantic"],
    posterColor: "linear-gradient(135deg, #e65100, #bf360c)",
    trailerUrl: "https://www.youtube.com/watch?v=AAuMqtLsyEc",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/6tFgklnIOnHRsbkMHMXAU9PFkfD.jpg",
  },
  {
    id: "32",
    title: "The Great Beauty",
    year: 2013,
    genre: "Drama",
    language: "Italian",
    duration: "2h 21m",
    rating: 7.9,
    description:
      "Jep Gambardella has seduced his way through the vibrant Rome social scene. On the eve of his 65th birthday, he turns to reflect on his successes and failures.",
    moodIds: ["bored", "sad", "happy"],
    posterColor: "linear-gradient(135deg, #bf8600, #e65100)",
    trailerUrl: "https://www.youtube.com/watch?v=F7YMjdUVYVE",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/fBqhM8mh6B4VRKHmZMPlQygHBKY.jpg",
  },
  {
    id: "33",
    title: "Cinema Paradiso",
    year: 1988,
    genre: "Drama / Romance",
    language: "Italian",
    duration: "2h 35m",
    rating: 8.5,
    description:
      "A famous film director returns to his hometown and recalls his childhood friendship with the village cinema's projectionist.",
    moodIds: ["sad", "happy", "bored"],
    posterColor: "linear-gradient(135deg, #bf8600, #e65100)",
    trailerUrl: "https://www.youtube.com/watch?v=XGgm3pGFb3k",
  },
  // === MANDARIN ===
  {
    id: "34",
    title: "Crouching Tiger, Hidden Dragon",
    year: 2000,
    genre: "Action / Romance",
    language: "Mandarin",
    duration: "2h 0m",
    rating: 7.9,
    description:
      "A warrior gives away his sword to a friend, triggering a chain of events involving deadly villains and a young noblewoman with secret martial arts skills.",
    moodIds: ["excited", "romantic", "anxious"],
    posterColor: "linear-gradient(135deg, #1b5e20, #2e7d32)",
    trailerUrl: "https://www.youtube.com/watch?v=pYC1qlL8T0c",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/cFRnXKoZyuCnBzSjjuVd5OLRuGe.jpg",
  },
  {
    id: "35",
    title: "Farewell My Concubine",
    year: 1993,
    genre: "Drama / History",
    language: "Mandarin",
    duration: "2h 51m",
    rating: 8.1,
    description:
      "Two Peking Opera students share a turbulent friendship and unrequited love across decades of Chinese history.",
    moodIds: ["sad", "romantic", "anxious"],
    posterColor: "linear-gradient(135deg, #880e4f, #ad1457)",
    trailerUrl: "https://www.youtube.com/watch?v=EHk_GpjvCF8",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/s7ThvovRCvSJrVdKdvDdKrz5cMD.jpg",
  },
  // === GERMAN ===
  {
    id: "36",
    title: "Das Boot",
    year: 1981,
    genre: "War / Thriller",
    language: "German",
    duration: "2h 29m",
    rating: 8.4,
    description:
      "A German submarine crew experiences WWII from the perspective of claustrophobic steel coffins, in one of cinema's greatest war films.",
    moodIds: ["anxious", "excited", "scared"],
    posterColor: "linear-gradient(135deg, #37474f, #455a64)",
    trailerUrl: "https://www.youtube.com/watch?v=7i6K3ek1nOM",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/grLMH0JM3t7pTerLR0GhAuPzPHC.jpg",
  },
  {
    id: "37",
    title: "The Lives of Others",
    year: 2006,
    genre: "Drama / Thriller",
    language: "German",
    duration: "2h 17m",
    rating: 8.5,
    description:
      "In Cold War East Germany, a Stasi agent assigned to spy on a playwright becomes drawn into the lives he is monitoring in unexpected ways.",
    moodIds: ["sad", "anxious", "bored"],
    posterColor: "linear-gradient(135deg, #263238, #37474f)",
    trailerUrl: "https://www.youtube.com/watch?v=7z6e2K_Iy4I",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/4pYXRzHRCpMoMzOv5TALB2hG1xF.jpg",
  },
  // === ENGLISH HITS ===
  {
    id: "38",
    title: "The Dark Knight",
    year: 2008,
    genre: "Action / Crime",
    language: "English",
    duration: "2h 32m",
    rating: 9.0,
    description:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy, forcing Batman to question his principles.",
    moodIds: ["excited", "anxious", "angry"],
    posterColor: "linear-gradient(135deg, #1a1a2e, #0d0d0d)",
    trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: "39",
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama / Comedy",
    language: "English",
    duration: "2h 22m",
    rating: 8.8,
    description:
      "Through several decades of American history, a man with a low IQ but good intentions witnesses and influences some pivotal events of the 20th century.",
    moodIds: ["happy", "sad", "bored"],
    posterColor: "linear-gradient(135deg, #8bc34a, #558b2f)",
    trailerUrl: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  },
  {
    id: "40",
    title: "Titanic",
    year: 1997,
    genre: "Romance / Disaster",
    language: "English",
    duration: "3h 14m",
    rating: 7.9,
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated RMS Titanic.",
    moodIds: ["romantic", "sad", "excited"],
    posterColor: "linear-gradient(135deg, #0d47a1, #1565c0)",
    trailerUrl: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
  },
  {
    id: "41",
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama / Crime",
    language: "English",
    duration: "2h 22m",
    rating: 9.3,
    description:
      "Two imprisoned men bond over years, finding solace and eventual redemption through acts of decency in the darkest corners of a penitentiary.",
    moodIds: ["sad", "bored", "excited"],
    posterColor: "linear-gradient(135deg, #4e342e, #6d4c41)",
    trailerUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
  },
  {
    id: "42",
    title: "Coco",
    year: 2017,
    genre: "Animation / Family",
    language: "English",
    duration: "1h 45m",
    rating: 8.4,
    description:
      "A young boy is transported to the Land of the Dead and discovers the secrets of his family history through music, love, and memory.",
    moodIds: ["happy", "sad", "excited"],
    posterColor: "linear-gradient(135deg, #e65100, #ff6d00)",
    trailerUrl: "https://www.youtube.com/watch?v=xlnPHQ3TLX8",
  },
  {
    id: "43",
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi / Thriller",
    language: "English",
    duration: "2h 28m",
    rating: 8.8,
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    moodIds: ["excited", "anxious", "bored"],
    posterColor: "linear-gradient(135deg, #0d47a1, #01579b)",
    trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: "44",
    title: "The Conjuring",
    year: 2013,
    genre: "Horror / Thriller",
    language: "English",
    duration: "1h 52m",
    rating: 7.5,
    description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their new farmhouse.",
    moodIds: ["scared", "anxious"],
    posterColor: "linear-gradient(135deg, #1a1a2e, #212121)",
    trailerUrl: "https://www.youtube.com/watch?v=k10ETZ41q5o",
  },
  {
    id: "45",
    title: "Top Gun: Maverick",
    year: 2022,
    genre: "Action / Drama",
    language: "English",
    duration: "2h 10m",
    rating: 8.3,
    description:
      "After more than thirty years of service, Pete Mitchell is called back to train a group of top graduates for a high-stakes mission.",
    moodIds: ["excited", "happy", "anxious"],
    posterColor: "linear-gradient(135deg, #1565c0, #0288d1)",
    trailerUrl: "https://www.youtube.com/watch?v=giXco2jaZ_4",
  },
  // === TELUGU ===
  {
    id: "46",
    title: "RRR",
    year: 2022,
    genre: "Action / Drama",
    language: "Telugu",
    duration: "3h 7m",
    rating: 8.0,
    description:
      "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
    moodIds: ["excited", "angry", "happy"],
    posterColor: "linear-gradient(135deg, #b71c1c, #e65100)",
    trailerUrl: "https://www.youtube.com/watch?v=f_vbAtFSEc0",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/nEDWaJCQTQXIJqdPVkT4gTqMplw.jpg",
  },
  {
    id: "47",
    title: "Baahubali: The Beginning",
    year: 2015,
    genre: "Action / Epic",
    language: "Telugu",
    duration: "2h 39m",
    rating: 8.0,
    description:
      "In ancient India, an adventurous and daring man becomes involved in a decades old feud between two warring peoples.",
    moodIds: ["excited", "angry", "happy"],
    posterColor: "linear-gradient(135deg, #4a148c, #880e4f)",
    trailerUrl: "https://www.youtube.com/watch?v=jZmRcSrRwao",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/5cKnLOfMlWpFtB6fj6SRTMZ59WR.jpg",
  },
  {
    id: "48",
    title: "Arjun Reddy",
    year: 2017,
    genre: "Drama / Romance",
    language: "Telugu",
    duration: "3h 5m",
    rating: 8.1,
    description:
      "A short-tempered house surgeon gets used to drugs and alcohol after his girlfriend is forced to marry another person.",
    moodIds: ["romantic", "angry", "sad"],
    posterColor: "linear-gradient(135deg, #1a237e, #283593)",
    trailerUrl: "https://www.youtube.com/watch?v=bVf2bLmxRwY",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/3uHDJJPYMqZS2g7xQNJPrAPJiY1.jpg",
  },
  {
    id: "49",
    title: "Mahanati",
    year: 2018,
    genre: "Biography / Drama",
    language: "Telugu",
    duration: "2h 52m",
    rating: 8.7,
    description:
      "The life story of Savitri, a legendary actress from the 1950s Telugu film industry, tracing her meteoric rise and tragic fall.",
    moodIds: ["sad", "romantic", "bored"],
    posterColor: "linear-gradient(135deg, #bf360c, #f9a825)",
    trailerUrl: "https://www.youtube.com/watch?v=RVMt0sJr2rM",
  },
  {
    id: "50",
    title: "Pushpa: The Rise",
    year: 2021,
    genre: "Action / Crime",
    language: "Telugu",
    duration: "2h 59m",
    rating: 7.6,
    description:
      "A laborer rises through the ranks of a red sandalwood smuggling syndicate in the forests of Andhra Pradesh.",
    moodIds: ["excited", "angry", "anxious"],
    posterColor: "linear-gradient(135deg, #1b0000, #4e1200)",
    trailerUrl: "https://www.youtube.com/watch?v=Q1NKMPhP8PY",
  },
  // === MALAYALAM ===
  {
    id: "51",
    title: "Drishyam",
    year: 2013,
    genre: "Thriller / Drama",
    language: "Malayalam",
    duration: "2h 40m",
    rating: 8.7,
    description:
      "A man goes to great lengths to protect his family from the investigation of a crime that is being committed against them.",
    moodIds: ["anxious", "scared", "excited"],
    posterColor: "linear-gradient(135deg, #263238, #1a237e)",
    trailerUrl: "https://www.youtube.com/watch?v=4s4RWXQB6Mk",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/7PQxnJCLvmOOQRYL5D9h1ixqFJe.jpg",
  },
  {
    id: "52",
    title: "Vikram",
    year: 2022,
    genre: "Action / Thriller",
    language: "Malayalam",
    duration: "2h 54m",
    rating: 8.4,
    description:
      "A black ops special investigative group is formed to hunt down masked assailants who murdered a team of narcotics officers.",
    moodIds: ["excited", "anxious", "angry"],
    posterColor: "linear-gradient(135deg, #1a0000, #4e0000)",
    trailerUrl: "https://www.youtube.com/watch?v=Gkd-apeLbbc",
  },
  {
    id: "53",
    title: "Lucifer",
    year: 2019,
    genre: "Action / Political",
    language: "Malayalam",
    duration: "2h 51m",
    rating: 7.7,
    description:
      "After the death of a political leader, a power struggle erupts, and a mysterious man with a dark past rises to prominence.",
    moodIds: ["excited", "anxious", "angry"],
    posterColor: "linear-gradient(135deg, #4a148c, #1a0533)",
    trailerUrl: "https://www.youtube.com/watch?v=U0GDsR-LKIU",
  },
  {
    id: "54",
    title: "Kumbalangi Nights",
    year: 2019,
    genre: "Drama / Family",
    language: "Malayalam",
    duration: "2h 18m",
    rating: 8.4,
    description:
      "Four brothers in a dysfunctional family in a coastal village learn to love and look out for each other while confronting their flaws.",
    moodIds: ["sad", "happy", "romantic"],
    posterColor: "linear-gradient(135deg, #006064, #00838f)",
    trailerUrl: "https://www.youtube.com/watch?v=o6tlAm6yT2Y",
  },
  {
    id: "55",
    title: "Minnal Murali",
    year: 2021,
    genre: "Superhero / Comedy",
    language: "Malayalam",
    duration: "2h 38m",
    rating: 7.8,
    description:
      "Two men struck by the same bolt of lightning develop extraordinary superpowers. One becomes a local hero, the other a terrifying villain.",
    moodIds: ["excited", "happy", "anxious"],
    posterColor: "linear-gradient(135deg, #f9a825, #1565c0)",
    trailerUrl: "https://www.youtube.com/watch?v=k4wn0tPiMCg",
  },
  // === BENGALI ===
  {
    id: "56",
    title: "Pather Panchali",
    year: 1955,
    genre: "Drama",
    language: "Bengali",
    duration: "2h 5m",
    rating: 8.4,
    description:
      "Apu and his sister Durga live a life of poverty in a rural Bengal village, experiencing joys and heartbreaks that shape their childhood forever.",
    moodIds: ["sad", "bored"],
    posterColor: "linear-gradient(135deg, #4e342e, #6d4c41)",
    trailerUrl: "https://www.youtube.com/watch?v=2wWi5Qi4bQo",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/cLtVIflWwpU3kHbsAEVc0JRx0A1.jpg",
  },
  {
    id: "57",
    title: "Kahaani",
    year: 2012,
    genre: "Thriller / Mystery",
    language: "Bengali",
    duration: "2h 2m",
    rating: 8.1,
    description:
      "A pregnant woman arrives in Kolkata searching for her missing husband. As she investigates, she uncovers a sinister conspiracy.",
    moodIds: ["anxious", "excited", "scared"],
    posterColor: "linear-gradient(135deg, #263238, #880e4f)",
    trailerUrl: "https://www.youtube.com/watch?v=9xzXWaXSCqk",
  },
  {
    id: "58",
    title: "Detective Byomkesh Bakshy!",
    year: 2015,
    genre: "Mystery / Thriller",
    language: "Bengali",
    duration: "2h 19m",
    rating: 7.5,
    description:
      "A young sleuth navigates the dangerous underworld of 1940s Calcutta while investigating a drug lord's rise to power.",
    moodIds: ["anxious", "excited", "bored"],
    posterColor: "linear-gradient(135deg, #1a1a1a, #37474f)",
    trailerUrl: "https://www.youtube.com/watch?v=mHj9o16bJKU",
  },
  // === TURKISH ===
  {
    id: "59",
    title: "Winter Sleep",
    year: 2014,
    genre: "Drama",
    language: "Turkish",
    duration: "3h 16m",
    rating: 8.1,
    description:
      "A former actor runs a small hotel in central Anatolia with his young wife and sister, stirring tensions that reveal deep truths about each character.",
    moodIds: ["bored", "sad", "anxious"],
    posterColor: "linear-gradient(135deg, #37474f, #263238)",
    trailerUrl: "https://www.youtube.com/watch?v=BFbgBziBCJs",
  },
  {
    id: "60",
    title: "Once Upon a Time in Anatolia",
    year: 2011,
    genre: "Drama / Crime",
    language: "Turkish",
    duration: "2h 37m",
    rating: 7.8,
    description:
      "A murder investigation unfolds across the Anatolian steppe, revealing the inner lives and moral struggles of those searching for a buried body.",
    moodIds: ["bored", "sad", "anxious"],
    posterColor: "linear-gradient(135deg, #1a1a1a, #4e342e)",
    trailerUrl: "https://www.youtube.com/watch?v=VQjWDwjSO_o",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/eCRqOUq2A3AGFE3IQSRm0rnj7JD.jpg",
  },
  {
    id: "61",
    title: "Mustang",
    year: 2015,
    genre: "Drama",
    language: "Turkish",
    duration: "1h 37m",
    rating: 7.8,
    description:
      "In a Turkish village, five orphaned sisters are progressively confined by their conservative uncle who arranges their marriages one by one.",
    moodIds: ["angry", "sad", "anxious"],
    posterColor: "linear-gradient(135deg, #f9a825, #4e342e)",
    trailerUrl: "https://www.youtube.com/watch?v=x5s0UVbFJGY",
  },
  // === THAI ===
  {
    id: "62",
    title: "Bad Genius",
    year: 2017,
    genre: "Thriller / Crime",
    language: "Thai",
    duration: "2h 10m",
    rating: 7.7,
    description:
      "A genius high-school student devises a plan to cheat on international exams and make money selling answers to wealthy peers.",
    moodIds: ["excited", "anxious", "bored"],
    posterColor: "linear-gradient(135deg, #1565c0, #006064)",
    trailerUrl: "https://www.youtube.com/watch?v=WYKbNz8KCSY",
  },
  {
    id: "63",
    title: "Uncle Boonmee Who Can Recall His Past Lives",
    year: 2010,
    genre: "Fantasy / Drama",
    language: "Thai",
    duration: "1h 54m",
    rating: 6.9,
    description:
      "A dying man recalls his past lives with the help of friendly ghosts and his beloved dead wife, in a deeply spiritual journey.",
    moodIds: ["bored", "sad"],
    posterColor: "linear-gradient(135deg, #1b5e20, #4a148c)",
    trailerUrl: "https://www.youtube.com/watch?v=i4FDxqEgS00",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/9mHM3A5CQXWN9vU3vIrJVWN0Dtk.jpg",
  },
  // === ARABIC ===
  {
    id: "64",
    title: "Capernaum",
    year: 2018,
    genre: "Drama",
    language: "Arabic",
    duration: "2h 6m",
    rating: 8.4,
    description:
      "A 12-year-old boy sues his parents for bringing him into a world of poverty, chaos, and neglect in the slums of Beirut.",
    moodIds: ["sad", "angry", "anxious"],
    posterColor: "linear-gradient(135deg, #bf360c, #6d4c41)",
    trailerUrl: "https://www.youtube.com/watch?v=jEKGMbqFtAo",
  },
  {
    id: "65",
    title: "The Insult",
    year: 2017,
    genre: "Drama",
    language: "Arabic",
    duration: "1h 52m",
    rating: 7.7,
    description:
      "In present-day Lebanon, an accidental clash between a Lebanese Christian and a Palestinian refugee escalates into a life-altering court case.",
    moodIds: ["angry", "anxious", "sad"],
    posterColor: "linear-gradient(135deg, #37474f, #1a237e)",
    trailerUrl: "https://www.youtube.com/watch?v=2Gy0-g4l61s",
  },
  // === MARATHI ===
  {
    id: "66",
    title: "Sairat",
    year: 2016,
    genre: "Romance / Drama",
    language: "Marathi",
    duration: "2h 55m",
    rating: 8.3,
    description:
      "A lower-caste boy falls in love with a girl from an upper-caste family in rural Maharashtra, leading to tragic consequences for the young couple.",
    moodIds: ["romantic", "sad", "anxious"],
    posterColor: "linear-gradient(135deg, #880e4f, #e65100)",
    trailerUrl: "https://www.youtube.com/watch?v=cTVcxAGBUy4",
  },
  {
    id: "67",
    title: "Court",
    year: 2014,
    genre: "Drama / Legal",
    language: "Marathi",
    duration: "1h 56m",
    rating: 7.9,
    description:
      "A folk singer is arrested under charges of abetment to suicide, and the case drags on in a court of law, exposing the absurdities of India's legal system.",
    moodIds: ["bored", "sad", "angry"],
    posterColor: "linear-gradient(135deg, #263238, #4e342e)",
    trailerUrl: "https://www.youtube.com/watch?v=FeRmFCJZqhY",
  },
  // === PUNJABI ===
  {
    id: "68",
    title: "Qissa",
    year: 2013,
    genre: "Drama",
    language: "Punjabi",
    duration: "1h 49m",
    rating: 7.3,
    description:
      "After the Partition of India, a Sikh man raises his youngest daughter as a son. Years later, when the 'son' is married, the charade begins to unravel in haunting ways.",
    moodIds: ["sad", "anxious", "bored"],
    posterColor: "linear-gradient(135deg, #4a148c, #263238)",
    trailerUrl: "https://www.youtube.com/watch?v=tJFuA2BZShs",
  },
  // === PORTUGUESE ===
  {
    id: "69",
    title: "City of God",
    year: 2002,
    genre: "Crime / Drama",
    language: "Portuguese",
    duration: "2h 10m",
    rating: 8.6,
    description:
      "Two boys growing up in a violent neighborhood in Rio de Janeiro take different paths — one becomes a photographer, the other a drug dealer.",
    moodIds: ["excited", "angry", "anxious"],
    posterColor: "linear-gradient(135deg, #bf360c, #f9a825)",
    trailerUrl: "https://www.youtube.com/watch?v=dcUOO4KQBUE",
  },
  {
    id: "70",
    title: "Carandiru",
    year: 2003,
    genre: "Crime / Drama",
    language: "Portuguese",
    duration: "2h 25m",
    rating: 7.5,
    description:
      "A doctor begins working inside the world's largest prison, in São Paulo, and witnesses the everyday lives of inmates before the 1992 massacre.",
    moodIds: ["sad", "angry", "anxious"],
    posterColor: "linear-gradient(135deg, #1a1a1a, #4e342e)",
    trailerUrl: "https://www.youtube.com/watch?v=RkDiYdJ2F2s",
  },
  // === RUSSIAN ===
  {
    id: "71",
    title: "Leviathan",
    year: 2014,
    genre: "Drama",
    language: "Russian",
    duration: "2h 21m",
    rating: 7.6,
    description:
      "A man struggles against a corrupt mayor who wants to take over his land on the shores of the Barents Sea in northern Russia.",
    moodIds: ["sad", "angry", "bored"],
    posterColor: "linear-gradient(135deg, #263238, #0277bd)",
    trailerUrl: "https://www.youtube.com/watch?v=8lBj-0QUOo0",
  },
  {
    id: "72",
    title: "Stalker",
    year: 1979,
    genre: "Sci-Fi / Drama",
    language: "Russian",
    duration: "2h 42m",
    rating: 8.1,
    description:
      "A guide leads two men through a mysterious restricted zone to reach a room said to grant one's deepest wish, forcing them to confront their innermost desires.",
    moodIds: ["bored", "anxious", "scared"],
    posterColor: "linear-gradient(135deg, #37474f, #1b5e20)",
    trailerUrl: "https://www.youtube.com/watch?v=Q3DOATAoBJA",
  },
];
