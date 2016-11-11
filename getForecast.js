const request = require('request');
const WUNDERGROUND_API = require('./config').WUNDERGROUND_API;
const sendSms = require('./twilioClient').sendSms;

const requestUrl = `http://api.wunderground.com/api/${WUNDERGROUND_API}/forecast/q/CA/San_Francisco.json`;

request(requestUrl, (err, response, body) => {
	if (err) throw err;
	const json = JSON.parse(body);
	if (response.statusCode === 200) {
		const day1 = json.forecast.simpleforecast.forecastday[0].high;
		console.log(day1)
		sendSms('+19253241730', day1.fahrenheit);
	} else {
		console.log(response.statusCode);
	}
});