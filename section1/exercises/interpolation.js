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
// Your answer and explanation here:  String data type. Line cotains both numbers and characters


// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log(`The ${speedy} jumped over the ${slowPoke}`);
//Combines var `speedy` and var `slowPoke`

// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

console.log(`In a predictable result, the ${slowPoke} beat the ${speedy}!`); //Combines var `speedy` and var `slowPoke`

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables uisng interpolation.

  var name = "Isac";
  var cancer = "Backwoods";
  var inventory = 7;

  console.log(`Wow, ${name} really loves ${cancer}, he has at least ${inventory} packs`);

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.

  //Print log


  Welcome to Node.js v17.8.0.
Type ".help" for more information.
> var speedy = "quick red fox";
undefined
> var slowPoke = "lazy brown dog";
undefined
> console.log(`The ${speedy} jumped over the ${slowPoke}`;
console.log(`The ${speedy} jumped over the ${slowPoke}`;
                                                     ^^

Uncaught SyntaxError: missing ) after argument list
> console.log(`The ${speedy} jumped over the ${slowPoke}`); //Combines var `speedy` and var `slowPoke
The quick red fox jumped over the lazy brown dog
undefined
> console.log(`In a predictable result, the ${slowPoke} beat the ${speedy}!`); //Combines var `speedy` and var `slowPoke`
In a predictable result, the lazy brown dog beat the quick red fox!
undefined
> var name = "Isac";
undefined
>   var cancer = "Backwoods";
undefined
>   var inventory = 7;
undefined
> console.log(`Wow, ${name} really loves ${cancer}, he has at least ${inventory} packs`);
Wow, Isac really loves Backwoods, he has at least 7 packs
undefined
>
