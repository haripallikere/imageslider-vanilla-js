let imageIndex = ["media/0.webp", "media/1.webp", "media/2.webp"];
let nextBtn = document.querySelector(".next");
let backBtn = document.querySelector(".previous");

nextBtn.addEventListener("click", () => {
  generateImages(1);
});

function generateImages(im = 0) {
  const slideContainer = document.querySelector(".slides");
  if (slideContainer.hasChildNodes()) {
    slideContainer.removeChild(slideContainer.children[0]);
  }
  const img = document.createElement("IMG");
  img.setAttribute("src", `${imageIndex[im]}`);
  slideContainer.appendChild(img);
}

generateImages();
