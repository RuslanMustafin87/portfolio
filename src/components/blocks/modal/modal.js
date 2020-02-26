

module.exports = function() {

	let modalContainer = document.querySelector('.modal');
	this.modal = modalContainer.querySelector('.modal__window');
	this.modalText = modalContainer.querySelector('.modal__text');
	this.modalClose = modalContainer.querySelector('.modal__cross');

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