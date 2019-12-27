import 'normalize.css';
import '../main.scss';
import './about.scss';

import preloader from '../../components/blocks/preloader/preloader';
import {hamburger} from '../../components/blocks/hamburger_icon/hamburger_icon.js';
import hamburgerAnimation from '../../components/blocks/hamburger_menu/hamburger_menu.js';
import arrow from '../../components/blocks/arrowMove/arrowMove.js';
import skills from '../../components/blocks/skills/skills'

let skills = document.querySelectorAll('.skill');

skills(skills);
preloader();
hamburger();
hamburgerAnimation();
arrow('.hero__arrow', '.about-me');

let x = document.querySelector('.skills__skills-item');

x.addEventListener('click', function() {
    let percent = circle.dataset.skill;
    let percentSkill = percent/100*314;

    circle.style.strokeDasharray = `${percentSkill} ${314 - percentSkill}`;
	//circle.setAttribute('stroke-dasharray', '280 34');
	//circle.style.animation = `dash 2s linear`;
});