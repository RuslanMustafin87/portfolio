import 'normalize.css';
import '../main.scss';
import './portfolio.scss';

import {hamburger} from '../../components/blocks/hamburger_icon/hamburger_icon.js';
import slider from '../../components/blocks/slider/slider.js';

hamburger();
slider();

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
	const heightToWidth = 0.7506;
	const widthToHeight = 1.3323; // соотношение ширины к высоте у картинки для фона

	const section = document.querySelector('.portfolio-contact'); // секция родитель
	const blurElem = document.querySelector('.portfolio-contact__form-blur'); // форма
	const form = document.querySelector('.portfolio-contact__form'); // элемент с блюром

	const sectionHeight = section.clientHeight; // высота секции родителя
	const sectionWidth = section.clientWidth;
	const formWidth = form.clientWidth; // ширина формы
	// const formHeight= form.clientHeight; // выстота формы 
	
	function heightPositioning(){ // функция позиционирования фона по высоте
		const sectionBackgroundWidth = sectionHeight * widthToHeight; // ширина фона родителя 

		const posTop = -form.offsetTop; // позиционирование по высоте
		const posLeft = -(sectionBackgroundWidth / 2 - formWidth / 2); // позиционирование по высоте

		
		blurElem.style.backgroundSize = `auto ${sectionHeight}px`; // размеры фона элемета блюра
		blurElem.style.backgroundPosition = `${posLeft}px ${posTop}px`; // позиционирование фона
	}

	function widthPositioning(){ // функция позиционирования фона по ширине
		const sectionBackgroundHeight = sectionWidth * heightToWidth;

		const posTop = -((sectionBackgroundHeight - sectionHeight) / 2 + form.offsetTop);
		const posLeft = -form.offsetLeft;

		blurElem.style.backgroundSize = `${sectionWidth}px auto`; // размеры фона элемета блюра
		blurElem.style.backgroundPosition = `${posLeft}px ${posTop}px`; // позиционирование фона
	}

	widthToHeight > sectionWidth / sectionHeight ? heightPositioning(): widthPositioning();
}

window.addEventListener('load', blur);

window.addEventListener('resize', blur);