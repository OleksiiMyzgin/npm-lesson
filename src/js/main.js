(function () {
	if (!window.localStorage.getItem('hasVisited')) {
		document.querySelector('.root').classList.add('is-active');
		window.localStorage.setItem('hasVisited', 'true');
	}
}());