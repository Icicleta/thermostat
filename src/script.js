var thermostat = new Thermostat;
$('#up').click(function() {
  thermostat.increase();
  $('#temperature span').text(thermostat.temperature);
});
