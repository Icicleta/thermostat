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

    it('20 when reset', function() {
      thermostat.increase();
      thermostat.resetTemp();
      expect(thermostat.temperature).toBe(20);
    });

    describe('when power saving mode', function(){

      it('is on, max of 25', function(){
        for (x = 0; x < 6; x++) {
          thermostat.increase();
        };
        expect(thermostat.temperature).toBe(25);
      });

      it('is off, max of 32', function(){
        thermostat.switchPowerSaver();
        for (x = 0; x < 13; x++) {
          thermostat.increase();
        };
        expect(thermostat.temperature).toBe(32);
      });

    });

  });

});