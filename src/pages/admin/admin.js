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

//модальное окно

let buttonAdmin = document.querySelector('.button__about');

buttonAdmin.addEventListener('click', function(){

	showModalAdmin.start('Сообщение отправлено');
});