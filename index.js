//code review

let imageIndex = [
  "media/0.webp",
  "media/1.webp",
  "media/2.webp",
  "media/lachlan-dempsey-6VPEOdpFNAs-unsplash.jpg",
  "media/ben-sweet-2LowviVHZ-E-unsplash.jpg",
];

//initialize
let select = 0;

//dotSelect
function dotSelect(index) {
  dotChecked(index);
  generateImageTag(index);
}

// image slide navigation logic
function navigate(direction) {
  let index = select;

  if (direction < 0) {
    if (index === 0) {
      index = imageIndex.length - 1;
    } else {
      index -= 1;
    }
  }
  if (direction > 0) {
    if (index === imageIndex.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
  }

  select = index;
  dotChecked(select);
  generateImageTag(select);
}

// Generate image tags dynamically
function generateImageTag(index = 0) {
  const slideContainer = document.querySelector(".slides");
  if (slideContainer.hasChildNodes()) {
    slideContainer.removeChild(slideContainer.children[0]);
  }
  const img = document.createElement("IMG");
  img.setAttribute("src", `${imageIndex[index]}`);
  slideContainer.appendChild(img);
}

//generate dot nagivation dynamically
function generateDotNav() {
  let dotNav = document.querySelector(".dot-nav");
  imageIndex.map((element, i) => {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dots");
    dot.setAttribute("id", `${i}`);
    dot.setAttribute("onclick", `dotSelect(${i})`);
    return dotNav.appendChild(dot);
  });
}

function dotChecked(index = select) {
  let checkParent = document.querySelector(".dot-nav");
  let check = document.getElementById(`${index}`);
  let length = checkParent.children.length;

  for (let i = 0; i < length; i++) {
    checkParent.children[i].classList.remove("active");
  }
  check.classList.add("active");
  generateImageTag(index);
  select = index;
}

document.addEventListener("DOMContentLoaded", () => {
  generateImageTag(0);
  generateDotNav();
  dotChecked();
});
