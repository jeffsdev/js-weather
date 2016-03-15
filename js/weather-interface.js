var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {

      $('.showTemp').text("The temperature in " + city + " is " + response.main.temp + "K");
      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showTemp').text(error.message);
      $('.showHumidity').text(error.message);
    });
  });
});



// }).fail(function(error) {
