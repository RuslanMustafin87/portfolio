const sliderContainer = document.querySelector('.slider-title-list');
const slideFirst = sliderContainer.firstElementChild;
const slideLast = sliderContainer.lastElementChild;

const popUpTextShow = function(slideActive, slidePrevActive){
	const itemPrevActive = slidePrevActive.querySelector('.title').querySelector('#popup-text');
	const arrItemPrevChildren = Array.prototype.slice.call(itemPrevActive.children);

	arrItemPrevChildren.forEach(function(item){
		item.style.opacity = '0';
		item.style.transition = 'none';
	});

	const itemActive = slideActive.querySelector('.title').querySelector('#popup-text');
	const arrItemChildren = Array.prototype.slice.call(itemActive.children);

	let countTransitionDelay = 0;

	arrItemChildren.forEach(function(item){
		
		item.style.opacity = '1';
		countTransitionDelay += 0.06;
		item.style.transition = `opacity .05s linear ${countTransitionDelay}s`;
	});
	
};

document.addEventListener('DOMContentLoaded', popUpTextShow(slideFirst, slideFirst));

const sliderTitleDown = function(){

	const slideActive = document.querySelector('.slider-title-list__item_active');
	const slideNext = slideActive.nextElementSibling;
    
	slideActive.classList.remove('slider-title-list__item_active');

	if (slideNext) {
		slideNext.classList.add('slider-title-list__item_active');
		popUpTextShow(slideNext, slideActive);
	} else {
		slideFirst.classList.add('slider-title-list__item_active');
		popUpTextShow(slideFirst, slideActive);
	}
};

const sliderTitleUp = function(){

	const slideActive = document.querySelector('.slider-title-list__item_active');
	const slidePrev = slideActive.previousElementSibling;
    
	slideActive.classList.remove('slider-title-list__item_active');
    
	if (slidePrev) {
		slidePrev.classList.add('slider-title-list__item_active');
		popUpTextShow(slidePrev, slideActive);
	} else {
		slideLast.classList.add('slider-title-list__item_active');
		popUpTextShow(slideLast, slideActive);
	}	
};

export { sliderTitleDown, sliderTitleUp };
