/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/variables.js`
*/


// EXAMPLE: Write code below to assign Harry Potter's name to a variable and
// log that variable to the console:
var name = "Harry Potter";
console.log(name);

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var enrolledStudents = 22 + 2;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var quote = 'Harry Potter must not return to Hogwarts!'
console.log(quote)

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName;
var isHungry;
var numberOfPets;
var firstName = 'Joshua'; // my first name
var isHungry = true // hunger status
var numberOfPets = 0; // amount of pets
console.log(firstName, isHungry, numberOfPets)

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
//When deciding the data type for 'firstName' I chose String Data because I recognized  the result consisted of letters, was factual, and it would not change
//When deciding the data type for 'isHungry' I chose Boolean Data because the result could have been true or false and the value has the possibility to change in the future
//When deciding the data type for 'numberOfPets' I chose Number Data because the result would always be a number and could change in the future by adding a pet
// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.

firstName = 'Kevin' // not my real name
isHungry = false // hunger status
numberOfPets = 0+1 // just got a dog!

console.log(firstName, isHungry, numberOfPets)

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6; // total number of healthy snacks
var junkFoodSnacks = 8; // total number of junk food snacks

console.log (healthySnacks + junkFoodSnacks)

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
//Yes!
