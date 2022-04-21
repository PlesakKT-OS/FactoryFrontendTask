const slider1 = document.getElementById("slider-1");
const slider2 = document.getElementById("slider-2");
let items1 = slider1.getElementsByClassName("item");
let items2 = slider2.getElementsByClassName("item");
let active = document.querySelector(".active");

let images1 = document.querySelectorAll(".image1");
let images2 = document.querySelectorAll(".image2");
let sliderCounter = 8;

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

nextButton.addEventListener("click", next);
previousButton.addEventListener("click", previous);

function next() {
  sliderCounter++;
  if (sliderCounter === 9) {
    sliderCounter = 0;
    for (let i = 0; i < 9; i++) {
      images1[i].classList.remove("active");
      images2[i].classList.remove("active");
    }
  }
  slider1.append(items1[0]);
  slider2.append(items2[0]);
  images1[sliderCounter].classList.add("active");
  images2[sliderCounter].classList.add("active");
}
function previous() {
  images1[sliderCounter].classList.remove("active");
  images2[sliderCounter].classList.remove("active");
  sliderCounter--;
  if (sliderCounter === -1) {
    sliderCounter = 8;
    for (let i = 0; i < 9; i++) {
      images1[i].classList.remove("active");
      images2[i].classList.remove("active");
    }
  }
  images1[sliderCounter].classList.add("active");
  images2[sliderCounter].classList.add("active");

  slider1.prepend(items1[items1.length - 1]);
  slider2.prepend(items2[items2.length - 1]);
}
