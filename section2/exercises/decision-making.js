/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
In this section, an if/else conditional statement is being used. One set of code stating "hat" will run if 1 is input as the answer,
but another set of code stating "scarf" will run should the input be anything other than 1.
2. What variable has a new value assigned to it after the first if statement executes?
The variable with a new value assigned to it is bearClothing.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If variable doorChoice = 3, then "scarf" would be the bearClothing value.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
In this section, if/else conditional statements are being used. There are 4 options of sets of code that can be run depending on what choice is selected
in the message logged from lines 23-25.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If variable bearChoice = 3, then the final outcome will run, "You run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
If variable doorChoice = 1 and variable bearChoice = 2, then the final outcome will be, "You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
My favorite ending is "You say with the bear and become its best friend!"
*/
