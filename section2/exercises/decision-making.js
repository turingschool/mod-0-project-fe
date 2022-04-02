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

On line 14, an if statement checks to see whether the value of the variable doorChoice is strictly equal to 1. It is, so we enter the code block and assign the variable bearClothing a value of the string hat.
Then we follow with an else statement, which does not execute because the if statement resolved successfully. If it had executed, it would have reassigned bearClothing to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

Scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

We open an if statement which checks whether the value of the variable bearChoice is strictly equal to the number 1. If it is, the code block executes, and logs a dynamic string, composed using string concatenation which inserts the variable whose value was determined on line 16, to the console.
Two else if statements follow, which check whether the value of bearChoice is strictly equal to the number 2 or 3, respectively, which log different strings to the console if executed. In this case, they are not executed, because the initial if statement resolved successfully.
Finally, there is an else statement, which would only execute if none of the previous if or else if conditions were met.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry"

7. What is your favorite ending?

The else clause, where you become the bear's best friend!
*/
