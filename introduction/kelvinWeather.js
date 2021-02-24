/*
practice variables and printing to the console. let’s convert Kelvin to Celsius, then to Fahrenheit.
 */


//creating a variable called Kelvin which will not change
const kelvin = 285;

//Celsius is 273 less than Kelvin
let celsius = kelvin - 273;

//will calculate fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//extra practice, Convert celsius to Newton
let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`)