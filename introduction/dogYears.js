/*practice variables and strings in JavaScript.
Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
 */

//This is my current age
const myAge = 34;

//first 2 years of the dogs life
let earlyYears = 2;

earlyYears *= 10.5;

// last years of my life
let laterYears = myAge - 2;

//later years equals 4 years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

// my name to lowercase
const myName = 'Ana'.toLowerCase();

//statement that displays your name and age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);