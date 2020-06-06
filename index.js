const firstPicture = document.querySelector('.top-container1');
const firstText = document.querySelector('.comment1');
const secondPicture = document.querySelector('.top-container2');
const secondText = document.querySelector('.comment2');
const btn = document.querySelectorAll('.buttons');

btn.forEach((item) => {
	item.addEventListener('click', function () {
		if (
			// Check if the first set has the hide class
			firstPicture.classList.contains('hide') &&
			firstText.classList.contains('hide')
		) {
			// Adds hide class to second set
			secondPicture.classList.add('hide');
			secondText.classList.add('hide');

			// Removes hide class from first set
			firstPicture.classList.remove('hide');
			firstText.classList.remove('hide');
			// Adds Animation to first set
			firstPicture.classList.add('animate');
			firstText.classList.add('animate');
		} else if (
			// Checks if second set has the hide class
			secondPicture.classList.contains('hide') &&
			secondText.classList.contains('hide')
		) {
			// Adds hide class to first set
			firstPicture.classList.add('hide');
			firstText.classList.add('hide');

			// Removes hide class from secons set
			secondPicture.classList.remove('hide');
			secondText.classList.remove('hide');
			// Adds Animation to first set
			secondPicture.classList.add('animate');
			secondText.classList.add('animate');
		}
	});
});
