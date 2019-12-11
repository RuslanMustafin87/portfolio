// let xhr = new XMLHttpRequest();
export default function() {
	const button = document.querySelector('.form__submit');
	const form = document.forms.feedback;
	let Modal = require('../modal/modal');

	let modalContainer = document.getElementById('modal__common');

	const modalPortfolio = new Modal(modalContainer);


	button.addEventListener('click', function() {

		if (form.name.value === '' || form.email.value === '') {
			modalPortfolio.start('Заполните все поля');
			return;
		}

		if (form.email.value.indexOf('@') === -1) {
			modalPortfolio.start('Адрес электроной почты должен содержать символ "@"');
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

		fetch('/portfolio', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: body
		});
	});
}