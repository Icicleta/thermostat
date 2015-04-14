describe("Web", function() {

  describe('home page', function() {

    it('shows starting temperature of 20', function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      expect('#temperature').toHaveText('20°C');
    });

    it('has button to increase temperature by one', function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $('#up').trigger('click');
      console.log($('#up'));
      expect('#temperature').toHaveText('21°C');
    });

  });

});