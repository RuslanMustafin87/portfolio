import {sliderBigDown, sliderBigUp} from './js/slider_big.js';
import {sliderSmallDown, sliderSmallUp} from './js/slider_small.js';
import {sliderTitleDown, sliderTitleUp} from './js/slider_title.js';


export default function(){

	
	// import sliderSmallLeft from 'js/slider_small_left';
    
	const slideDown = document.querySelector('.slider__slide-down');
	const slideUp = document.querySelector('.slider__slide-up');

	const sliderContainerDown = document.querySelector('.slider__container-down');
	const sliderContainerUp = document.querySelector('.slider__container-up');

	slideDown.addEventListener('click', function(){
		
		sliderBigDown();
		sliderTitleDown();
		sliderSmallDown(sliderContainerDown, 'slider-vert-roll__slide-active_down');
		sliderSmallUp(sliderContainerUp, 'slider-vert-roll__slide-active_up');
	});

	slideUp.addEventListener('click', function(){
		
		sliderBigUp();
		sliderTitleUp();
		sliderSmallDown(sliderContainerUp, 'slider-vert-roll__slide-active_up');
		sliderSmallUp(sliderContainerDown, 'slider-vert-roll__slide-active_down');		
	});

}