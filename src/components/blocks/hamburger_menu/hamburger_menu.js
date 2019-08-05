export default function(){
	const icon = document.querySelector('.hamburger-icon');
	const hamburgerContainer = document.querySelector('.hamburger-menu__list');
	const hamburgerBgRight = document.querySelector('.hamburger-menu__bg-right');
	const hamburgerBgLeft = document.querySelector('.hamburger-menu__bg-left');
	let togle = false;

	icon.addEventListener('click', function(){
		const hamburgerItems = Array.prototype.slice.call(hamburgerContainer.children);
        
		let countTransitionDelay = 0.3;

		togle ? togle = false : togle = true;

		if (togle){
			hamburgerItems.forEach(function(item) {
				countTransitionDelay += 0.1;
				item.style.transition = `opacity .3s linear ${countTransitionDelay}s`;
				item.style.opacity = '1';
				hamburgerBgRight.style.left = '0';
				hamburgerBgLeft.style.right = '0';
			});
		} else {
			hamburgerItems.forEach(function(item) {
				// countTransitionDelay += 0.2;
				item.style.transition = 'none';
				item.style.opacity = '0';
				hamburgerBgRight.style.left = '-50%';
				hamburgerBgLeft.style.right = '-50%';
			});
		}
	});
}