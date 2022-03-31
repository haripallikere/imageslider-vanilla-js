//code review
let imageIndex = [
  "media/0.webp",
  "media/1.webp",
  "media/2.webp",
  "media/lachlan-dempsey-6VPEOdpFNAs-unsplash.jpg",
  "media/ben-sweet-2LowviVHZ-E-unsplash.jpg",
];
class Imageslider {
  constructor(currentImage, imageIndex) {
    this.currentImage = currentImage;
    this.imageIndex = imageIndex;
  }

  generateImages() {
    this.imageIndex.map((v, i) => {
      const img = document.createElement("img");
      img.setAttribute("class", "slides");
      img.setAttribute("id", `${i}`);
      img.src = `${v}`;
      this.currentImage.appendChild(img);
    });
  }

  imageSlides() {
    let a = this.currentImage.children;
    console.log(Array.from(a), "d");
  }
}

//links to images
// selectors
const track = document.querySelector(".slider__container");
const dotNav = document.querySelector(".dot-nav");

const slider = new Imageslider(track, imageIndex);

slider.generateImages();
console.log(slider.imageSlides());

// function generateImages() {
//   imageIndex.map((v, i) => {
//     const img = document.createElement("img");
//     img.setAttribute("class", "slides");
//     img.setAttribute("id", `${i}`);
//     img.src = `${v}`;
//     return track.appendChild(img);
//   });
//   images = Array.from(track.children);
//   console.log(images);
// }

// function generateNavBar() {
//   imageIndex.forEach((v, i) => {
//     const dot = document.createElement("DIV");
//     dot.setAttribute("id", `${i}`);
//     return dotNav.appendChild(dot);
//   });
// }

// generateImages();
// generateNavBar();
