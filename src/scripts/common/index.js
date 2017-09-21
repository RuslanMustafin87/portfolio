const welAutorize = document.querySelector('.autorize');
const welLogin = document.querySelector('.welcome__login');
const welAuthor = document.querySelector('.welcome__author');

welAutorize.addEventListener('click', function(){
    welAuthor.style.display = 'none';
    welLogin.style.display = 'block';
    welAutorize.style.display = 'none';
})

// module.exports = fn;