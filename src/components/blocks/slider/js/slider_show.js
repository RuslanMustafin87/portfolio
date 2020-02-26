
export default (function() {
	
	return {
		slideShowDown(sliderContainer, slideActiveClass) {
			const slideActive = sliderContainer.querySelector('.' + slideActiveClass);
			const slideNext = slideActive.nextElementSibling;
			const slideFirst = sliderContainer.firstElementChild;
			
			slideActive.classList.remove(slideActiveClass);
			
			if (slideNext) {
				slideNext.classList.add(slideActiveClass);
			} else {
				slideFirst.classList.add(slideActiveClass);
			}
		},
		
		slideShowUp(sliderContainer, slideActiveClass) {
			const slideActive = sliderContainer.querySelector('.' + slideActiveClass);
			const slidePrev = slideActive.previousElementSibling;
			const slideLast = sliderContainer.lastElementChild;
			
			slideActive.classList.remove(slideActiveClass);
			
			if (slidePrev) {
				slidePrev.classList.add(slideActiveClass);
			} else {
				slideLast.classList.add(slideActiveClass);
			}
		}
	};
})();