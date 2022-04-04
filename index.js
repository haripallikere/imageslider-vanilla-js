//code review
let imageIndex = [
  "media/1.jpg",
  "media/2.jpg",
  "media/3.jpg",
  "media/4.jpg",
  "media/5.jpg",
];

// selectors
const track = document.querySelector(".slider__container");
const dotNav = document.querySelector(".dot-nav");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

class Imageslider {
  constructor(imageNode, imageIndex, navBar) {
    this.imageNode = imageNode;
    this.imageIndex = imageIndex;
    this.navBar = navBar;
    this.state = 0;
  }

  generateDotNav() {
    const len = this.imageNode.children.length;
    for (let i = 0; i < len; i++) {
      const dot = document.createElement("div");
      dot.setAttribute("class", "dot");
      dot.setAttribute("id", `${i}`);
      this.navBar.appendChild(dot);
    }
  }

  generateImgElement() {
    this.imageIndex.map((ele, i) => {
      const div = document.createElement("div");
      div.setAttribute("class", "slide");
      const img = document.createElement("img");
      img.src = `${ele}`;
      img.setAttribute("id", `${i}`);
      div.appendChild(img);
      this.imageNode.appendChild(div);
    });
  }

  imageSlides() {
    let slides = Array.from(this.imageNode.children);
    const slideWidth = slides[0].clientWidth;
    slides.forEach((slide, i) => {
      slide.style.left = slideWidth * i + "px";
    });
  }

  nextImage() {
    let count = 0;
    count += 1;
    this.state += 1;
    let size = this.imageNode.children[0].clientWidth;
    let length = this.imageNode.children.length;
    if (this.imageNode.children[0].style.animation) {
      this.imageNode.children[0].style.animation = "none";
    }
    if (this.state === length) {
      this.state = 0;
      this.imageNode.style.transition = "none";
      this.imageNode.children[this.state].style.animation = `first .4s`;
    } else {
      this.imageNode.style.transition = "transform .3s linear";
    }

    this.imageNode.style.transform = "translateX(" + -size * this.state + "px)";
  }

  previousImage() {
    let count = 0;
    count += 1;
    this.state -= 1;
    let size = this.imageNode.children[0].clientWidth;
    let length = this.imageNode.children.length;
    if (this.imageNode.children[length - 1].style.animation) {
      this.imageNode.children[length - 1].style.animation = "none";
    }
    if (this.state < 0) {
      this.state = length - 1;
      this.imageNode.style.transition = "none";
      this.imageNode.children[this.state].style.animation = `last .4s`;
    } else {
      this.imageNode.style.transition = "transform .3s linear";
    }
    this.imageNode.style.transform = "translateX(" + -size * this.state + "px)";
  }

  dotNavigation() {
    let size = this.imageNode.children[0].clientWidth;
    const element = Array.from(this.navBar.children);
    this.imageNode.style.transform = "translateX(" + -size * this.state + "px)";
    element.forEach((ele) => {
      ele.style.background = "none";
    });
    this.imageNode.style.transition = "transform .4s ease-in-out";
    element[this.state].style.background = "white";
  }
}

// instance of
const slider = new Imageslider(track, imageIndex, dotNav);

slider.generateImgElement();
slider.imageSlides();
slider.generateDotNav();
slider.dotNavigation();

// Event listeners
nextButton.addEventListener("click", () => {
  slider.nextImage();
  slider.dotNavigation();
});

previousButton.addEventListener("click", () => {
  slider.previousImage();
  slider.dotNavigation();
});

// dotnav event listeners
Array.from(dotNav.children).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    slider.state = Number(e.target.id);
    slider.dotNavigation();
  });
});
