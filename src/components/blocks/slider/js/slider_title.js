const sliderContainer = document.querySelector('.slider-title-list');
const slideFirst = sliderContainer.firstElementChild;
const slideLast = sliderContainer.lastElementChild;

const popUpTextShow = function(sliderActive){
	const itemActive = sliderActive.querySelector('.title').querySelector('#popup-text');
	let itemText = itemActive.innerHTML;

	itemActive.innerHTML = '';

	let arrText = [];

	arrText = itemText.split('');

	console.log(arrText.length);

	for(var i = 0; i < arrText.length; i++){
		setInterval(function(){
			itemActive.innerHTML += arrText[i];
		}, 100);
	}

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
