export default function() {
	const button = document.querySelector('.form__submit');
	const form = document.forms.feedback;
	let Modal = require('../modal/modal');

	let modalPortfolio = document.getElementById('modal__portfolio');

	const showModalPortfolio = new Modal(modalPortfolio);


	button.addEventListener('click', function() {

		if (form.name.value === '' || form.email.value === '') {
			showModalPortfolio.start('Заполните все поля');
			return;
		}

		if (form.email.value.indexOf('@') === -1) {
			showModalPortfolio.start('Адрес электроной почты должен содержать символ "@"');
			return;
		}

		const body = JSON.stringify({
			name: form.name.value,
			email: form.email.value,
			message: form.message.value
		});

		form.name.value = '';
		form.email.value = '';
		form.message.value = '';

		fetch('http://127.0.0.1:3001/portfolio', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: body
		}).then(
			res => {
				if (res.ok) {
					//showModalPortfolio.start('Сообщение отправлено');
					return res.json();
				} else {
					showModalPortfolio.start('Ошибка ' + res.status);
				}
			},
			err => {
				showModalPortfolio.start('Ошибка! Сообщение не отправлено.');
			}
		).then(
			body => {
				showModalPortfolio.start(body.status);
			},
		);
	});
}