var onReady = function(){

  var thermostat = new Thermostat;

  var showTemp = function() {
    if (thermostat.temperature < 18) {
      $('#temperature').css('color', 'blue');
    } else if (thermostat.temperature < 25){
      $('#temperature').css('color', 'yellow');
    } else {
      $('#temperature').css('color', 'red');
    };

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

  $('#power-save').click(function() {
    if ($(this).is(':checked')) {
      thermostat.switchPowerSaver();
    } else {
      thermostat.switchPowerSaver();
    };
    showTemp();
  });

};

$(document).ready(function(){
  onReady()
});