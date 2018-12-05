export default function(){
	const icon = document.querySelector('.hamburger-icon');
	const hamburgerContainer = document.querySelector('.hamburger-menu__list');

	icon.addEventListener('click', function(){
		const hamburgerItems = Array.prototype.slice.call(hamburgerContainer.children);
        
		let countTransitionDelay = 0;

		hamburgerItems.forEach(function(item) {
			countTransitionDelay += 0.2;
			// item.style.cssText = `opacity: 1; \
			//                     transition: opacity .1s linear ${countTransitionDelay}s;`;
			item.style.transition = `opacity .5s linear ${countTransitionDelay}s`;
			item.style.opacity = '1';
			console.log(countTransitionDelay);
		});
	});
}