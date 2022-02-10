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

  Between lines 14 and 18, there is an if...else statement. The statement checks the condition
  (if doorChoice is equal to 1 or not). If the condition is true, then the code within the curly brackets will
  execute, and bearClothing will be assigned the value of "hat". However, if the condition is false,
  the if statement's code will be skipped. The else statement's code will execute, and bearClothing will be
  assisgned the value of "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
  The variable bearClothing is reassigned. It previously had an "empty" value (" "), then this is reassigned based on the
  door the user selects.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  In that case, if statement will not be equal to three, so it will evaluate as false and the code in the curly brackets won't run.
  Then, the else statement would execute as there are no other conditions to be evaluated. This would assign "scarf" as the new value of bearClothing.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  This is an if...else statement. It has an if statement, a couple of else if statements with different
  conditions, and finally an else statement that will be exectued if none of the other conditions are met.

  In the first if statement, the condition evaluates if bearChoice is equal to 1. If it is, the code executes
  and console displays the concatinated code within the curly brackets. The statement is complete.

  If bearchoice is NOT equal to 1, then the next else if condition is evaluated. If bearChoice is equal
  to 2, the else if statement executes, the console displays the message, and the statement is complete.

  If bearChoice is NOT equal to 2, then the second else if condition is evaluated (is bearChoice equal to 3?).
  If this is true, the code executes and the message displays in the console. If not, the else statement will be run.
  There is no condition to be met for this else statement to execute code. It will run regardless
  since no other conditions have been met. I like to think of an else statement as last resort code.


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  The second else if statement will execute.
  The console will display, "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
   The console will display "You tell the bear the hat is too small and it starts to cry!" How sad!

7. What is your favorite ending?

My favorite ending is the one where doorChoice equals 1, and bearChoice equals 1. Bears in hats are cute! Plus if I get out through
the secret passageway, maybe I can visit the bear another time. I'll bring berries and honey as a sign of good will.
*/
