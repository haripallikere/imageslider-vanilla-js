let imageIndex = ["media/0.webp", "media/1.webp", "media/2.webp"];

let navigate = slideImages();
function dotSelect(f) {
  generateImageTag(f);
  dotCheck(f);
}

function slideImages() {
  let flag = 0;
  return (input) => {
    if (input < 0) {
      if (flag === 0) {
        flag = imageIndex.length - 1;
      } else {
        flag -= 1;
      }
    }
    if (input > 0) {
      if (flag === imageIndex.length - 1) {
        flag = 0;
      } else {
        flag += 1;
      }
    }
    generateImageTag(flag);
  };
}

function generateImageTag(input = 0) {
  const slideContainer = document.querySelector(".slides");
  if (slideContainer.hasChildNodes()) {
    slideContainer.removeChild(slideContainer.children[0]);
  }
  const img = document.createElement("IMG");
  img.setAttribute("src", `${imageIndex[input]}`);
  slideContainer.appendChild(img);
}

function generateDotNav() {
  let dotNav = document.querySelector(".dot-nav");
  const dot = document.createElement("li");
  imageIndex.map((element, i) => {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dots");
    dot.setAttribute("id", `${i}`);
    dot.setAttribute("onclick", `dotSelect(${i})`);
    return dotNav.appendChild(dot);
  });
}

function dotCheck(f) {
  let check = document.getElementById(`${f}`);
  if (check.classList.contains("active")) {
    check.classList.remove("active");
  }

  //   check.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  generateImageTag();
  generateDotNav();
});
