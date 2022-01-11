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

/* Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
The If/Else statement is checking a condition. In this case, it is checking if the value
assigned to doorChosen is equal to the Number 1. If that statement returns as true, then the
then bearClothing will print the String 'Scarf'.

2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If the variable doorChoice is equal to 3, the bearClothing value will be 'scarf'.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
These Else/If statements are checking if the value assigned to bearChoice is equal to either 1, 2, 3,
or anything else. If bearChoice is equal to Number 1, the condition resolves true,
and it will return the string "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!``.
If it returns false, it will continue to the next condition.
If bearChoice returns true when asked if bearChoice equals Number 2, the string
'You tell the bear the " + bearClothing + " is too small and it starts to cry!' will print.
If it returns false after this condition, it will continue to the next condition.
If bearChoice returns true when asked if bearChoice is equal to Number 3, the string
'You run as fast as you can into the next room. It's full of snakes!' will print.
If it returns false after this condition, the code will then run the final else statement, which
prints 'You stay with the bear and become its best friend!'.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The final outcome will be the String 'You run as fast as you can into the next room. It's full of snakes!'

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The final outcome of doorChoice equaling 1  and bearChoice equaling two is the String
'You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
My favorite ending if making bearChoice equal to 5, so then the final outcome
is the String 'You stay with the bear and become its best friend!'*/
