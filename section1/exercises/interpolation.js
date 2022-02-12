/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/interpolation.js`
*/

// EXAMPLE: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log(`The ${team} are ${name}'s favorite Quidditch team.`);

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";

console.log( `My zoo has ${numberOfCreatures} ${creatures}!`);

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here:
/*
Line 22 is using an interpolation to insert the numberOfCreatures and creatures values into the sentence
that will appear in the console log, which appears as a string.
The use of backticks (`) at the beginning and end of the sentence in addition to the use of this syntax ${variable_name}
is what created this interpolated sentence.Once again similarly, to concatenation, when inserting a number value
into an extended string the number gets converted into part of the string.
*/
// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log(`The ${speedy} jumped over the ${slowPoke}`);

// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables
slowPoke = "tortoise";
speedy = "hare";

console.log(`In a predictable result, the ${slowPoke} beat the ${speedy}!`);

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
// you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
// Then, log out ONE sentence that incorporates all THREE variables uisng interpolation.
var trilogy = 3
var movieTitle = "Dark Knight"
var dirctor = "Christopher Nolan"

console.log(`${dirctor} directed ${trilogy} ${movieTitle} films.`);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? You should be doing this by now, and getting into the habit of it.

// Yes, everything ran as expected.
