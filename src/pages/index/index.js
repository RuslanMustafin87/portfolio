import 'normalize.css';
import '../main.scss';
import './index.scss';

import preloader from '../../components/blocks/preloader/preloader';
import {parallax} from '../../components/blocks/parallax/parallax.js';

preloader();
parallax();

const welAutorize = document.querySelector('.autorize');
const welLogin = document.querySelector('.welcome__center_login');
const welAuthor = document.querySelector('.welcome__center_author');
const toMain = document.querySelector('#toMain');

// flip_index gorizont

window.onload = () => {
	welAuthor.style.transition = '.8s linear 1s';
	welAuthor.style.opacity = '1';
	welAuthor.style.transform = 'perspective(600px) rotateX(0deg)';
	setTimeout( () => {
		welAuthor.style.transformOrigin = '50% 50%';
	}, 1800);

	// videoResize();
	videoDisable();
};

function videoDisable() {
	if (window.innerWidth >= 768) {
		// eslint-disable-next-line quotes
		document.getElementById('video__container').innerHTML = "<video class='video' autoplay loop muted> <source src='/assets/images/night.webm' type=`video/webm; codecs='vp8, vorbis'`> <source src= '/assets/images/night.mp4' type=`video/mp4; codecs='avc1.42E01E, mp4a.40.2'`>";
	}
}
// window.addEventListener('resize', videoResize);

// function videoResize(){
// 	let video = document.querySelector('.welcome__video');

// 	if (window.innerWidth >= window.innerHeight) {
// 		video.style.height = 'auto';
// 		video.style.width = '100%';
// 	} else {
// 		video.style.width = 'auto';
// 		video.style.height = '100%';
// 	}
// } 

// flip_index vertical

welAutorize.addEventListener('click', function(){
	welAuthor.style.transition = 'transform .3s linear';
	welLogin.style.transition = 'transform .3s linear';
	welAuthor.style.transitionDelay = '0s';
	welAuthor.style.transform = 'perspective(600px) rotateY(90deg)';
	welLogin.style.transitionDelay = '0.3s';
	welLogin.style.transform = 'perspective(600px) rotateY(0deg)';
	welAutorize.style.opacity = '0';
});

toMain.addEventListener('click', function(){
	welLogin.style.transitionDelay = '0s';
	welLogin.style.transform = 'perspective(600px) rotateY(-90deg)';
	welAuthor.style.transitionDelay = '0.3s';
	welAuthor.style.transform = 'perspective(600px) rotateY(0deg)';
	welAutorize.style.opacity = '1';
});