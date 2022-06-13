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
var characterName = "Harry Potter";//I changed the variable to be more descriptive
console.log(characterName);

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var totalStudents = 22; //this allows the original total number of students to be changeable
var enrolledStudents = totalStudents + 2;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var message = 'Harry Potter must not return to Hogwarts!'; //storing this in a variable is a nice shortcut
console.log(message)

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`. 
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName, isHungry, numberOfPets;
firstName = 'Hannah';
isHungry = true; //this variable sounds like a question that you can answer with a boolean
numberOfPets = 2;
var answer;

if (isHungry === true) { //I chose to write a conditional statement so the response can changed depending on the isHungry value.
  answer = 'Yes';
} else {
  answer = 'No';
}

console.log(`${firstName} asked the ${numberOfPets} ferrets if they are hungry. They responded with '${answer}, thank you.'`);
// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above? 
  // The variables are used to describe information I am storing inside of it. When thinking of 
  // firstName, I wanted to use my name which has letters. This is a string.
  // The variable name isHungry, implies a question that can be answered with yes or no which is similar
  // the boolean true or false. Based on the boolean value, the response can change.
  //The variable name numberOfPets indicate using number for my values.


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different 
  // values (but same data type).
// log all three variables to the console.
  firstName = 'Noah';
  isHungry = false;
  numberOfPets = '3';

  if (isHungry === true) {
    answer = 'Yes';
  } else {
    answer = 'No';
  }

  console.log(`${firstName} asked the ${numberOfPets} ferrets if they are hungry. They responded with '${answer}, thank you.'`)

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;

console.log(healthySnacks + junkFoodSnacks); //this recognized that we are adding the values inside the variables, which are stored as number data types
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console 
// as you would expect? *Yes*
