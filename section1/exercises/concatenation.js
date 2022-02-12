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

console.log("My zoo has " + numberOfCreatures + " " + creatures + "!")

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here:
/*
As a result of line 22, the console log will display a concatenation of variables as a string.
The reasons it will display in the console log as a string are as follows:
Although one of the variables is a number, it is sandwiched between other variables that are strings.
JavaScript has a feature known as type coercion that converts numbers into strings when they are connected together.
*/

// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log("The " + speedy + " jumped over the " + slowPoke);

// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables
slowPoke = "tortoise";
speedy = "hare";

console.log ("In a predictable result, the " + slowPoke + " beat the " + speedy + "!");

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.
var decade = 10
var school = "Thoms Jefferson High School"
var position = "Newspaper Staff Manager"

console.log("I was the " + position + " at " + school + " for " + decade + " years.")

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? You should be doing this by now, and getting into the habit of it.

// Yes, everything ran as expected.
