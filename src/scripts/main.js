import loadData from './async-fetch-json-data';
import printJsonObject from './print-json-object';

const dataUrl = 'https://api.github.com/users/';

document.querySelector('[data-search-form]').addEventListener('submit', function(event) {
	event.preventDefault();
	const userName = document.querySelector('[data-search-input]').value.trim();
	if (!userName) {
		showError('Please enter a username');
		return;
	}

	loadData(dataUrl + userName).then(data => printJsonObject(data));
})

function showError(msg) {
	console.log(msg)
}