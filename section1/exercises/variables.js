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
var notReturningToHogwarts = "Harry Potter must not return to Hogwarts!";
console.log(notReturningToHogwarts);


// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Harry";
var isHungry = "is hungry";
var numberOfPets = 7;
console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);
// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.I used string for the first two, because they were just letters and if I need to print them out,
  // number wouldn't make sense, and boolean definitely doesnt, since nothing is being defined as true or false.
  //Number of pets is just the numerical value of pets, so a string could work, but it makes more sense to use a number.


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
var  numberofPets = 4;
var isHungry = "are hungry";
var firstName = "of Harry's pets ";
console.log(numberofPets + firstName + isHungry);


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
