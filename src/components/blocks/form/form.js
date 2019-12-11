// let xhr = new XMLHttpRequest();
export default function() {
	const button = document.querySelector('.form__submit');
	const form = document.forms.feedback;

	button.addEventListener('click', function() {

		let modal = require('../modal/modal'); 

		if (form.name.value === '' || form.email.value === '') {
			modal('Заполните все поля');
			return;
		}

		if (form.email.value.indexOf('@') === -1) {
			modal('Адрес электроной почты должен содержать символ "@"');
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