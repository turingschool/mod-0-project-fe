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
// Your answer and explanation here: Sting data type will be logged. As line 22 contains both numbers and characters.

//Joined together a string (creatures) and a variable (numberOfCreatures) with a value of a string assigned to it in order to create a complete sentence.


// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":

var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log("The" + speedy + " " + "jumped over the" + " " + slowPoke);

// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

console.log("In a predictable result," + " " + "the" + " " + slowPoke + " " + "beat the" + " " + speedy + "!");

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.

var name = "Isac";
var collects = "Backwoods";
var inventory = 7;

console.log(name + " " + "really loves" + " " + collects + "," + " " + "he has at least" + " " + inventory + " " + "packs of them!");


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.

// Print log


Welcome to Node.js v17.8.0.
Type ".help" for more information.
> var numberOfCreatures = 7;
undefined
> var creatures = "unicorns";
undefined
>
> console.log("My zoo has " + numberOfCreatures + " " + creatures + "!")
My zoo has 7 unicorns!
undefined
>
> console.log("The" + speedy + "jumped over the" + slowpoke );
Uncaught ReferenceError: speedy is not defined
> var speedy = "quick red fox";
undefined
> var slowPoke = "lazy brown dog";
undefined
> console.log("The" + speedy + "jumped over the" + slowpoke );
Uncaught ReferenceError: slowpoke is not defined
> console.log(slowpoke);
Uncaught ReferenceError: slowpoke is not defined
> var name = "slowpoke";
undefined
> console.log(name);
slowpoke
undefined
> console.log("The" + speedy + "jumped over the" + slowpoke);
Uncaught ReferenceError: slowpoke is not defined
> console.log("The" + speedy + "jumped over the" + slowPoke);
Thequick red foxjumped over thelazy brown dog
undefined
> console.log("The" + speedy + "jumped over the" + " " + slowpoke);
Uncaught ReferenceError: slowpoke is not defined
> console.log("The" + speedy + "jumped over the" + " " + slowPoke);
Thequick red foxjumped over the lazy brown dog
undefined
> console.log("The" + speedy + " " + "jumped over the" + " " + slowPoke);
Thequick red fox jumped over the lazy brown dog
undefined
> slowPoke = "tortoise";
'tortoise'
> speedy = "hare";
'hare'
> console.log("In a predictable result," + " " + "the" + " " + slowPoke + " " + "the" + speedy);
In a predictable result, the tortoise thehare
undefined
> console.log("In a predictable result," + " " + "the" + " " + slowPoke + " " + "beat the" + " " + speedy);
In a predictable result, the tortoise beat the hare
undefined
> console.log("In a predictable result," + " " + "the" + " " + slowPoke + " " + "beat the" + " " + speedy + "!");
In a predictable result, the tortoise beat the hare!
undefined
>
> var name = "Isac";
undefined
> var collects = "Backwoods";
undefined
> var inventory = 7;
undefined
> console.log("Wow," + " " + name + " " + "really loves" + " " + collects + "!" + " " + "He has at least" + " " + inventory + " " + "packs of them!");
Wow, Isac really loves Backwoods! He has at least 7 packs of them!
undefined
> console.log(name + " " + "really loves" + " " + collects + "," + " " + "He has at least" + " " + inventory + " " + "packs of them!");
Isac really loves Backwoods, He has at least 7 packs of them!
