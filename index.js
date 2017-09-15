
let request = require('request');
const argv = require('yargs').argv;

let apiKey = 'dbe9172389c9bdd7d05934f72256c1c3';
let city = argv.c || 'Washington D.C.';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
