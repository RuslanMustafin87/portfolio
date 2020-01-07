export const verticalParalax = (container) => {
	
	container.addEventListener('wheel', event => {
		// var parallaxContainer = document.querySelector('.parallax');
		var layer = document.querySelector('.vertical-paralax');
		//var coordX = window.innerWidth / 2 - event.pageX;
		var coordY = window.pageYOffset;
		console.log(coordY);

		layer.style.transform = `translateY(-${coordY / 4 }px)`;
	});
};