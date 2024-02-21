"use strict"

//------------------------------------------------------------------------Слайдер

const sliderMini = document.getElementById('stages-slider');

window.addEventListener('resize', function () {
	if (window.innerWidth <= 600) {
		sliderMini.classList.add('slider__mini');
    sliderMini.classList.remove('stages__body');
    $(sliderMini).slick({
      arrows: true,
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,

    });
	} else {
		sliderMini.classList.remove('slider__mini');
    sliderMini.classList.add('stages__body');
	}
});

$(document).ready(function () {

  let currentSlide;
  let slidesCount;
  let sliderCounter = document.createElement("div");
  sliderCounter.classList.add("slider__counter");
  
  let updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + "/" + slidesCount);
  };
  
  $(".players__slider").on("init", function (event, slick) {
    $(".players__slider").append(sliderCounter);
    updateSliderCounter(slick);
  });
  
  $(".players__slider").on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
});

$('.players__slider').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

});


//------------------------------------------------------------------------Слайдер




