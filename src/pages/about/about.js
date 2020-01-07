import 'normalize.css';
import '../main.scss';
import './about.scss';

import preloader from '../../components/blocks/preloader/preloader';
import {
	hamburger
} from '../../components/blocks/hamburger_icon/hamburger_icon.js';
import hamburgerAnimation from '../../components/blocks/hamburger_menu/hamburger_menu.js';
import arrow from '../../components/blocks/arrowMove/arrowMove.js';
import skills from '../../components/blocks/skills/skills.js';
import {verticalParalax} from  '../../components/blocks/vertical-paralax/vertical-paralax';

let skillsAbout = document.querySelectorAll('.skill');

skills(skillsAbout);
preloader();
hamburger();
hamburgerAnimation();
arrow('.hero__arrow', '.about-me');
verticalParalax(document.querySelector('.main-about'));


// eslint-disable-next-line no-unused-vars
var map;

// eslint-disable-next-line no-unused-vars
function initMap() {
	// eslint-disable-next-line no-undef
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: -34.397,
			lng: 150.644
		},
		zoom: 8
	});
}