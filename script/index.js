//Hover effect
const items = document.querySelectorAll("li");

function changeBackground() {
  this.style.backgroundColor = "#ffd369";
}
function backToDefault() {
  this.style.backgroundColor = "#ffffff";
  this.style.color = "#263f44";
}

function displayDescr(event) {
  this.style.backgroundColor = "#015668";
  this.style.color = "#ffd369";
  descriptionBox.classList.add("displayDescription");
  for (let i = 0; i <= 7; i++) {
    if (event.target == items[i]) {
      let randomSource = "photo" + (i + 1) + ".jpg";
      // console.log(randomSource);
      posterImg.style.backgroundImage = `url('./img/${randomSource}')`;
    }

    if (event.target == items[1]) {
      movieDescription.textContent =
        "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.";
    } else if (event.target == items[2]) {
      movieDescription.textContent =
        "One prisoner tells to another that he hid a very large amount of money before the arrest. Together they manage to escape, but this is where their adventures are just beginning.";
    } else if (event.target == items[3]) {
      movieDescription.textContent =
        "A woman who must steal a statue from a Paris museum to help conceal her father's art forgeries is assisted by a man.";
    } else if (event.target == items[4]) {
      movieDescription.textContent =
        "Maria Altmann, an octogenarian Jewish refugee, takes on the Austrian government to recover artwork she believes rightfully belongs to her family.";
    }
  }
}
//hide the description box
const descriptionBox = document.querySelector(".description-box");
descriptionBox.classList.add("hideDescription");
const posterImg = document.querySelector(".poster");
const movieDescription = document.querySelector("p");

//Event Listeners
items.forEach((item) => {
  item.addEventListener("mouseover", changeBackground);
  item.addEventListener("click", displayDescr);
  item.addEventListener("mouseout", backToDefault);
});
