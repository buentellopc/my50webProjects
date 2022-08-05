// get the constants, slides is an array-like structure
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// temp variable that will activate and determine the slide based
// on this counter, it will be used to get the right slide of the slides
let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  // this condition will allow us to wrap the end and start again
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  // this condition will allow us to wrap the start and be at the end
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

// this is the function that makes the image to take all the width and height, it will
// get the image of a particular slide element (div) and set it to be the current background
// image of the body
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// This function will let all images but one be shown
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
