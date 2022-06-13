/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/concatenation.js`
*/

// EXAMPLE: Write code that combines the variables below into another string:
var firstName = "Ron";// I changed this variable to be more descriptive
var team = "Chudley Cannons";

console.log("The " + team + " are " + firstName + "'s favorite Quidditch team");
//a change to the variable name needs to update everywhere else it is used

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";

console.log("My zoo has " + numberOfCreatures + " " + creatures + "!"); //this uses concatenation

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here: String, because this is a combination of letters,
// numbers, and characters that are surrounded by quotation marks being joined together.

// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log("The " + speedy + " jumped over the " + slowPoke); //I needed to add space before and after the strings

// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

console.log("In a predictable result, the " + slowPoke + " beat the " + speedy + "!")

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what 
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.
var petName = "Lyra";
var typeOfAnimal = "calico ferret";
var numberOfHours = 16;

console.log(petName + " is a " + typeOfAnimal + " that enjoys sleeping for " + numberOfHours + " hours every day.")
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console 
  // as you would expect? You should be doing this by now, and getting into the habit of it. *Yes*
