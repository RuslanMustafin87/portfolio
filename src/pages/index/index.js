import 'normalize.css';
import '../main.scss';
import './index.scss';

// flip_index
const welAutorize = document.querySelector('.autorize');
const welLogin = document.querySelector('.welcome__center_login');
const welAuthor = document.querySelector('.welcome__center_author');
const toMain = document.querySelector('#toMain');

welAutorize.addEventListener('click', function(){
	welAuthor.style.transitionDelay = '0s';
	welAuthor.style.transform = 'perspective(600px) rotateY(90deg)';
	welLogin.style.transition = '.3s linear';
	welLogin.style.transitionDelay = '0.3s';
	welLogin.style.transform = 'perspective(600px) rotateY(0deg)';
	welAutorize.style.opacity = '0';
});

toMain.addEventListener('click', function(){
	welLogin.style.transitionDelay = '0s';
	welLogin.style.transform = 'perspective(600px) rotateY(-90deg)';
	welAuthor.style.transitionDelay = '0.3s';
	welAuthor.style.transform = 'perspective(600px) rotateY(0deg)';
	welAutorize.style.opacity = '1';
});