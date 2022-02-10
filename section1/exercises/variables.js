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
var elfWarning = "Harry Potter must not return to Hogwarts!";
console.log(elfWarning);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.

var firstName = "Amanda";
var isHungry = true;
var numberOfPets = 1;

console.log(firstName, isHungry, numberOfPets);


// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.

// For var firstName, I used a string because I want a specific string of
//characters to appear when the variable runs in the console. I chose to use
// a boolean value for isHungry, because that state is either true or false.
//For var numberOfPets I used a number because a numerical value is appropriate.

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.

var firstName = "Dobby";
var isHungry = false;
var numberOfPets = 0;

console.log(firstName, isHungry, numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;

//Method 1- adds the value of the two variables.

console.log(healthySnacks + junkFoodSnacks);

//Method 2- declares a new variable, and assigns it the value of healthySnacks + junkFoodSnacks.

var allSnacks = (healthySnacks + junkFoodSnacks);
console.log(allSnacks);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
