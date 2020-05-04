const films = [
  {
    id: 0,
    title: "The Platform",
    release: 2019,
    genre: "Sci-fi/Horror",
    last: "1h 34m",
    actors: ["water", "flour", "salt", "yeast"],
    description:
      "In the future, prisoners housed in vertical cells watch as inmates in the upper cells are fed while those below starve.",
    image: "./img/photo1.jpg",
  },
  {
    id: 1,
    title: "Inception",
    release: 2010,
    genre: "Thriller/Sci-fi",
    last: "2h 28m",
    actors: ["water", "flour", "salt", "yeast"],
    description:
      "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform the impossible, an inception.",
    image: "./img/photo2.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    release: 1972,
    genre: "Crime",
    last: "2h 58m",
    actors: ["water", "flour", "salt", "yeast"],
    description:
      "Don Vito Corleone, head of a mafia family, decides to handover his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    image: "./img/photo3.jpg",
  },

  {
    id: 3,
    title: "The Dark Knight",
    release: 2008,
    genre: "Action/Adventure",
    last: "2h 32m",
    actors: ["water", "flour", "salt", "yeast"],
    description:
      "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who wants to bring all the heroes down to his level.",
    image: "./img/photo4.jpg",
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    release: 2001,
    genre: "Fantasy/Adventure",
    last: "",
    actors: ["water", "flour", "salt", "yeast"],
    description:
      "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
    image: "./img/photo5.jpg",
  },
  {
    id: 5,
    title: "Fight Club",
    release: 1999,
    genre: "Drama/Thriller",
    last: "2h 31m",
    actors: ["water", "flour", "salt", "yeast"],
    description:
      "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
    image: "./img/photo6.jpg",
  },
];

let data = JSON.stringify(films);
export { data };
