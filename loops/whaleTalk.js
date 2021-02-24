/*
we’re going to practice loops in JavaScript.
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops
 */

let input = 'This would be translated';

let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if (input[i] === vowels [j]) {
            if (input[i] === 'e' || input[i] === 'u') {
                resultArray.push(input[i], input[i]);
            } else{
                resultArray.push(input[i]);
            }
        }
    }

}

console.log(resultArray.join('').toUpperCase());

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(numbers => {
    return numbers > 250;
});
