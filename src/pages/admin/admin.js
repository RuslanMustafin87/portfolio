import 'normalize.css';
import '../main.scss';
import './admin.scss';


import preloader from '../../components/blocks/preloader/preloader';
import Modal from '../../components/blocks/modal/modal.js';
preloader();

const showModalAdmin = new Modal();

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
		},
		// eslint-disable-next-line no-unused-vars
		err => {
			showModalAdmin.start('Ошибка! Сообщение не отправлено.');
		}
	).then(
		body => {
			showModalAdmin.start(body.status);
		}
	);
});

//отправляем картинку на сервер

let adminAvatar = document.forms.admin_avatar;
adminAvatar.onsubmit =  (event) => {
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
		},
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

	let sumHeight = headerAdminHeight + panelAdminTabsHeight + panelAdminItemHeight;

	if (window.innerHeight > sumHeight) {
		item.style.height = `${window.innerHeight - headerAdminHeight - panelAdminTabsHeight}px`;
	}
}

window.addEventListener('resize', function() {

	let activeItem = document.querySelector('.active__panel-item');

	setItemPanelHeight(activeItem);

});