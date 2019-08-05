export const parallax = () => {
	const welcome = document.querySelector('.welcome');
	welcome.addEventListener('mousemove', event => {
		// var parallaxContainer = document.querySelector('.parallax');
		var layer = document.querySelector('.parallax__layer');
		var coordX = window.innerWidth / 2 - event.pageX;
		var coordY = window.innerHeight / 2 - event.pageY;
		
		layer.style.transform = `translate(${coordX / 40}px, ${coordY / 40}px)`;
	});
};