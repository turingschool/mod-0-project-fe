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

These lines are saying if the variable doorChoice is strictly equal to 1, then the variable bearClothing is assigned the value "hat"
However, if the value is not strictly equal to 1, the value of bearClothing will be "scarf"
Since we have already assigned doorChoice the value 1, the first conditional will be true, and bearClothing will be assigned "hat"

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

bearClothing value would be "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

If the value of the variable bearChoice is strictly equal to 1,
then the statement
("You offer the bear your" + the value of bearClothing "and the bear shows you a secret passage out!") will log to the console
If we kept doorChoice = 1, it would log to the console:
"You offer the bear your hat and the bear shows you a secret passage out!"
If doorChoice is assigned a value not strictly equal to 1 it would log:
"You offer the bear your scarf and the bear shows you a secret passage out!"

If the value of bearChoice does not strictly equal one, the code will check if bearChoice strictly equals 2.
If bearChoice strictly equals 2, it will log to the console "You tell the bear the" + value of bearClothing + "is too small and it starts to cry!"
Again, if doorChoice = 1, it will log
"You tell the bear the hat is too small and it starts to cry!"
if doorChoice does not strictly equal 1 then it will log,
"You tell the bear the scarf is too small and it starts to cry!

If the value of bearChoice does not strictly equal 1 or 2, then the code will check if bearChoice strictly equals 3
If it does equal 3, then it will log,
"You run as fast as you can into the next room. It's full of snakes!"

If the value of bearChoice does not equal 1, 2 or 3, the code will log to the console:
"You stay with the bear and become it's best friend"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
It will log to the console: "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
It will log to the console, you tell the bear the hat is too small and it starts to cry!
7. What is your favorite ending?
If none of the conditions of bearChoice are met, "You stay with the bear and become it's best friend!"
*/
