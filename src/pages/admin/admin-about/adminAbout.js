import Modal from '../../../components/blocks/modal/modal.js';
const showModalAdmin = new Modal();

//отправка данных на сервер для страницы about

let buttonAdminAbout = document.querySelector('.admin-about__button');

let skillsList = ['html', 'css', 'js', 'python', 'mysql', 'node', 'mongo', 'git', 'webpack', 'linux'];

// функция создания объекта с скилами и их значениями для отправки на сервер

function getSkills(skillsList) { 

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