export default function(){

	//верхний большой сладер
    
	const slideDown = document.querySelector('.slider__slide-down');
	const slideUp = document.querySelector('.slider__slide-up');
	const sliderContainer = document.querySelector('.slider__container');
	const slideFirst = sliderContainer.firstElementChild;
	const slideLast = sliderContainer.lastElementChild;
	

	slideDown.addEventListener('click', function(){
        
		const slideActive = document.querySelector('.slide__active');
		const slideNext = slideActive.nextElementSibling;

		if (slideNext) {
			slideActive.classList.remove('slide__active');
			slideNext.classList.add('slide__active');
		} else {
			slideActive.classList.remove('slide__active');
			slideFirst.classList.add('slide__active');
		}
		
		sliderVertMove();
        
	});

	slideUp.addEventListener('click', function(){
        
		const slideActive = document.querySelector('.slide__active');
		const slidePrev = slideActive.previousElementSibling;

		if (slidePrev) {
			slideActive.classList.remove('slide__active');
			slidePrev.classList.add('slide__active');
		} else {
			slideActive.classList.remove('slide__active');
			slideLast.classList.add('slide__active');
		}
	});

	//маленкий левый слайдер
        
	const sliderVertContainer = document.querySelector('.slider__container-down');
        
	function sliderVertMove(){
		
		const slideVertActive = document.querySelector('.slider-vert-roll__slide-active');
		const slideNext = slideVertActive.nextElementSibling;
		const slideFirst = sliderVertContainer.firstElementChild;
		
		if (slideNext){
			slideVertActive.classList.remove('slider-vert-roll__slide-active');
			slideNext.classList.add('slider-vert-roll__slide-active');
		
			const positionSliderVert = indexElem(slideNext) * -100;

			sliderVertContainer.style.top = positionSliderVert + '%';
		} else {
			slideVertActive.classList.remove('slider-vert-roll__slide-active');
			slideFirst.classList.add('slider-vert-roll__slide-active');

			const positionSliderVert = indexElem(slideFirst) * -100;

			sliderVertContainer.style.top = positionSliderVert + '%';
		}


		
	}
		
	function indexElem(elem){

		var i = 0;

		while(elem.previousElementSibling){
			i++;
			elem = elem.previousElementSibling;
		}

		return i;
	}

}