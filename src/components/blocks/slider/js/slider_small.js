// функция для получения порядкового номера элемента в родителе

function indexElem(elem){

	var i = 0;

	while(elem.previousElementSibling){
		i++;
		elem = elem.previousElementSibling;
	}

	return i;
}

// движение вниз контейнера сладера

const sliderContainerDown = document.querySelector('.slider__container-down');

function sliderSmallDown(){
		
	const slideVertActive = document.querySelector('.slider-vert-roll__slide-active_down');
	const slideNext = slideVertActive.nextElementSibling;
	const slideFirst = sliderContainerDown.firstElementChild;
	let positionSliderVert;
		
	slideVertActive.classList.remove('slider-vert-roll__slide-active_down');

	if (slideNext){

		slideNext.classList.add('slider-vert-roll__slide-active_down');
		
		positionSliderVert = indexElem(slideNext) * -100;
	} else {
		
		slideFirst.classList.add('slider-vert-roll__slide-active_down');

		positionSliderVert = indexElem(slideFirst) * -100;
	}

	sliderContainerDown.style.top = positionSliderVert + '%';
}

// движение вверх контейнера сладера

const sliderContainerUp = document.querySelector('.slider__container-up');

function sliderSmallUp(){
		
	const slideVertActive = document.querySelector('.slider-vert-roll__slide-active_up');
	const slideNext = slideVertActive.nextElementSibling;
	const slideLast = sliderContainerUp.lastElementChild;
	let positionSliderVert;
		
	slideVertActive.classList.remove('slider-vert-roll__slide-active_up');

	if (slideNext){

		slideNext.classList.add('slider-vert-roll__slide-active_up');
		
		positionSliderVert = indexElem(slideNext) * 100;
	} else {
		
		slideLast.classList.add('slider-vert-roll__slide-active_up');

		positionSliderVert = indexElem(slideLast) * 100;
	}

	sliderContainerUp.style.top = positionSliderVert + '%';
}

export {sliderSmallDown, sliderSmallUp};