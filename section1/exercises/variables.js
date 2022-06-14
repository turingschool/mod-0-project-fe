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
console.log(`${name} must not return to Hogwarts!`);


// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = 'Sean';
var isHungry = 'are hungry';
var numberOfPets = 4;

console.log(firstName + ' has ' + numberOfPets + ' dogs that ' + isHungry);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.

//I used strings for the variables firstName and isHungry and used number for numberOfPets.
//I wanted to use boolean for isHungry but could not figure out how to print that.

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
var firstName = 'Tom';
var isHungry = 'not hungry';
var numberOfPets = 3;

console.log(firstName + ' fed his ' + numberOfPets + ' cats. They are ' + isHungry);


// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks);

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
