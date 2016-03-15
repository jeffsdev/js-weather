var toFarenheit = require('./../js/temperature.js').toFarenheit;
var toCelsius = require('./../js/temperature.js').toCelsius;

$(document).ready(function() {
  $('#temperatureF').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {  $('.showTemp').text("The temperature in " + city + " is " + toFarenheit(response.main.temp) + "F");
    }).fail(function(error) {
      $('.showTemp').text(error.message);
    });
  });
  $('#temperatureC').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {  $('.showTemp').text("The temperature in " + city + " is " + toCelsius(response.main.temp) + "C");
    }).fail(function(error) {
      $('.showTemp').text(error.message);
    });
  });
  $('#rain').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',usa' + '&appid=' + apiKey).then(function(response) {  $('.showRain').text("It rained in " + city + " ! It rained this much " + response.list[0].rain['3h']);
    }).fail(function(error) {
      $('.showRain').text(error.message);
    });
  });
});
