import 'normalize.css';
import '../main.scss';
import './about.scss';

import {hamburger} from '../../components/blocks/hamburger_icon/hamburger_icon.js';
import hamburgerAnimation from '../../components/blocks/hamburger_menu/hamburger_menu.js';
import arrow from '../../components/blocks/arrowMove/arrow.js';


hamburger();
hamburgerAnimation();
arrow('.hero__arrow', '.about-me');

// function mySkill(skill, strokeDash, skillStrokeDash){
// 	const strokeDashArray = `${strokeDash} ${strokeDash - skillStrokeDash}`;
// 	skill.style.strokeDasharray = strokeDashArray;

// 	// switch () {
// 	// 	case 
// 	// }
// }

// const skillsHtml = document.querySelector('.skills_html');

// mySkill(skillsHtml, 314.15, 282.735 );