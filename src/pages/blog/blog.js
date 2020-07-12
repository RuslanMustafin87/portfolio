import 'normalize.css';
import '../main.scss';
import './blog.scss';


import preloader from '../../components/blocks/preloader/preloader';
import {
	verticalParalax
} from '../../components/blocks/vertical-paralax/vertical-paralax';
import hamburger from '../../components/blocks/hamburger_icon/hamburger_icon.js';
import hamburgerAnimation from '../../components/blocks/hamburger_menu/hamburger_menu.js';

verticalParalax(document.querySelector('.main__blog'));
hamburgerAnimation();
preloader();


var container = document.querySelector('.blog-content__articles');
var blogContentPosition;

//формирование меню-аакордеон с заголовками статей

let menuAcco = document.querySelector('.menu-acco');

const listTitle = ['Самое важное в SASS', 'Приемы верстки, без которых не обходится не один сайт',
	'Самые необходимый набор Webpack плагинов', 'Почему я выбрал Pug'
];

fetch('http://127.0.0.1:3001/blog', {
	method: 'GET',
	mode: 'cors',
	//headers: {
	//	'Content-Type': 'application/json; charset=utf-8',
	//},
	//body: body
}).then(
	res => {
		for (let i = 0; i < 4; i++) {
			let menuAccoItem = document.createElement('li');
			let menuAccoItemDesc = document.createElement('div');

			menuAccoItem.classList.add('menu-acco__item');
			menuAccoItemDesc.classList.add('menu-acco__description');
			menuAccoItemDesc.innerText = listTitle[i];

			menuAccoItem.appendChild(menuAccoItemDesc);
			menuAcco.appendChild(menuAccoItem);
		}
	}
);

menuAcco.firstElementChild.classList.add('acco__item-active');

// прокрутка статей в blog-content

var accoMenuItems = document.querySelectorAll('.menu-acco__item');
$(accoMenuItems).on('click', function() {
	var indexAccoMenuItems = $(this).index();
	blogContentPosition = $('.blog__content-item').eq(indexAccoMenuItems).position();
	scrollContent(blogContentPosition.top);
	toggleClass($(this));
});

function scrollContent(pos) {
	$(container).css('top', '-' + pos + 'px');
}

function toggleClass(activeItem) {
	$(accoMenuItems).removeClass('acco__item-active');
	$(activeItem).addClass('acco__item-active');
}


// появление левого меню 

const toggleLeftMenu = document.querySelector('.blog-content__left-toggle');
const leftMenu = document.querySelector('.blog-content__left');

toggleLeftMenu.addEventListener('click', () => {
	leftMenu.classList.toggle('blog-content__left_active');
});