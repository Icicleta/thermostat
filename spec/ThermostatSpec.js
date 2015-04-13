describe("Thermostat", function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  describe('returns temperature', function() {

    it('20 at start', function() {
      expect(thermostat.temperature).toBe(20);
    });

    it('increased by one', function() {
      thermostat.increase();
      expect(thermostat.temperature).toBe(21)
    });

    it('decreased by one', function() {
      thermostat.decrease();
      expect(thermostat.temperature).toBe(19)
    });

    it('of at least 10', function() {
      for (x = 0; x < 11; x++) {
        thermostat.decrease();
      };
      expect(thermostat.temperature).toBe(10)
    });

  });

});