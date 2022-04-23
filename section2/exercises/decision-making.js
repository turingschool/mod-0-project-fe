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
-This is an if/else structure that prints "hat" if the condition of the variable doorChoice being strictly equal to 1 is evaluated as true.
-If the user sets the value of the variable doorChoice to 1 it will change the value of the variable bearClothing to "hat", if not then it changes the value to "scarf".
2. What variable has a new value assigned to it after the first if statement executes?
-bearClothing has a new value assigned to it after the first if statement executes.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
-the bearClothing value would be "scarf"
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
-Between lines 27 and 35 is an if/else if statement.
-The proceeding console.log statements give the user 3 choices, user changes he value of the variable "bearChoice" which determines which concatenation is printed.
-lines 27-35 contain concatenations of the value of bearClothing in separate strings that print different statements depending on the users choice.
-The console continues processing else if statements until one of them returns a value of "true", at which point that specific concatenation is printed
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
"I like selecting any number besides 1, 2, or 3 for bearChoice and getting to be the bear's best friend!"
*/
