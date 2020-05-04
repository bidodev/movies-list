const films = [
  {
    id: 0,
    title: "Inception",
    release: 2010,
    genre: "Thriller/Sci-fi",
    last: "2h 28m",
    description:
      "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform the impossible, an inception.",
    folder: "inception",
    image: ["1.png", "2.png", "3.jpg"],
  },
  {
    id: 1,
    title: "The Platform",
    release: 2019,
    genre: "Sci-fi/Horror",
    last: "1h 34m",
    actors: ["water", "flour", "salt", "yeast"],
    description:
      "In the future, prisoners housed in vertical cells watch as inmates in the upper cells are fed while those below starve.",
    folder: "the_platform",
    image: ["1.png", "2.png", "3.jpg"],
  },

  {
    id: 2,
    title: "The Godfather",
    release: 1972,
    genre: "Crime",
    last: "2h 58m",
    description:
      "Don Vito Corleone, head of a mafia family, decides to handover his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    folder: "the_godfather",
    image: ["1.png", "2.jpg", "3.jpg"],
  },

  {
    id: 3,
    title: "The Dark Knight",
    release: 2008,
    genre: "Action/Adventure",
    last: "2h 32m",
    description:
      "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who wants to bring all the heroes down to his level.",
    folder: "the_dark_knight",
    image: ["1.png", "2.jpg", "3.jpg"],
  },
  {
    id: 4,
    title: "Fight Club",
    release: 1999,
    genre: "Drama/Thriller",
    last: "2h 31m",
    description:
      "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
    folder: "fight_club",
    image: ["1.png", "2.jpg", "3.jpg"],
  },
];

let data = JSON.stringify(films);
export { data };
