
const sliderContainer = document.querySelector('.slider__container');
const slideFirst = sliderContainer.firstElementChild;
const slideLast = sliderContainer.lastElementChild;

const sliderBigDown = function(){
    
	const slideActive = document.querySelector('.slide__active');
	const slideNext = slideActive.nextElementSibling;
    
	slideActive.classList.remove('slide__active');

	if (slideNext) {
		slideNext.classList.add('slide__active');
	} else {
		slideFirst.classList.add('slide__active');
	}
};

const sliderBigUp = function(){

	const slideActive = document.querySelector('.slide__active');
	const slidePrev = slideActive.previousElementSibling;
    
	slideActive.classList.remove('slide__active');
    
	if (slidePrev) {
		slidePrev.classList.add('slide__active');
	} else {
		slideLast.classList.add('slide__active');
	}	

};

export { sliderBigDown, sliderBigUp };
