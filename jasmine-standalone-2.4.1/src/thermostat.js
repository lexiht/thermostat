function Thermostat(){
	this.temperature = 20;
	this.savingMode = true;
};

Thermostat.prototype.up = function(){
	if(this.savingMode && this.temperature === 25) {
		throw new Error("Max temperature is 25 degrees when power saving mode ON.")
	} else if(!this.savingMode && this.temperature === 32) {
		throw new Error("Max temperature is 32 degrees when power saving mode OFF.")
	} else {
		this.temperature++;
	}	
};

Thermostat.prototype.down = function(){
	if (this.temperature === 10) {
		throw new Error("Min limit is 10!");
	} else {
		this.temperature--;	
	}	
};

Thermostat.prototype.reset = function(){
	this.temperature = 20;
};

Thermostat.prototype.display = function(){
	if(this.temperature <= 18) {
		return "green";
	} else if(this.temperature > 25) {
		return "red";
	} else {
		return "yellow";
	}
};



