import 'normalize.css';
import '../main.scss';
import './portfolio.scss';

import {hamburger} from '../../components/blocks/hamburger_icon/hamburger_icon.js';

hamburger();

// прокрутка при нажатии стрелки вниз .arrow__down

const arrowDown = document.querySelector('.arrow__down');

arrowDown.addEventListener('click', () => {

	var timerId = setInterval( () => {
        
		if (window.pageYOffset >= window.innerHeight) {
			clearInterval(timerId);
		} else {
			window.scrollBy(0, 7);
		}

	}, 1);

});

// позиционирование фона для элемента блюра

function blur(){
	const elem = document.querySelector('.portfolio-contact');
	const blurElem = document.querySelector('.');
	const elemSize = elem.clientHeight;
	posLeft = 
}