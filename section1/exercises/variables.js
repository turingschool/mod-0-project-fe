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
var name = 'Harry Potter must not return to Hogwarts!'
console.log(name);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.

var firstName = "My name is Morgan. ";
var isHungry = "I am very hungry. ";
var numberOfPets = "I have 1 cat.";
console.log(firstName + isHungry + numberOfPets)


// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.

  //I used a string data type to create the values of the variables.  I named the variables using only letters with camel
  //case to indicate that there are multiple words.
  //I wanted to create a concatenation for all 3 variables to come together on the terminal.
  //I added a space between the (.) and "" so there would be a space between sentenses in the terminal.



// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.

var myFirstName = firstName
var areHungry = isHungry
var howManyPets = numberOfPets

console.log(myFirstName + areHungry + howManyPets)



// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;

console.log(healthySnacks + junkFoodSnacks)



//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
