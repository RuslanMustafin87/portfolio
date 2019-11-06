// let xhr = new XMLHttpRequest();
export default function() {
	const button = document.querySelector('.form__submit');
	const form = document.forms.feedback;

	button.addEventListener('click', function() {

		if (form.name.value === '' || form.email.value === '') {
			alert('Заполните все поля');
			return;
		}

		if (form.age.value.indexOf('@') === -1) {
			alert('Адрес электроной почты должен содержать символ "@"');
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

		// xhr.open('POST', '/portfolio');

		// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		// xhr.send(body);

		fetch('/portfolio', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: body
		});
	});
}