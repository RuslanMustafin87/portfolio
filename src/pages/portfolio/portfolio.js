import 'normalize.css';
import '../main.scss';
import './portfolio.scss';

import {hamburger} from '../../components/blocks/hamburger_icon/hamburger_icon.js';

hamburger();

// прокрутка при нажатии стрелки вниз .arrow__down

// const arrowDown = document.querySelector('.arrow__down');

// arrowDown.addEventListener('click', () => {

// 	var timerId = setInterval( () => {
        
// 		if (window.pageYOffset >= window.innerHeight) {
// 			clearInterval(timerId);
// 		} else {
// 			window.scrollBy(0, 7);
// 		}

// 	}, 1);

// });

// позиционирование фона для элемента с блюром

function blur(){
	const section = document.querySelector('.portfolio-contact');
	const elem = document.querySelector('.portfolio-contact__form');
	var blurElem = document.querySelector('.portfolio-contact__form-blur');
	const elemSize = section.clientWidth;
	const posLeft = -elem.offsetLeft;
	const posTop = -elem.offsetTop;

	blurElem.style.backgroundSize = elemSize + 'px' + ' ' + 'auto';
	blurElem.style.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
}

blur();

window.resize = blur;