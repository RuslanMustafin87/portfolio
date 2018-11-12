import {sliderBigDown, sliderBigUp} from './js/slider_big.js';
import {sliderSmallDown, sliderSmallUp} from './js/slider_small.js';

export default function(){

	
	// import sliderSmallLeft from 'js/slider_small_left';
    
	const slideDown = document.querySelector('.slider__slide-down');
	const slideUp = document.querySelector('.slider__slide-up');

	slideDown.addEventListener('click', function(){
		
		sliderBigDown();
		sliderSmallDown();
        
	});

	slideUp.addEventListener('click', function(){
		
		sliderBigUp();
		sliderSmallUp();
		
	});

	//маленкий левый слайдер
        
	

}