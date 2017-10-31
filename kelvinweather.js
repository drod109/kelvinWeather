// Interact with user to assign variable
//const kelvin = 294;

// prompt user for variable assignment
let kelvin = prompt('What is the Kelvin temperature today?')

// Set variable and assign kelvin minus 273
let celsius = kelvin - 273;

// Equation to covert fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// console.log the results using ES6 interpolation
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees fahrenheit`);
