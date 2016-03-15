$(document).ready(function() {
  $('#temperature').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {  $('.showTemp').text("The temperature in " + city + " is " + response.main.temp + "K");
    }).fail(function(error) {
      $('.showTemp').text(error.message);
    });
  });
});
