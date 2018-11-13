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

function sliderSmallDown(container, activeClass){
		
	const slideActive = document.getElementsByClassName(activeClass)[0];
	const slideNext = slideActive.nextElementSibling;
	const slideFirst = container.firstElementChild;
	let positionSlider;
		
	slideActive.classList.remove('slider-vert-roll__slide-active_down');

	if (slideNext){

		slideNext.classList.add('slider-vert-roll__slide-active_down');
		
		positionSlider = indexElem(slideNext) * -100;
	} else {
		
		slideFirst.classList.add('slider-vert-roll__slide-active_down');

		positionSlider = indexElem(slideFirst) * -100;
	}

	container.style.top = positionSlider + '%';
}

// движение вверх контейнера сладера

function sliderSmallUp(container, activeClass){
		
	const slideActive = document.getElementsByClassName(activeClass)[0];
	const slideNext = slideActive.nextElementSibling;
	const slideFirst = container.firstElementChild;
	let positionSlider;
		
	slideActive.classList.remove('slider-vert-roll__slide-active_up');

	if (slideNext){
		slideNext.classList.add('slider-vert-roll__slide-active_up');
		
		positionSlider = indexElem(slideNext) * -100;
	} else {
		
		slideFirst.classList.add('slider-vert-roll__slide-active_up');

		positionSlider = indexElem(slideFirst) * -100;
	}

	container.style.top = positionSlider + '%';
}

export {sliderSmallDown, sliderSmallUp};