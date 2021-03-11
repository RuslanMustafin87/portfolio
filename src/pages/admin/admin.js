import 'normalize.css';
import '../main.scss';
import './admin.scss';


import preloader from '../../components/blocks/preloader/preloader';
import './admin-about/adminAbout.js';
import './admin-blog/adminBlog.js';
import './admin-avatar/adminAvatar.js';

preloader();

//переключение табов

let tabsTitles = document.querySelectorAll('.tabs__title');
let panelAdminItems = document.querySelectorAll('.panel-admin__item');

tabsTitles.forEach(function(item, index) {

	item.addEventListener('click', function() {

		tabsTitles.forEach(function(item, index) {
			item.classList.remove('active__tab');
			panelAdminItems[index].classList.remove('panel-admin__item_active');
		});
		item.classList.add('active__tab');
		panelAdminItems[index].classList.add('panel-admin__item_active');
		
		setItemPanelHeight(panelAdminItems[index]);
		setItemPanelHeight(panelAdminItems[index]);
	});

});



// адаптивность, растягиваем блоки с контентом до конца страницы

function setItemPanelHeight(item) {

	let headerAdmin = document.querySelector('.header-admin');
	let panelAdminTabs = document.querySelector('.panel-admin__tabs');

	let headerAdminHeight = parseInt(window.getComputedStyle(headerAdmin).height);
	let panelAdminTabsHeight = parseInt(window.getComputedStyle(panelAdminTabs).height);
	//let panelAdminItemHeight = parseInt(window.getComputedStyle(item).height);

	//let sumHeight = headerAdminHeight + panelAdminTabsHeight + panelAdminItemHeight;
	
	if (document.documentElement.clientHeight >= document.body.clientHeight) {	
		item.style.height = `${document.documentElement.clientHeight - headerAdminHeight - panelAdminTabsHeight}px`;
		return;
	}

	item.style.height = 'auto';
}

window.addEventListener('resize', function() {
	console.log('resize');

	let activeItem = document.querySelector('.panel-admin__item_active');
	setItemPanelHeight(activeItem);
	setItemPanelHeight(activeItem);
});

window.addEventListener('DOMContentLoaded', function() {
	console.log('load');
	let activeItem = document.querySelector('.panel-admin__item_active');
	setItemPanelHeight(activeItem);
});

//window.addEventListener('unhandledrejection', function(event) {
//	// объект события имеет два специальных свойства:
//	alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
//	alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
//});