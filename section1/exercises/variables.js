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
console.log(name);  //Harry Potter

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var enrolledStudents = 22 + 2;
console.log(enrolledStudents);  //24

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var myString = "Harry Potter must not return to Hogwarts!"
console.log(myString);  //Harry Potter must not return to Hogwarts!

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`. 
  // Store the appropriate data types in each.
// log all three variables to the console.

var firstName = "Rachel"
var isHungry = true;
var numberOfPets = 2;

console.log("firstname = ", firstName);
console.log("isHungry = ", isHungry);
console.log("numberOfPets = ", numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above? 
  // Explain.

  /* based on the name of the variables, there appeared to be the opportunity to use all three of the 
  variable types we learned.  I could have used a string for isHungry.  However, it seemed that a boolean
  was more appropriate. */

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different 
  // values (but same data type).

  firstName = "Todd";
  isHungry = true;
  numberOfPets = 16;

// log all three variables to the console.
console.log("firstname = ", firstName);
console.log("isHungry = ", isHungry);
console.log("numberOfPets = ", numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;

console.log("Total Snacks = ", healthySnacks + junkFoodSnacks); //14

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console 
// as you would expect? Yes.