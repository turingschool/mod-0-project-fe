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

lines 14-18 are a set of instrutions related to the conditions that are within the parenthesis.
line 14 and 15 says if the var doorChoice is strictly equal to 1 assign the string "hat" to the variable bearClothing.
like 16 and 17 says else (kind of like otherwise (if door choice is 1 assign "hat" ro bearClothing otherwise (else)) assign the string "scarf" to the variable "bearClothing"
When the code runs, the value put in for doorChoice (1 or any other number (even though the log only prints the directons to either pick door #1 or door #2)) will then affect the string that prints in the console.log which wuld be either "hat" || "scarf"

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
the value would still be "scarf" becasue the if/else statements else portion runs if the doorChice is not strictly equal to one.  In otherwords, if you pick any door that is not 1, bear will always be putting on a scarf
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
lines 27-35 are a set of instrutions related to the conditions that are within the parenthesis.
if bearChoice is strictly equal to 1 it will print the message stored in the console/log about a secret passage out.
else if (otherwise) bearChoice is strcitly equal to 2 then it will print the string about the bear crying.
else if (otherwise) bearChoice is strcitly equal to 3 then it will print the string about the room full of snakes

(if none of these conditions are met (bearChoice being strictly equal to 1,2, or 3)) else print You stay with the bear and become it's best friend!

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You see bear putting on a hat and you point it out to them and they start to cry.

7. What is your favorite ending?

the else statement, of course.

*/
