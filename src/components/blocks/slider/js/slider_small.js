export default (function() {

	// функция для получения порядкового номера элемента в родителе

	function __indexElem(elem) {

		var i = 0;

		while (elem.previousElementSibling) {
			i++;
			elem = elem.previousElementSibling;
		}

		return i;
	}

	
	return {

		// движение вниз контейнера сладера

		slideDown(container, activeClass) {

			const slides = Array.from(container.children);
			const slideActive = document.getElementsByClassName(activeClass)[0];
			const slideNext = slideActive.nextElementSibling;
			const slideFirst = slides[1];
			let positionSlider;

			container.style.transition = 'top .5s linear';

			slideActive.classList.remove(activeClass);

			slideNext.classList.add(activeClass);
			positionSlider = __indexElem(slideNext) * -100;

			container.style.top = positionSlider + '%';

			if (slideNext.id === 'slide__extrem') {

				setTimeout(function() {
					slideNext.classList.remove(activeClass);
					slideFirst.classList.add(activeClass);
					container.style.transition = 'none';
					container.style.top = `-${__indexElem(slideFirst)}00%`;
				}, 500);
			}
		},

		// движение вверх контейнера сладера

		slideUp(container, activeClass) {

			const slides = Array.from(container.children);
			const slideActive = document.getElementsByClassName(activeClass)[0];
			const slidePrevious = slideActive.previousElementSibling;
			const slideLast = slides[slides.length - 2];
			let positionSlider;

			container.style.transition = 'top .5s linear';

			slideActive.classList.remove(activeClass);

			slidePrevious.classList.add(activeClass);
			positionSlider = __indexElem(slidePrevious) * -100;

			container.style.top = positionSlider + '%';

			if (slidePrevious.id === 'slide__extrem') {

				setTimeout(function() {
					slidePrevious.classList.remove(activeClass);
					slideLast.classList.add(activeClass);
					container.style.transition = 'none';
					container.style.top = `-${__indexElem(slideLast)}00%`;
				}, 500);
			}
		}
	};
})();