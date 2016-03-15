var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#humidity').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {

      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showHumidity').text(error.message);
    });
  });
});


// $('.showTemp').text("The temperature in " + city + " is " + response.main.temp + "K");
//
// $('.showTemp').text(error.message);
