export default function(skill) {

	fetch('http://127.0.0.1:3001/admin', {
		method: 'GET',
		mode: 'cors',
		json: {},
	}).then(
		body => {
			console.log(body);
		}
	);

	const PI = 314;
	const skillsContainer = document.querySelector('.about-me');

	skill.forEach(element => {

		window.addEventListener('scroll', function() {
			if (skillsContainer.getBoundingClientRect().top <= 0) {


				let percent = element.dataset.skill;
				let percentSkill = percent / 100 * PI;

				element.style.strokeDasharray = `${percentSkill} ${314 - percentSkill}`;
			}
		});

	});

}