var request = require('request');
var apiKey = '51f2ce8d5c22cbfa64b2bca366f3489e';

const argv = require('yargs').argv;
// var city = 'portland';
var city = argv.c || 'santa monica';
var urlF = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
var urlC = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`



request(urlF, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
      var weather = JSON.parse(body);
      var message = `It's ${weather.main.temp} degrees Farenheit in ${weather.name}!`;
               console.log(message);
    // console.log('body:', weather);
  }
});

request(urlC, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
      var weather = JSON.parse(body);
      var message = `It's ${weather.main.temp} degrees Celsius in ${weather.name}!`;
               console.log(message);
    // console.log('body:', weather);
    console.log('Longitude: '+`${weather.coord.lon}`+ 'and Latitude'+`${weather.coord.lat}`)
    console.log('Country: '+`${weather.sys.country}`);
  }
});
