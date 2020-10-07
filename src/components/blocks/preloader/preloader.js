export default function() {
	window.addEventListener('load', function() {
		var preloader = document.querySelector('.preloader');
		
		setTimeout(function() {
			preloader.style.visibility = 'hidden';
			preloader.style.opacity = '0';
			preloader.style.transition = 'all .5s';
		}, 1000);
	});

	var images = document.images,
		imagesTotalCount = images.length,
		imagesCount = 0,
		percents = document.querySelector('.preloader__persents');

	for (var i = 0; i < images.length; i++) {

		var imageClone = new Image;
		imageClone.onload = imageLoader;
		imageClone.onerror = imageLoader;
		imageClone.src = images[i].src;
	}

	function imageLoader() {

		imagesCount++;
		
		percents.innerHTML = ((100 / imagesTotalCount * imagesCount) << 0) + '%';
	}

}