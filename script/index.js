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
  <div class="a">
  <i class="fas fa-video"></i><li id="${id}" class="movies__item">${title}</li></div>
  `;

  elements.moviesList.insertAdjacentHTML("beforeend", markUp);
};

//render movie
function renderMovie(event) {
  const movieId = event.target.id;
  console.log(movieId);

  //destructing the object
  let {
    id,
    title,
    release,
    genre,
    last,
    description,
    actors,
    image,
  } = parsedMovies[movieId];
  console.log(release);

  //create the markUp
  const markUp = `
    <figure class="poster">
      <img src="${image}" alt="${title}">
    </figure>
    <div class="description-movie">
      <div class="title">${title}</div>

      <div class="sub-desc">${release} ‧ ${genre} ‧ ${last}</div>

      
      <div class="description">${description}</div>
    </div>`;

  // ${description}
  elements.description.innerHTML = markUp;
}

parsedMovies.forEach(renderMenuList);

//HANDLER EVENTS
elements.moviesList.addEventListener("click", renderMovie);

//Hover effect
const items = document.querySelectorAll("li");

function changeBackground() {
  this.style.backgroundColor = "#7a2929";
  this.style.color = "#f1f1f1";
}

function backToDefault() {
  this.style.backgroundColor = "#e5e5e5";
  this.style.color = "#181818";
}

//Event Listeners
items.forEach(item => {
  item.addEventListener("mouseover", changeBackground);
  item.addEventListener("mouseout", backToDefault);
});
