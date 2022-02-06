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
Line 14 is setting up an if...else statement that's saying "If the user's door choice is 1, run the next line of code."
Line 15 is the code that runs if line 14's conditional statements evaluates true. This code reassigns the variable bearClothing to the string "hat"
Line 16 sets up what happens if line 14's conditional statement evaluates false (if the user picked anything other than door 1).
Line 17 reassigns the variable bearClothing to the string "scarf"
Line 18's closing curly brace is closing out the if...else statement that was opened with the curly brace in line 14.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Scarf. The conditional statement was only checking if the variable doorChoice had a value of exactly 1, and if it was ANYTHING ELSE, the else part of this code would run.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Line 27 is setting up an else...if statement that's saying "If the user's choice after Line 21 was exactly 1, run the next line of code in the curly braces."
Line 28 is giving the code to be ran when line 27's conditional statement evaluated true. This code logs the string "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!" to the console with the value of bearClothing assigned to whatever the user picked earlier.
Line 29 is saying "If the user's bearChoice variable wasn't assigned the exact value of 1, check if the value of the variable is 2, if it is, run the next line of code."
Line 30 is the code that runs if line 29's conditional statement evaluates true. This code logs the string "You tell the bear the " + bearClothing + " is too small and it starts to cry!" to the console, with the value of bearClothing assigned to whatever the user picked earlier.
Line 31 is saying "If the user's bearChoice variable wasn't assigned the exact value of 2, check if the value of the variable is 3, if it is, run the next line of code."
Line 32 is the code that runs if line 29's conditional statement evaluates true. This code logs the string "You run as fast as you can into the next room. It's full of snakes!" to the console.
Line 33 is setting up the final part of this statement that will run the next line of code if none of the other conditions evaluated true (the bearChoice variable was assigned anything other than the values of 1, 2, or 3).
Line 34 is the code that runs if none of the conditions in the statement were true. This code logs the string "You stay with the bear and become it's best friend!" to the console.
Line 35 is the closing curly brace to the one opened in line 27.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The code in line 32 would run, logging the string "You run as fast as you can into the next room. It's full of snakes!" to the console.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The variable bearClothing would be assigned the value of the string "hat", and the code in line 30 would run, logging the string "You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
My favorite ending is the one in line 34. I wouldn't mind having a bear best friend. I mean if it works for Christopher Robin, I'm sure it'll work for me! 
*/
