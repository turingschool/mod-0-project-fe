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
  bearClothing = "fedora";
} else {
  bearClothing = "Don't Tread On Me shirt";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the seemingly Libertarian bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you its copy of The Fountainhead!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it asks you to trade articles of clothing!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of even more bears!");
} else {
  console.log("You stay with the bear and become its dinner!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

//An if else statement is used to determine which article of clothing the bear is
//wearing based on which door is chosen. It references the value assigned to the variable doorChoice,
if doorChoice is 1 it assigns the first option, otherwise it goes with the second.

2. What variable has a new value assigned to it after the first if statement executes?

//bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

//"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

//An else if chain contingent on the number assigned to the variable "bearChoice"
//It checks for 1, then it executes the first option, if not that, it checks for 2, if not that, it checks for 3,
//if the value is literally anything other than 1, 2 or 3, it selects the fourth option.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

//"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

//"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

//The one I added when I was messing around with the variables and such:
//"You run as fast as you can into the next room. It's full of even more bears!"

*/
