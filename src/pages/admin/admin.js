import 'normalize.css';
import '../main.scss';
import './admin.scss';


import preloader from '../../components/blocks/preloader/preloader';
import Modal from '../../components/blocks/modal/modal.js';
preloader();


const modalAdmin = document.getElementById('modal__admin');
const showModalAdmin = new Modal(modalAdmin);


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

	});

});

//отправка данных на сервер для страницы about

let buttonAdminAbout = document.querySelector('.button__about');

let dataInputHTML = document.getElementById('admin-input-html');
let dataInputCSS = document.getElementById('admin-input-css');
let dataInputJS = document.getElementById('admin-input-js');

//document.addEventListener('DOMContentLoaded', function() {
//
//	fetch('http://127.0.0.1:3001/admin', {
//		method: 'GET',
//		mode: 'cors'
//	}).then(
//		res => {
//
//			return res.text();
//
//		}
//	).then(
//		text => {
//			let data  = JSON.parse(text);
//			dataInputHTML.value = data.html;
//			dataInputCSS.value = data.css;
//			dataInputJS.value = data.js;
//		}
//	);
//});

buttonAdminAbout.addEventListener('click', function() {

	const body = JSON.stringify({
		html: dataInputHTML.value,
		css: dataInputCSS.value,
		js: dataInputJS.value,
	});


	fetch('http://127.0.0.1:3001/adminAbout', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: body
	}).then(
		res => {
			if (res.ok) {
				showModalAdmin.start('Сообщение отправлено');
			} else {
				showModalAdmin.start('Ошибка ' + res.status);
			}
		},
		err => {
			showModalAdmin.start('Ошибка! Сообщение не отправлено. ');
		}
	);

});