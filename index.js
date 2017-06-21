var request = require('request');

var apiKey = '51f2ce8d5c22cbfa64b2bca366f3489e';
var city = 'portland';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
      var weather = JSON.parse(body);
      var message = `It's ${weather.main.temp} degrees Celsius in ${weather.name}!`;
               console.log(message);
    // console.log('body:', weather);
  }
});
