export const hamburger = () => {

	var hamburger = document.querySelector('.hamburger-icon');
	var hamburgerMenu = document.querySelector('.hamburger-menu');
	var hamburgerLayer1 = document.querySelector('.hamburger__layer-1');
	var hamburgerLayer2 = document.querySelector('.hamburger__layer-2');
	var hamburgerLayer3 = document.querySelector('.hamburger__layer-3');
    
	hamburger.addEventListener('click', () => {
		hamburgerMenu.classList.toggle('hamburger-menu_active');
		hamburgerLayer1.classList.toggle('hamburger__cross-layer-1');
		hamburgerLayer2.classList.toggle('hamburger__cross-layer-2');
		hamburgerLayer3.classList.toggle('hamburger__cross-layer-3');
	});
};