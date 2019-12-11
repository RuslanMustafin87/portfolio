module.exports = function(message) {

	let modalContainer = document.querySelector('.modal');
	//let modalContainer = document.getElementById('modal__common');
	let modal = modalContainer.querySelector('.modal__window');
	let modalText = modalContainer.querySelector('.modal__text');
	let cross = modalContainer.querySelector('.modal__close-cross');

	modal.style.transition = '.3s linear ';
	setTimeout(() => {
		modal.style.transform = 'translate(-50%, -50%) scale(1)';
	}, 100);
	modalContainer.style.display = 'block';
	modalText.innerHTML = message;

	cross.addEventListener('click', function() {
		modalContainer.style.display = 'none';
		modal.style.transform = 'translate(-50%, -50%) scale(0)';
		modalText.innerHTML = '';
	});
};