// export const verticalParalax = (container) => {

// 	container.addEventListener('wheel', () => {
// 		// var parallaxContainer = document.querySelector('.parallax');
// 		var layer = document.querySelector('.vertical-paralax');
// 		//var coordX = window.innerWidth / 2 - event.pageX;
// 		var coordY = window.pageYOffset;

// 		layer.style.transform = `translateY(-${coordY / 3 }px)`;
// 	});
// };

export const verticalParalax = () => {

	var layer = document.querySelector('.vertical-paralax');
	let last_known_scroll_position = 0;
	let ticking = false;

	function doSomething(scroll_pos) {
		// Делаем что-нибудь с позицией скролла
		layer.style.transform = `translateY(-${scroll_pos / 3 }px)`;
	}

	window.addEventListener('scroll', function() {
		last_known_scroll_position = window.scrollY;

		if (!ticking) {
			window.requestAnimationFrame(function() {
				doSomething(last_known_scroll_position);
				ticking = false;
			});

			ticking = true;
		}
	});
};