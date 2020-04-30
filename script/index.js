
//Hover effect

const items = document.querySelectorAll("li");

function changeBackground() {
  this.style.backgroundColor = "#ffd369";
}
function backToDefault() {
  this.style.backgroundColor = "#ffffff";
  this.style.color = "#263f44";
}
function displayDescr() {
    this.style.backgroundColor = "#015668";
    this.style.color = "#ffd369";
  }


//hide the description box
const descriptionBox = document.querySelector(".description-box")
console.log(descriptionBox)
descriptionBox.classList.add("hideDescription", "displayDescription");


items.forEach((item) => {
    item.addEventListener("mouseover", changeBackground);
    item.addEventListener("click", displayDescr);
    item.addEventListener("mouseout", backToDefault);
  });
  