var onReady = function(){

  var thermostat = new Thermostat;

  $('#up').click(function() {
    thermostat.increase();
    $('#temperature span').text(thermostat.temperature);
  });

  $('#down').click(function() {
    thermostat.decrease();
    $('#temperature span').text(thermostat.temperature);
  });

};

$(document).ready(function(){
  onReady()
});