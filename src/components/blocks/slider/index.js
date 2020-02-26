import sliderShow from './js/slider_show.js';
import sliderSmall from './js/slider_small.js';
import sliderTitle from './js/slider_title.js';

export default (function() {

	const sliderBigContainer = document.querySelector('.slider__container');

	const slideDown = document.querySelector('.slider__slide-down');
	const slideUp = document.querySelector('.slider__slide-up');

	const sliderContainerDown = document.querySelector('.slider__container-down');
	const sliderContainerUp = document.querySelector('.slider__container-up');

	slideDown.onclick = slideMoveDown;

	function slideMoveDown() {

		slideDown.onclick = null;
		sliderTitle.slideTitleDown();
		sliderShow.slideShowDown(sliderBigContainer, 'slide__active');
		sliderSmall.slideDown(sliderContainerDown, 'slider-vert-roll__slide-active_down');
		sliderSmall.slideUp(sliderContainerUp, 'slider-vert-roll__slide-active_up');

		setTimeout(function() {
			slideDown.onclick = slideMoveDown;
		}, 510);
	}

	slideUp.onclick = slideMoveUp;

	function slideMoveUp() {

		slideUp.onclick = null;
		sliderTitle.slideTitleUp();
		sliderShow.slideShowUp(sliderBigContainer, 'slide__active');
		sliderSmall.slideDown(sliderContainerUp, 'slider-vert-roll__slide-active_up');
		sliderSmall.slideUp(sliderContainerDown, 'slider-vert-roll__slide-active_down');

		setTimeout(function() {
			slideUp.onclick = slideMoveUp;
		}, 510);
	}
})();