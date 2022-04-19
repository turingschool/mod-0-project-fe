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
//"My zoo has 7 unicorns!" is a combination of Numeric Data and String Data.
//The value '7' is the sum of 'numberOfCreatures' therefore making it Numeric Data.
//The value 'unicorn' and '!' are String Data because they consist of letters and characters and are surrrounded by quotations.


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

console.log("In a predictable result, the " + slowPoke + " beat the " + speedy+"!") //reassigned the values

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.
var friend = "Dwight Schrute"; // best friend
var inventory = 3333456; // amount of beets grown annually
var vegetables = "beets🧅"; // produce harvested

console.log('My best friend '+friend+ ' grows '+inventory+ ' heirloom ' +vegetables+ ' per year.');

// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.
  //Of course!
