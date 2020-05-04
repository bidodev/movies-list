//import movies data
import { data as movies } from "./data.js";

//import DOM elements
import { elements } from "./base.js";

//parse the JSON string again into a array of objects
const parsedMovies = JSON.parse(movies);
//console.log(parsedMovies);

//render the menu of films
function renderMenuList(movie) {
  let { id, title } = movie;
  //console.log(movie);

  //generate the HTML for the menu..
  const markUp = `
  <div class="element-box">
  <i class="fas fa-play"></i>
    <li id="${id}" class="movies__item">${title}</li>
  </div>`;

  //insert the HTMl inside the <div class=""description-box"></div>
  elements.moviesList.insertAdjacentHTML("beforeend", markUp);

  //always renderize the first movie on the page load
  renderMovie(0);

  //addEventListener
  document.querySelectorAll(".movies__item").forEach(element => {
    element.addEventListener("click", renderMovie);
  });
}

//render a movie
function renderMovie(movieId) {
  if (movieId.type == "click") {
    movieId = movieId.target.id;
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
  elements.description.innerHTML = markUp;
}

//HANDLER EVENTS
document.addEventListener(
  "DOMContentLoaded",
  parsedMovies.forEach(renderMenuList)
);
