/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

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

   The lines between 14 and 18 contain the conditions of an "if/else" structure.
   Line 15, is telling the computer to re-assign the "bearclothing" variable's value ("") to "hat", if line 14 is true.
   Line 15 also ends the "if" statement's part of the "if/else" structure.

   Line 16 is the start of the "else" statement and the curly brackets( } else {}) are there
   to seperate the "if" statement from the "else" statement.
   Line 17, is telling the computer to re-assign the "bearclothing" variable's value ("") to "scarf", if line 14 is false.
   Line 17 also ends the "else" statement's part of the "if/else" structure.

2. What variable has a new value assigned to it after the first if statement executes?

   The bearClothing variable has a new value assigned to it after the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

   The bearClothing value would be "scarf", if I changed the variable doorchoice to equal 3.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

   The lines between 27 and 35 contain the conditions that shall be executed IF line 27 is false.
   On lines 29 and 31, there are "else if" statements that ask if the "bearChoice" operands
   are STRICTLY equal to "2" or "3" respectively.
   If neither "else if" statements are true, the program will execute the "else" statement on line 33.
   So, in a nutshell, the program is checking each statement until one of the conditions are met (true).
   The outcome produced by this block of code is determined by the value assigned to the "bearChoice" variable on line 10.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

   The outcome would be, the second "else if" statement getting executed:
   "You enter a dark room with two doors. Do you go through #1 or #2?"
   "You see a bear putting on a hat"
   "It looks like that hat is too small for the bear, do you..."
   "3. Make a dash for the next room?"
   "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

   The variable doorchoice is already equal to 1. But, if I change the variable bearChoice to equal 2,
   the final outcome would be:
   "You enter a dark room with two doors. Do you go through #1 or #2?"
   "You see a bear putting on a hat.",
   "It looks like that hat is too small for the bear, do you...",
   "2. Point it out to the bear?"
   "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
   My favorite ending is the original ending.
*/
