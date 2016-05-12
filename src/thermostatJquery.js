$(document).ready(function() {

  thermostat = new Thermostat();
  var displayColor = thermostat.monitor();
    $("h1").attr("style", "color: " + displayColor + ";");

  $('#temp').text(thermostat.temp);

  $('#temp-up').on('click', function(){
    thermostat.up();
    displayColor = thermostat.monitor();
    console.log(displayColor);
    $('#temp').text(thermostat.temp);
    $("h1").attr("style", "color: " + displayColor + ";");
  });

  $('#temp-down').on('click', function(){
    thermostat.down();
    displayColor = thermostat.monitor();
    console.log(displayColor);
    $('#temp').text(thermostat.temp);
    $("h1").attr("style", "color: " + displayColor + ";");
  });

  $('#temp-reset').on('click', function(){
    thermostat.reset();
    $('#temp').text(thermostat.temp);
  });

  $('#power-saving-on').click(function(){
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on');
    thermostat.getCurrentTemperature();
  });

  $('#power-saving-off').click(function(){
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off');
    thermostat.getCurrentTemperature();
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=bedceb2e350097bbfcff6ce2dbc503f2&units=metric';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }
    
});

