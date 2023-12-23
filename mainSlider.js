// Для первого слайдера
let currentIndex = 0;
const slides = document.querySelectorAll(".sliderItems img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Функция автоматического изменения слайдов
function startSlideShow() {
  changeSlide(1); // меняем слайд на следующий
  window.setTimeout(startSlideShow, 5000); // повторяем функцию через 3 секунды
}

startSlideShow();

// Для второго слайдера
let secondSliderIndex = 0;
const secondSlides = document.querySelectorAll(".sliderItems__second img");

function showSecondSlide(index) {
  secondSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function changeSecondSlide(direction) {
  secondSliderIndex += direction;
  if (secondSliderIndex < 0) {
    secondSliderIndex = secondSlides.length - 1;
  } else if (secondSliderIndex >= secondSlides.length) {
    secondSliderIndex = 0;
  }
  showSecondSlide(secondSliderIndex);
}

// Функция автоматического изменения слайдов для второго слайдера
function startSecondSlideShow() {
  changeSecondSlide(1); // меняем слайд на следующий
  window.setTimeout(startSecondSlideShow, 5000); // повторяем функцию через 3 секунды
}

startSecondSlideShow();

// Для третьего слайдера
let thirdSliderIndex = 0;
const thirdSlides = document.querySelectorAll(".sliderItems__third img");

function showThirdSlide(index) {
  thirdSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function changeThirdSlide(direction) {
  thirdSliderIndex += direction;
  if (thirdSliderIndex < 0) {
    thirdSliderIndex = thirdSlides.length - 1;
  } else if (thirdSliderIndex >= thirdSlides.length) {
    thirdSliderIndex = 0;
  }
  showThirdSlide(thirdSliderIndex);
}

// Функция автоматического изменения слайдов для третьего слайдера
function startThirdSlideShow() {
  changeThirdSlide(1); // меняем слайд на следующий
  window.setTimeout(startThirdSlideShow, 5000); // повторяем функцию через 3 секунды
}

startThirdSlideShow();
