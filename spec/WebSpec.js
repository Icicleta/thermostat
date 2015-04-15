describe("Web", function() {

  describe('home page', function() {

    beforeEach(function(){
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      onReady();
    });

    it('shows starting temperature of 20', function() {
      expect('#temperature').toHaveText('20°C');
    });

    it('has button to increase temperature by one', function() {
      $('#up').trigger('click');
      expect('#temperature').toHaveText('21°C');
    });

    it('has button to decrease temperature by one', function() {
      $('#down').click();
      expect('#temperature').toHaveText('19°C');
    });

    it('has button to reset to 20°C', function() {
      $('#down').click();
      expect('#temperature').toHaveText('19°C');
      $('#reset').click();
      expect('#temperature').toHaveText('20°C');
    });

    it('has a maximum of 25 with power saving on', function() {
      $('#power-save').click();
      $('#power-save').click();
      for(i=0; i < 6; i++) {
        $('#up').trigger('click');
      };
      expect('#temperature').toHaveText('25°C');
    });

    it('has a maximum of 32 with power saving off', function() {
      $('#power-save').click();
      for(i=0; i < 13; i++) {
        $('#up').trigger('click');
      };
      expect('#temperature').toHaveText('32°C');
    });

    it('if temperature is above 25, returns to 25 when power saving on', function() {
      $('#power-save').click();
      for(i=0; i < 13; i++) {
        $('#up').trigger('click');
      };
      $('#power-save').click();
      expect('#temperature').toHaveText('25°C');
    });

    it('has yellow text when temp is between 18°C and 25°C', function() {
      for(i=0; i < 10; i++) {
        $('#down').click();
      };
      for(i=0; i < 10; i++) {
        $('#up').click();
      };
      expect($('#temperature').css('color')).toEqual('rgb(255, 255, 0)');
    });

    it('has blue text when temp is below 18', function() {
      for(i=0; i < 10; i++) {
        $('#down').click();
      };
      expect($('#temperature').css('color')).toEqual('rgb(0, 0, 255)');
    });

    it('has red text when temp is above 24', function() {
      for(i=0; i < 13; i++) {
        $('#up').click();
      };
      expect($('#temperature').css('color')).toEqual('rgb(255, 0, 0)');
    });

  });

});