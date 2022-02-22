/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
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
A condition is being tested, if the doorChoice value is exactly equal to the integer 1 that means
the value of bearClothing is assigned a hat. If the evaluation of the value doorChoice returns false then
bearClothing's value is a scarf.
2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing goes from an empty string to either a hat or a scarf.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Because any integer than 1 would return false, the value would be "scarf".
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
A set of conditions are being checked, in the first evaluation the code is checking if bearChoice has a value of 1
if it does it returns true and the console.log associated runs.  If not it returns false and moves down to then
next statement of else if which then tests is bearChoice is 2 exactly, if not and again moves to the next else if, once
all the evaluations with exact integer comparisons have been run through, and if they returned false then it will
run the console.log for any other integer other then 1,2,3 for bearChoices' value.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You will end up running the console log that says "You run as fast as you can into the next room. It's full of snakes!"  D:

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You run the log that says "You tell the bear the hat is too small and it starts to cry!" oh no!
7. What is your favorite ending?
I like to offer the bear my own scarf C: It needs it for warmth today.
*/
