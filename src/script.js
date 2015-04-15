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

  var $form = $('#ajax_form');
  var $result = $('#store');
  $form.on('submit', function(event) {

    console.log('Worked so far...');
    console.log($('#temperature').text())
    event.preventDefault;

    $.ajax({
            url: '/temperature_change',
            data: {
                   temp: $('#temperature').text()
            }
    }).done(function(data) {
      $('#store').append(data);
    }).fail(function(serverData) {
            console.log(serverData);
            $result.prepend("Error: " + serverData.statusText);
          }).always(function() {
            $result.prepend("Your Result: ")
          });

    return false

  });

};

$(document).ready(function(){
  onReady()
});