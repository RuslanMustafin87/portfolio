// module.exports = function(message) {

// 	let modalContainer = document.querySelector('.modal');
// 	//let modalContainer = document.getElementById('modal__common');
// 	let modal = modalContainer.querySelector('.modal__window');
// 	let modalText = modalContainer.querySelector('.modal__text');
// 	let cross = modalContainer.querySelector('.modal__close-cross');

// 	modal.style.transition = '.3s linear ';
// 	setTimeout(() => {
// 		modal.style.transform = 'translate(-50%, -50%) scale(1)';
// 	}, 100);
// 	modalContainer.style.display = 'block';
// 	modalText.innerHTML = message;

// 	cross.addEventListener('click', function() {
// 		modalContainer.style.display = 'none';
// 		modal.style.transform = 'translate(-50%, -50%) scale(0)';
// 		modalText.innerHTML = '';
// 	});
// };

module.exports = function(modalContainer) {

	this.modal = modalContainer.querySelector('.modal__window');
	this.modalText = modalContainer.querySelector('.modal__text');
	this.modalClose = modalContainer.querySelector('.modal__close');

	this.start = function(message) {

		this.modal.style.transition = '.3s linear ';
		setTimeout(() => {
			this.modal.style.transform = 'translate(-50%, -50%) scale(1)';
		}, 100);
		modalContainer.style.display = 'block';
		this.modalText.innerHTML = message;

	};

	this.modalClose.addEventListener('click', () => {
		modalContainer.style.display = 'none';
		this.modal.style.transform = 'translate(-50%, -50%) scale(0)';
		this.modalText.innerHTML = '';
	});
};