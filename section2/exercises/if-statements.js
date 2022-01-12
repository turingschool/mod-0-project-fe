/*
In the exercises below, write your own code where indicated
to achieve the desired result.
One example is already completed. Your task is to complete
any remaining prompt.
Make sure to run the file with node in your command line.
*/


// EXAMPLE:Manipulate the variable 'weather' to see if you can print something other
  // than 'coat'.

var weather = 'snowy';
//var weather = 'icy';
////var weather = 'rainy';
//var weather = 'sunny';
// While working through this example, I would toggle which variable declaration is
  // commented in/out and run the program in node several times to observe the output.

if (weather === 'sunny') {
  console.log('sunscreen');
} else if (weather === 'rainy') {
  console.log('umbrella');
} else if (weather === 'snowy') {
  console.log('coat');
} else if (weather === 'icy') {
  console.log('yak traks');
} else {
  console.log('good to go!');
}

/*
YOU DO:
Using the dogAge variable defined below,
determine if a dog is a puppy (2 or younger),
an adult, or elderly (10 or older).
Log to the console the appropriate age range
(puppy, adult, elderly).
*/

var dogAge = 3;
// Write your conditional here
if (dogAge <= 2) {
  console.log('puppy');
} else if (dogAge < 10) {
  console.log('adult');
} else {
  console.log('elderly');
}


if (dogAge <= 2) {
  console.log('puppy');
} else if (dogAge < 10) {
  console.log('adult');
} else if (dogAge >= 10) {
  console.log('elderly');
}
// Is it bad practice to end an if/else conditional statement with else if? Directions stated to incorporate `dogAge>= 10` but it looks weird to write it that way.. I'll just do two of them to see what runs instead. More practice.
// They both print the same thing, one just looks clean and the other not as clean.

/*
YOU DO:
Using the numQuarters variable defined below, determine
if you have enough money to buy a gumball. A gumball costs
two quarters. Right now, the program will log
out both "I have enough money for a gumball" and
"I don't have enough money for a gumball". Write
a conditional statement that ONLY logs one or the
other.
You should be able to change num_quarters and achieve these outputs:
When numQuarters = 0, program should log "I don't have enough money for a gumball"
When numQuarters = 1, program should log "I don't have enough money for a gumball"
When numQuarters = 2, program should log "I have enough money for a gumball"
When numQuarters = 3, program should log "I have enough money for a gumball"
*/

var numQuarters = 0;


// Write your conditional here

if (numQuarters === 0) {
  console.log("I don't have enough money for a gumball");
} else {
  console.log("I have enough money for a gumball");
}

//console.log("I have enough money for a gumball");
//console.log("I don't have enough money for a gumball");


/*
YOU DO:
Using the variables defined below, determine if you have the
ingredients to make a pizza. A pizza requires at least two cups
of flour and sauce.
You should be able to change the variables to achieve the following outputs:
When cupsOfFlour = 1 and hasSauce = true, your program should log "I cannot make pizza";
When cupsOfFlour = 1 and hasSauce = false, your program should log "I cannot make pizza";
When cupsOfFlour = 2 and hasSauce = true, your program should log "I can make pizza";
When cupsOfFlour = 3 and hasSauce = true, your program should log "I can make pizza";
*/

var cupsOfFlour = 1;
var hasSauce = true;

// Write your conditional here

if ((cupsOfFlour === 1) && (hasSauce === true)) {
  console.log("I cannot make pizza");
} else if ((cupsOfFlour >= 2) && (hasSauce = true)) {
  console.log("I can make pizza");
} else {
  console.log("I cannot make pizza");
}


if (cupsOfFlour <= 2 && hasSauce = false) {
  console.log("I cannot make a pizza");
} else {
  console.log("I can make a pizza");
}


/* Mine included `&&` exclusively, I am going to make another version of this outside of these examples with the `||` I am not very comfortable using it yet. I am not sure it would be much help here outside of lines 113-115. I could have made both variables false and `console.log()` the I cannot string but it didn't make much sense in my head as I was doing this. I understand what the logical operator is doing/can do but exactly what it does is abstract during the time of me finishing this portion.

* A way to sum up what logical operators do is they allow us to check if multiple conditions are true!
*/




/*
For the last exercise, an ideal solution probably uses a logical operator.
Did yours? Do you know what a logical operator in JavaScript is? Google it to answer
for yourself!
*/
