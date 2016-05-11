"use strict";

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  it("starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases by 1 with up button", function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("decreases by 1 with down button", function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("minimum limit is 10 degrees", function(){
    thermostat.temperature = 10;
    expect(function() {thermostat.down();}).toThrowError("Min limit is 10!");
  });

  it("max temperature is 25 degrees when saving mode is on", function(){
    thermostat.savingMode = true;
    thermostat.temperature = 25;
    expect(function() {thermostat.up();}).toThrowError("Max temperature is 25 degrees when power saving mode ON.");
  });

  it("max temperature is 32 degrees when saving mode is off", function(){
    thermostat.savingMode = false;
    thermostat.temperature = 32;
    expect(function() {thermostat.up();}).toThrowError("Max temperature is 32 degrees when power saving mode OFF.");
  });

  it("power saving mode is default to true", function(){
    expect(thermostat.savingMode).toBe(true);
  });

  it("resets temperature to 20", function(){
    thermostat.temperature = 25;
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("displays green when temperature < 18", function(){
    thermostat.temperature = 18;
    expect(thermostat.display()).toEqual("green");
  });

  it("displays yellow when temperature < 25", function(){
    thermostat.temperature = 25;
    expect(thermostat.display()).toEqual("yellow");
  });

  it("displays red when temperature > 25", function(){
    thermostat.temperature = 30;
    expect(thermostat.display()).toEqual("red");
  });

});
