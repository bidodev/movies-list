//import movies data
import { data as movies } from "./data.js";

//import DOM elements
import { elements } from "./base.js";

//parse the JSON string again into a ARRAY of objects
const parsedMovies = JSON.parse(movies);

//render the menu of films
const renderMenuList = movie => {
  let { id, title } = movie;

  //create the markUp
  const markUp = `
  <div class="element-box">
  <i class="fas fa-video"></i><li id="${id}" class="movies__item">${title}</li></div>
  `;

  elements.moviesList.insertAdjacentHTML("beforeend", markUp);
};

//render movie
function renderMovie(event) {
  let movieId = 0;

  if (event.type === "DOMContentLoaded") {
    movieId;
  } else {
    movieId = event.target.id;
  }

  //destructing the object
  let {
    title,
    release,
    genre,
    last,
    description,
    folder,
    image,
  } = parsedMovies[movieId];

  //create the markUp
  const markUp = `
    <figure class="composition">
      <img src="./img/${folder}/${image[0]}" alt="${title}" class="composition__photo composition__photo--p1">
      <img src="./img/${folder}/${image[1]}" alt="${title}" class="composition__photo composition__photo--p2">
      <img src="./img/${folder}/${image[2]}" alt="${title}" class="composition__photo composition__photo--p3">
    </figure>
    <div class="description-movie">
      <div class="title">${title}</div>

      <div class="sub-desc">${release} ‧ ${genre} ‧ ${last}</div>

      
      <div class="description">${description}</div>
    </div>`;

  // ${description}
  elements.description.innerHTML = markUp;
}

//for each film call the function render film
parsedMovies.forEach(renderMenuList);

//HANDLER EVENTS
elements.moviesList.addEventListener("click", renderMovie);
document.addEventListener("DOMContentLoaded", renderMovie);
