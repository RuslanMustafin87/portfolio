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
        
		//маленкий левый слайдер
        
		const sliderVertContainer = document.querySelector('.slider__container-down');
		const slideVertActive = document.querySelector('.slider-vert-roll__slide-active');
        
		// function sliderVertMove(){
		// 	const slideVertActive = document.querySelector('.slider-vert-roll__slide-active');

        // }
        
        const positionSliderVert = slideVertActive
	});
}