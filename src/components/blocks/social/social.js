export const social = () => {

	var socialIcons = document.querySelectorAll('.social__icon');

	socialIcons.forEach((item) => {
		item.addEventListener('mouseover', () => {
			item.setAttribute('fill', 'red');
		});
	});

};