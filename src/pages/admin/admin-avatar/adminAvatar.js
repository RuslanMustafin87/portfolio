import Modal from '../../../components/blocks/modal/modal';
const showModalAdmin = new Modal();
console.log(showModalAdmin);

//отправляем картинку на сервер

let formAvatar = document.forms.formAvatar;

formAvatar.onsubmit = (event) => {
	event.preventDefault();

    // проверяем чтобы файл был выбран
	if (document.querySelector('.form-avatar__input').value === '') {
		showModalAdmin.start('Выберите файл');
		return;
	}

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