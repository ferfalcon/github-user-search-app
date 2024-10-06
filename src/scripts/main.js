import loadData from './async-fetch-json-data';
import printJsonObject from './print-json-object';

const dataUrl = 'https://api.github.com/users/ferfalcon';

loadData(dataUrl)
	.then ( data => {
		printJsonObject(data);
	})