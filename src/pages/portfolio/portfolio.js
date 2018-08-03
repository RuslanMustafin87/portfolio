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

// function blur(){
// 	const section = document.querySelector('.portfolio-contact');
// 	const elem = document.querySelector('.portfolio-contact__form');
// 	var blurElem = document.querySelector('.portfolio-contact__form-blur');
// 	const elemHeight = section.clientHeight;
// 	const elemWidth = section.clientWidth;
// 	const posLeft = -elem.offsetLeft;
// 	const posTop = -elem.offsetTop;

// 	blurElem.style.backgroundSize = `${elemWidth}px ${elemHeight}px`;
// 	blurElem.style.backgroundPosition = `${posLeft}px ${posTop}px`;
// }

function blur(){
	// const heightToWidth = 0.75;
	const widthToHeight = 1.332; // соотношение ширины к высоте
	const section = document.querySelector('.portfolio-contact'); // секция родитель
	const blurElem = document.querySelector('.portfolio-contact__form-blur'); // форма
	const form = document.querySelector('.portfolio-contact__form'); // элемент с блюром

	const sectionHeight = section.clientHeight; // высота секции родителя
	// const sectionWidth = section.clientWidth;
	const formWidth = form.clientWidth; // ширина формы

	const sectionBackgroundWidth = sectionHeight * widthToHeight; // иширина фона родителя 

	const posTop = -form.offsetTop; // позиционирование по высоте
	const posLeft = -(sectionBackgroundWidth / 2 - formWidth / 2); // позиционирование по высоте

	
	blurElem.style.backgroundSize = `auto ${sectionHeight}px`; // размеры фона элемета блюра
	blurElem.style.backgroundPosition = `${posLeft}px ${posTop}px`; // позиционирование
}

blur();

window.addEventListener('resize', blur);