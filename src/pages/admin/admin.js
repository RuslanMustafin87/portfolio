import 'normalize.css';
import '../main.scss';
import './admin.scss';


import preloader from '../../components/blocks/preloader/preloader';
import './admin-about/adminAbout.js';
import './admin-blog/adminBlog.js';
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

//отправляем картинку на сервер

let formAvatar = document.forms.formAvatar;
formAvatar.onsubmit = (event) => {
	event.preventDefault();

	fetch('http://127.0.0.1:3001/admin/adminAvatar', {
		method: 'POST',
		body: new FormData(formAvatar)
	}).then(
		res => {
			if (200 <= res.status && res.status <= 299) {
				showModalAdmin.start('Аватар добавлен');
			} else {
				showModalAdmin.start('Ошибка ' + res.status);
			}
		},
		err => {
			showModalAdmin.start('Ошибка нет интернета');
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

	let sumHeight = headerAdminHeight + panelAdminTabsHeight + panelAdminItemHeight;

	if (document.documentElement.clientHeight > sumHeight) {
		item.style.height = `${document.documentElement.clientHeight - headerAdminHeight - panelAdminTabsHeight}px`;
	} else {
		item.style.height = `auto`;
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

//window.addEventListener('unhandledrejection', function(event) {
//	// объект события имеет два специальных свойства:
//	alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
//	alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
//});