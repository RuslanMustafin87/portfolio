import sliderShow from './js/slider_show.js';
import {sliderSmallDown, sliderSmallUp} from './js/slider_small.js';
import { sliderTitleDown, sliderTitleUp } from './js/slider_title.js';

export default function(){
	
	const sliderBigContainer = document.querySelector('.slider__container');

	const slideDown = document.querySelector('.slider__slide-down');
	const slideUp = document.querySelector('.slider__slide-up');

	const sliderContainerDown = document.querySelector('.slider__container-down');
	const sliderContainerUp = document.querySelector('.slider__container-up');

	slideDown.onclick = slideMoveDown;
	
	function slideMoveDown(){
		
		slideDown.onclick = null;
		sliderTitleDown();
		sliderShow(sliderBigContainer, 'down', 'slide__active');
		sliderSmallDown(sliderContainerDown, 'slider-vert-roll__slide-active_down');
		sliderSmallUp(sliderContainerUp, 'slider-vert-roll__slide-active_up');

		setTimeout(function(){
			slideDown.onclick = slideMoveDown;
		}, 510);
	}

	slideUp.onclick = slideMoveUp;

	function slideMoveUp(){
		
		slideUp.onclick = null;
		sliderTitleUp();
		sliderShow(sliderBigContainer, 'up', 'slide__active');
		sliderSmallDown(sliderContainerUp, 'slider-vert-roll__slide-active_up');
		sliderSmallUp(sliderContainerDown, 'slider-vert-roll__slide-active_down');		

		setTimeout(function(){
			slideUp.onclick = slideMoveUp;
		}, 510);
	}

}