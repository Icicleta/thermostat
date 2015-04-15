var onReady = function(){

  var thermostat = new Thermostat;

  var showTemp = function() {
    $('#temperature span').text(thermostat.temperature);
  };

  $('#up').click(function() {
    thermostat.increase();
    showTemp();
  });

  $('#down').click(function() {
    thermostat.decrease();
    showTemp();
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    showTemp();
  });

};

$(document).ready(function(){
  onReady()
});