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

  });

});