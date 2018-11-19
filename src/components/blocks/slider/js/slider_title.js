const sliderContainer = document.querySelector('.slider-title-list');
const slideFirst = sliderContainer.firstElementChild;
const slideLast = sliderContainer.lastElementChild;

const popUpTextShow = function(sliderActive){
	var itemText = sliderActive.querySelector('.slider__text').querySelector('#popup-text').innerHTML;
	console.log(itemText);
	// console.log(sliderActive.querySelector('.slider__text').querySelector('#popup-text'));
};

const sliderTitleDown = function(){

	const slideActive = document.querySelector('.slider-title-list__item_active');
	const slideNext = slideActive.nextElementSibling;
    
	slideActive.classList.remove('slider-title-list__item_active');

	if (slideNext) {
		slideNext.classList.add('slider-title-list__item_active');
		popUpTextShow(slideNext);
	} else {
		slideFirst.classList.add('slider-title-list__item_active');
		popUpTextShow(slideFirst);
	}
};

const sliderTitleUp = function(){

	const slideActive = document.querySelector('.slider-title-list__item_active');
	const slidePrev = slideActive.previousElementSibling;
    
	slideActive.classList.remove('slider-title-list__item_active');
    
	if (slidePrev) {
		slidePrev.classList.add('slider-title-list__item_active');
		popUpTextShow(slidePrev);
	} else {
		slideLast.classList.add('slider-title-list__item_active');
		popUpTextShow(slideLast);
	}	
};

export { sliderTitleDown, sliderTitleUp };
