/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/concatenation.js`
*/

// EXAMPLE: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log("The " + team + " are " + name + "'s favorite Quidditch team");

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";

console.log("My zoo has " + numberOfCreatures + " " + creatures + "!");

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here:
// "My zoo has 7 unicorns." Is the string that will be logged. That is because numberofCreatures has been defined as 7, and the creatures have been assigned the value of unicorn. The text surrounding these values will save this as a string of combined variables.

// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";
console.log("The " + speedy + " jumped over the " + slowPoke + "");

// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

var slowPoke = "tortoise";
var speedy = "hare";
console.log("In a predictable result, the " + slowPoke + " beat the " + speedy + "!");

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.
var name = "Macbeth";
var flavor = "chocolate";
var numberOfCakes = 5;
console.log("In a stunning show, " + name + " won the challenge when he ate " + numberOfCakes + " giant " + flavor + " cakes!");

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.
// Yup!
