import 'normalize.css';
import '../main.scss';
import './index.scss';

// eslint-disable-next-line no-unused-vars
import preloader from '../../components/blocks/preloader/preloader';
// eslint-disable-next-line no-unused-vars
import parallax from '../../components/blocks/parallax/parallax.js';
import Modal from '../../components/blocks/modal/modal';

const showModalAuthorize = new Modal();
preloader();

const welAutorize = document.querySelector('.autorize');
const welLogin = document.querySelector('.welcome__center_login');
const welAuthor = document.querySelector('.welcome__center_author');
const toMain = document.querySelector('#toMain');

// flip_index gorizont

window.onload = () => {
	welAuthor.style.transition = '.8s linear 1s';
	welAuthor.style.opacity = '1';
	welAuthor.style.transform = 'perspective(600px) rotateX(0deg)';
	setTimeout(() => {
		welAuthor.style.transformOrigin = '50% 50%';
	}, 1800);

	//videoDisable();
};

document.addEventListener('DOMContentLoaded', () => {
	videoEnable();
});

function videoEnable() {
	if (window.innerWidth >= 1024) {
		// eslint-disable-next-line quotes
		document.getElementById('video-container').innerHTML = "<video class='welcome__video' autoplay loop muted> <source src='/assets/images/night.webm' type='video/webm; codecs=\"vp8, vorbis\"'> <source src='/assets/images/night.mp4' type='video/mp4'></video>";
	}
}

welAutorize.addEventListener('click', function() {
	welAuthor.style.transition = 'transform .3s linear';
	welLogin.style.transition = 'transform .3s linear';
	welAuthor.style.transitionDelay = '0s';
	welAuthor.style.transform = 'perspective(600px) rotateY(90deg)';
	welLogin.style.transitionDelay = '0.3s';
	welLogin.style.transform = 'perspective(600px) rotateY(0deg)';
	welAutorize.style.opacity = '0';
});

toMain.addEventListener('click', function() {
	welLogin.style.transitionDelay = '0s';
	welLogin.style.transform = 'perspective(600px) rotateY(-90deg)';
	welAuthor.style.transitionDelay = '0.3s';
	welAuthor.style.transform = 'perspective(600px) rotateY(0deg)';
	welAutorize.style.opacity = '1';
});

//валидация формы авторизации

const formAuthorize = document.querySelector('.form-authorize');

formAuthorize.onsubmit = (e) => {
	e.preventDefault();

	const form = new FormData(formAuthorize);

	if (form.get('login') === '') {
		let warningLogin = document.querySelector('.form__login-warning');
		warningLogin.style.visibility = 'visible';
		window.onclick = () => {
			warningLogin.style.visibility = 'hidden';
		};
		return;
	}
	if (form.get('password') === '') {
		let warningPass = document.querySelector('.form__password-warning');
		warningPass.style.visibility = 'visible';
		window.onclick = () => {
			warningPass.style.visibility = 'hidden';
		};
		return;
	}
	if (!form.get('capcha')) {
		let warningCapcha = document.querySelector('.form__capcha-warning');
		warningCapcha.style.visibility = 'visible';
		window.onclick = () => {
			warningCapcha.style.visibility = 'hidden';
		};
		return;
	}
	const radio1 = document.getElementById('radio1');
	const radio2 = document.getElementById('radio2');
	if (radio1.checked === false && radio2.checked === false) {
		let warningCapcha = document.querySelector('.form__radio-warning');
		warningCapcha.style.visibility = 'visible';
		window.onclick = () => {
			warningCapcha.style.visibility = 'hidden';
		};
		return;
	}
	if (radio2.checked === true) {
		showModalAuthorize.start('Заполните форму правильно');
	}

	fetch('http://127.0.0.1:3001/', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: null
	});
};