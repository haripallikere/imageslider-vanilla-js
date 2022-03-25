// import { a } from "./images.js";
// "./media/01.webp";
let a = 0;
function createImgtag() {
  const slideContainer = document.querySelector(".slides");
  const img = document.createElement("IMG");
  img.setAttribute("src", `./media/${a}.webp`);
  slideContainer.appendChild(img);
  console.log(img);
}

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("document loaded");
  createImgtag();
});
