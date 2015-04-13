function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.increase = function() {
  return this.temperature ++
};

Thermostat.prototype.decrease = function() {
  if (this.temperature === 10) return 10
  return this.temperature --
};
