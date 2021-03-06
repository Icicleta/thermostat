function Thermostat(){
  this.temperature = 20;
  this.powerSaver = true;
  this.maxTemp = 25;
};

// Thermostat.prototype.switchOnPowerSaver = function(){
//   if (this.powerSaver === true) {
//     this.maxTemp = 25;
//   };
// };

Thermostat.prototype.switchPowerSaver = function(){
  this.powerSaver = !this.powerSaver;
  if (this.powerSaver === true) {
    this.maxTemp = 25;
    if (this.temperature > 25) {
      return this.temperature = 25;
    };
  }
  else { this.maxTemp = 32};
};

Thermostat.prototype.increase = function() {
  if (this.temperature >= this.maxTemp) return this.maxTemp;
  else return this.temperature ++;
};

Thermostat.prototype.decrease = function() {
  if (this.temperature === 10) return 10;
  return this.temperature --;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};