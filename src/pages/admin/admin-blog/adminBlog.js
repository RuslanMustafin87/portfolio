import Modal from '../../../components/blocks/modal/modal.js';

const showModalAdmin = new Modal();

// делаем запрос на сервер в целях получения статей и создаем блок со списком статей

(async function foo() {
	let data = null;
	try {
		let result = await fetch('http://127.0.0.1:3001/api/getArticles', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
		});

		data = await result.json();
	} catch (err) {
		console.log(err);
	}

	createArticles(data); // создаем блок со списком статей
})();

// функция создания блока со списоком статей

function createArticles(data) {

	for (let i = 0; i < data.length; i++) {

		addArticle(data[i].title, data[i]._id);
	}
}

// функция добавления блока статьи в блок со списком статей

async function addArticle(title, id) {
	let listArticles = document.querySelector('.list-articles');

	let articleItem = document.createElement('li');
	let articleText = document.createElement('p');
	let articleDelete = document.createElement('button');

	articleItem.className = 'list-articles__item';
	articleText.className = 'list-articles__text';
	articleDelete.className = 'list-articles__button';

	articleText.innerText = title;
	articleDelete.innerText = 'Удалить';

	articleItem.append(articleText, articleDelete);
	listArticles.appendChild(articleItem);

	// вешаем событие для удаления статей на кнопку "удалить"
	articleDelete.addEventListener('click', () => deleteArticle(articleItem, id));
}

// функция удаления статьи из списка статей и из базы данных на сервере

async function deleteArticle(item, id) {

	item.remove();

	let result = await fetch('http://127.0.0.1:3001/api/articles', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify({id: id})
	});

	let data = await result.json();
	showModalAdmin.start(data.status);
}

// добавление статьи в список статей и отправка на сервер

let formBlog = document.forms.formBlog;

formBlog.onsubmit = (event) => {
	event.preventDefault();

	const body = JSON.stringify({
		title: formBlog.title.value,
		date: new Date(),
		article: formBlog.article.value
	});

	let nameArticle = formBlog.title.value;

	formBlog.title.value = '';
	formBlog.date.value = '';
	formBlog.article.value = '';

	fetch('http://127.0.0.1:3001/api/articles', {
		method: 'POST',
		//mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: body
	}).then(
		res => {
			if (res.ok) {
				showModalAdmin.start('Статья добавлена');
				return res.json();
			} else {
				showModalAdmin.start('Ошибка ' + res.status);
			}
		},
		err => {
			showModalAdmin.start('Ошибка! Сообщение не отправлено.');
		}
	).then(
		body => {
			addArticle(nameArticle, body.id); // добавляем блок статьи в блок со списком статей
			showModalAdmin.start(body.status);
		}
	);
};

