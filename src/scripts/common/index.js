const welAutorize = document.querySelector('.autorize');
const welLogin = document.querySelector('.welcome__center_login');
const welAuthor = document.querySelector('.welcome__center_author');

welAutorize.addEventListener('click', function(){
    welAuthor.style.display = 'none';
    welLogin.style.display = 'block';
    welAutorize.style.display = 'none';
})

// module.exports = fn;