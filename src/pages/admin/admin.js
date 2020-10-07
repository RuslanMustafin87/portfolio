import 'normalize.css';
import '../main.scss';
import './admin.scss';


import preloader from '../../components/blocks/preloader/preloader';
import Modal from '../../components/blocks/modal/modal.js';

const showModalAdmin = new Modal();
preloader();

//переключение табов

let tabsTitles = document.querySelectorAll('.tabs__title');
let panelAdminItems = document.querySelectorAll('.panel-admin__item');

tabsTitles.forEach(function(item, index) {

	item.addEventListener('click', function() {

		tabsTitles.forEach(function(item, index) {
			item.classList.remove('active__tab');
			panelAdminItems[index].classList.remove('active__panel-item');
		});
		item.classList.add('active__tab');
		panelAdminItems[index].classList.add('active__panel-item');

		setItemPanelHeight(panelAdminItems[index]);

	});

});

//отправка данных на сервер для страницы about

let buttonAdminAbout = document.querySelector('.button__about');

let skillsList = ['html', 'css', 'js', 'python', 'mysql', 'node', 'mongo', 'git', 'webpack', 'linux'];


function getSkills(skillsList) { // функция создания объекта с скилами и их значениями

	let skills = {};

	skillsList.forEach(function(item) {
		skills[item] = document.getElementById(`admin-input-${item}`).value;
	});

	return skills;
}


buttonAdminAbout.addEventListener('click', function() {

	const body = JSON.stringify(getSkills(skillsList));

	fetch('http://127.0.0.1:3001/adminAbout', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: body
	}).then(
		res => {
			if (200 <= res.status && res.status <= 299) {
				return res.json();
			} else {
				showModalAdmin.start('Ошибка ' + res.status);
			}
		}
	).then(
		body => {
			showModalAdmin.start(body.status);
		}
	).catch(
		// eslint-disable-next-line no-unused-vars
		err => {
			showModalAdmin.start('Ошибка! Сообщение не отправлено.');
		}
	);
});

//отправляем картинку на сервер

let adminAvatar = document.forms.admin_avatar;
adminAvatar.onsubmit = (event) => {
	event.preventDefault();

	fetch('http://127.0.0.1:3001/admin/adminAvatar', {
		method: 'POST',
		body: new FormData(adminAvatar)
	}).then(
		res => {
			if (200 <= res.status && res.status <= 299) {
				showModalAdmin.start('Аватар добавлен');
			} else {
				showModalAdmin.start('Ошибка ' + res.status);
			}
		}
	).catch(
		// eslint-disable-next-line no-unused-vars
		err => {
			showModalAdmin.start('Ошибка! Аватар не отправлен');
		}
	);
};

let blogForm = document.forms.blogForm;
blogForm.onsubmit = (event) => {
	event.preventDefault();

	fetch('http://127.0.0.1:3001/admin/adminBlog', {
		method: 'POST',
		body: new FormData(blogForm)
	}).then(
		res => {
			if (200 <= res.status && res.status <= 299) {
				showModalAdmin.start('Статья добавлена');
			} else {
				showModalAdmin.start('Ошибка ' + res.status);
			}
		}
	).catch(
		// eslint-disable-next-line no-unused-vars
		err => {
			showModalAdmin.start('Ошибка! Аватар не отправлен');
		}
	);
};

// адаптивность, растягиваем блоки с контентом до конца страницы

function setItemPanelHeight(item) {

	let headerAdmin = document.querySelector('.header-admin');
	let panelAdminTabs = document.querySelector('.panel-admin__tabs');

	let headerAdminHeight = parseInt(window.getComputedStyle(headerAdmin).height);
	let panelAdminTabsHeight = parseInt(window.getComputedStyle(panelAdminTabs).height);
	let panelAdminItemHeight = parseInt(window.getComputedStyle(item).height);

	console.log(headerAdminHeight, panelAdminTabsHeight, panelAdminItemHeight);

	let sumHeight = headerAdminHeight + panelAdminTabsHeight + panelAdminItemHeight;

	console.log('сумма блоков ' + sumHeight);
	console.log('высота окна ' + document.documentElement.clientHeight);

	if (document.documentElement.clientHeight > sumHeight) {
		item.style.height = `${document.documentElement.clientHeight - headerAdminHeight - panelAdminTabsHeight}px`;
		console.log(item.style.height);
	} 
	else {
		item.style.height = `auto`;
		console.log(item.style.height);
	}
}

window.addEventListener('resize', function() {

	let activeItem = document.querySelector('.active__panel-item');
	setItemPanelHeight(activeItem);
});

window.addEventListener('DOMContentLoaded', function() {

	let activeItem = document.querySelector('.active__panel-item');
	setItemPanelHeight(activeItem);
});

window.addEventListener('unhandledrejection', function(event) {
	// объект события имеет два специальных свойства:
	alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
	alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});