export default function(sliderContainer, direction, slideActiveClass){
	
	const slideFirst = sliderContainer.firstElementChild;
	const slideLast = sliderContainer.lastElementChild;
	const slideActive = sliderContainer.querySelector('.' + slideActiveClass);

	if (direction === 'down'){

		const slideNext = slideActive.nextElementSibling;
    
		slideActive.classList.remove(slideActiveClass);

		if (slideNext) {
			slideNext.classList.add(slideActiveClass);
		} else {
			slideFirst.classList.add(slideActiveClass);
		}

	}else{
		
		const slidePrev = slideActive.previousElementSibling;
    
		slideActive.classList.remove(slideActiveClass);
    
		if (slidePrev) {
			slidePrev.classList.add(slideActiveClass);
		} else {
			slideLast.classList.add(slideActiveClass);
		}	
	}

}
