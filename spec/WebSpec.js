describe("Web", function() {

  describe('home page', function() {

    it('shows starting temperature of 20', function() {
      jasmine.getFixtures().fixturesPath = 'lib';
      loadFixtures('index.html');
      expect($('#temperature')).toHaveText('20°C');
    });

  });

});