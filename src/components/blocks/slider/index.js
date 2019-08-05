import sliderShow from './js/slider_show.js';
import {sliderSmallDown, sliderSmallUp} from './js/slider_small.js';
import { sliderTitleDown, sliderTitleUp } from './js/slider_title.js';

export default function(){
	
	const sliderBigContainer = document.querySelector('.slider__container');
	// const sliderTitleContainer = document.querySelector('.slider-title-list');

	const slideDown = document.querySelector('.slider__slide-down');
	const slideUp = document.querySelector('.slider__slide-up');

	const sliderContainerDown = document.querySelector('.slider__container-down');
	const sliderContainerUp = document.querySelector('.slider__container-up');

	slideDown.addEventListener('click', function(){
		
		sliderTitleDown();
		sliderShow(sliderBigContainer, 'down', 'slide__active');
		// sliderShow(sliderTitleContainer, 'down', 'slider-title-list__item_active');
		sliderSmallDown(sliderContainerDown, 'slider-vert-roll__slide-active_down');
		sliderSmallUp(sliderContainerUp, 'slider-vert-roll__slide-active_up');
	});

	slideUp.addEventListener('click', function(){
		
		sliderTitleUp();
		sliderShow(sliderBigContainer, 'up', 'slide__active');
		// sliderShow(sliderTitleContainer, 'up', 'slider-title-list__item_active');
		sliderSmallDown(sliderContainerUp, 'slider-vert-roll__slide-active_up');
		sliderSmallUp(sliderContainerDown, 'slider-vert-roll__slide-active_down');		
	});

}