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
		
	slideActive.classList.remove(activeClass);

	if (slideNext){

		slideNext.classList.add(activeClass);
		
		positionSlider = indexElem(slideNext) * -100;
	} else {
		
		slideFirst.classList.add(activeClass);

		positionSlider = indexElem(slideFirst) * -100;
	}

	container.style.top = positionSlider + '%';
}

// движение вверх контейнера сладера

function sliderSmallUp(container, activeClass){
		
	const slideActive = document.getElementsByClassName(activeClass)[0];
	const slidePrev = slideActive.previousElementSibling;
	const slideLast = container.lastElementChild;
	let positionSlider;
		
	slideActive.classList.remove(activeClass);

	if (slidePrev){
		slidePrev.classList.add(activeClass);
		
		positionSlider = indexElem(slidePrev) * -100;
	} else {
		
		slideLast.classList.add(activeClass);

		positionSlider = indexElem(slideLast) * -100;
	}

	container.style.top = positionSlider + '%';
}

export {sliderSmallDown, sliderSmallUp};