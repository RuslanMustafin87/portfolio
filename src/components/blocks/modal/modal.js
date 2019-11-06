export default function(message) {

	let modal = document.querySelector('.modal__window');
	let modalContainer = document.querySelector('.modal');
	let cross = document.querySelector('.close__cross');


	modalContainer.style.display = 'block';
	modal.style.transform = 'translate(-50%, -50%) scale(1)';
	modal.innerHTML = message;

	cross.addEventListener('click', function() {
		modalContainer.style.display = 'none';
		modal.style.transform = 'translate(-50%, -50%) scale(0)';
		modal.innerHTML = '';
	});
}