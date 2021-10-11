const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const application_1 = document.querySelector('.application_1');
const application_2 = document.querySelector('.application_2');
const application_3 = document.querySelector('.application_3');
const application_4 = document.querySelector('.application_4');
// const visa_applications = document.querySelectorAll('.visa_application');

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	} else if (currentActive == 2) {
		application_1.classList.add('hidden');
		application_2.classList.remove('hidden');
		application_3.classList.add('hidden');
		application_4.classList.add('hidden');
	} else if (currentActive == 3) {
		application_1.classList.add('hidden');
		application_2.classList.add('hidden');
		application_3.classList.remove('hidden');
		application_4.classList.add('hidden');
	} else if (currentActive == 4) {
		application_1.classList.add('hidden');
		application_2.classList.add('hidden');
		application_3.classList.add('hidden');
		application_4.classList.remove('hidden');
	}

	update();
});

prev.addEventListener('click', () => {
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	} else if (currentActive == 3) {
		application_1.classList.add('hidden');
		application_2.classList.add('hidden');
		application_3.classList.remove('hidden');
		application_4.classList.add('hidden');
	} else if (currentActive == 2) {
		application_1.classList.add('hidden');
		application_2.classList.remove('hidden');
		application_3.classList.add('hidden');
		application_4.classList.add('hidden');
	} else if (currentActive == 1) {
		application_1.classList.remove('hidden');
		application_2.classList.add('hidden');
		application_3.classList.add('hidden');
		application_4.classList.add('hidden');
	}

	update();
});
function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');
	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + '%';

	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}
// **-----------------------------------Visa Application----------------------------------------**//

// function application_hidden() {
// 	visa_applications.forEach(application => {
// 		application.classList.add('hidden');
// 	});
// }
