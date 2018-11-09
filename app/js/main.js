var slides = document.querySelectorAll('.data__item');
var totalPages;

if (slides.length > 9) {
	totalPages = slides.length;
} else {
	totalPages = '0' + slides.length;
}

var currentPage = document.querySelector('.current-page');
var i = 0;

currentPage.innerHTML = ('0' + (i + 1)) + ' ' + '/' + ' ' + totalPages;

var prev = document.querySelector('.toggle_prev');

prev.onclick = function() {
	slides[i].style.display = 'none';
	
	i--;

	if (i < 0) {
		i = slides.length - 1;
	}

	slides[i].style.display = 'block';

	if (i < 9) {
		currentPage.innerHTML = ('0' + (i + 1)) + ' ' + '/' + ' ' + totalPages;
	} else {
		currentPage.innerHTML = (i + 1) + ' ' + '/' + ' ' + totalPages;
	}
}

var next = document.querySelector('.toggle_next');

next.onclick = function() {	
	slides[i].style.display = 'none';
	
	i++;

	if (i >= slides.length) {
		i = 0;
	}

	slides[i].style.display = 'block';

	if (i < 9) {
		currentPage.innerHTML = ('0' + (i + 1)) + ' ' + '/' + ' ' + totalPages;
	} else {
		currentPage.innerHTML = (i + 1) + ' ' + '/' + ' ' + totalPages;
	}
}