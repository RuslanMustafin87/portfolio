import 'normalize.css';
import '../main.scss';
import './about.scss';

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