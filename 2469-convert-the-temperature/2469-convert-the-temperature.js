/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9/5) + 32;

  return [ kelvin, fahrenheit ];
};