import 'normalize.css';
import '../main.scss';
import './blog.scss';

import preloader from '../../components/blocks/preloader/preloader';
import {
	verticalParalax
} from '../../components/blocks/vertical-paralax/vertical-paralax';
import hamburger from '../../components/blocks/hamburger_icon/hamburger_icon.js';
import hamburgerAnimation from '../../components/blocks/hamburger_menu/hamburger_menu.js';
import { data } from 'jquery';

verticalParalax(document.querySelector('.main__blog'));
hamburgerAnimation();
preloader();

// функция создания меню-аккордеон

function createMenuAcco(data) {
	let menuAcco = document.querySelector('.menu-acco');

	for (let i = 0; i < data.length; i++) {
		let menuAccoItem = document.createElement('li');
		let menuAccoItemDesc = document.createElement('div');

		menuAccoItem.classList.add('menu-acco__item');
		menuAccoItemDesc.classList.add('menu-acco__description');
		menuAccoItemDesc.innerText = data[i].title;

		menuAccoItem.appendChild(menuAccoItemDesc);
		menuAcco.appendChild(menuAccoItem);

		menuAccoItem.addEventListener('click', () => {
			toggleClass(menuAccoItem);
			scrollArticles(i);
		});
	}

	menuAcco.firstElementChild.classList.add('acco__item-active');

}

// функция создания блока статей

function createArticles(data) {
	let articles = document.querySelector('.articles-list');

	for (let i = 0; i < data.length; i++) {
		let articlesItem = document.createElement('li');
		let articlesTitle = document.createElement('h1');
		let articlesTime = document.createElement('time');
		let articlesText = document.createElement('div');
		let articlesParagraph = document.createElement('p');
		let articlesLine = document.createElement('div');

		articlesItem.classList.add('articles-list__item');
		articlesTitle.classList.add('articles-list__title', 'title', 'title_color-gray', 'title_text-align-left', 'title_font-size-35');
		articlesTime.classList.add('articles-list__time');
		articlesText.classList.add('articles-list__text');
		articlesLine.classList.add('articles-list__line');

		articlesTitle.innerText = data[i].title;
		articlesTime.innerText = (new Date(data[i].date).toLocaleDateString('ru', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})).slice(0, -3);
		articlesParagraph.innerText = data[i].body;

		articlesText.appendChild(articlesParagraph);
		articlesItem.appendChild(articlesTitle);
		articlesItem.appendChild(articlesTime);
		articlesItem.appendChild(articlesText);
		articlesItem.appendChild(articlesLine);

		articles.appendChild(articlesItem);
	}

	articles.lastChild.lastChild.remove();
}

// функция назначения события "клик" на элементы меню-аккордеон для прокрутки блока статей 

function scrollArticles(index) {

	const articlesList = document.querySelector('.articles-list');
	const articlesItems = Array.from(articlesList.children);

	let articlesTop = articlesItems[index].offsetTop;

	articlesList.style.top = `-${articlesTop}px`;
}

// функция преключения классов на элементах меню

function toggleClass(activeItem) {
	let itemList = Array.from(activeItem.parentNode.children);

	itemList.forEach(item => {
		item.classList.remove('acco__item-active');
	});
	activeItem.classList.add('acco__item-active');
}

// преключение классов в меню акордеон при прокрутке блока статей

function switchItem() {
	const articlesList = document.querySelector('.articles-list');
	const articlesListContainer = articlesList.parentElement;
	const items = Array.from(articlesList.children);
	const itemsMenu = Array.from(document.querySelectorAll('.menu-acco__item'));

	const maxScroll = articlesListContainer.clientHeight - articlesList.clientHeight;

	items.forEach((elem, index) => {
		elem.addEventListener('wheel', () => {
			document.querySelector('.acco__item-active').classList.remove('acco__item-active');

			let articlesTop = articlesList.offsetTop;

			if (articlesTop >= 0) {
				itemsMenu[0].classList.add('acco__item-active');
				return;
			}
			if (articlesTop <= maxScroll) {
				itemsMenu[itemsMenu.length - 1].classList.add('acco__item-active');
				return;
			}

			itemsMenu[index].classList.add('acco__item-active');
		});
	});
}

// получение данных с сервера

(async function foo() {
	let data = null;
	try {
		let result = await fetch('http://127.0.0.1:3001/api/getArticles', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
		});

		data = await result.json();
	} catch (err) {
		console.log(err);
	}

	createArticles(data);
	createMenuAcco(data);
	scrollArticlesWheel(120);
	switchItem();
})();

// появление левого меню 

const toggleLeftMenu = document.querySelector('.blog-content__left-toggle');
const leftMenu = document.querySelector('.blog-content__left');

toggleLeftMenu.addEventListener('click', () => {
	leftMenu.classList.toggle('blog-content__left_active');
});

// прокрутка блока статей

function scrollArticlesWheel(step) {
	const articlesList = document.querySelector('.articles-list');
	const articlesListContainer = articlesList.parentElement;

	const maxScroll = articlesListContainer.clientHeight - articlesList.clientHeight;

	articlesList.addEventListener('wheel', (e) => {
		e.preventDefault();

		let articlesTop = articlesList.offsetTop;

		const dir = -Math.sign(e.deltaY);
		console.log(e.deltaY);
		articlesTop = articlesTop + step * dir;

		if (articlesTop > 0) {
			articlesList.style.top = '0px';
			return;
		}
		if (articlesTop < maxScroll) {
			articlesList.style.top = `${maxScroll}px`;
			return;
		}

		articlesList.style.top = `${articlesTop}px`;
	});
}

