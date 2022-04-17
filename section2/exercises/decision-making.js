/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 4;

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

   Lines 14 through 18 contain a conditonal statement. First JavaScript will check the if statement. The peramiters of the if statement are that the element doorChoice are exactly equal to 1. If that if statemt evaluates to true the conditon will be met and the code block within it will run. The code within the if statement's code block sets bearClothing's value to "hat". If the if statement returns false then the else statement will execute. The else statement's code block sets bearClothing to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

  bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

  The value of bearClothing will be that contained in the else statement's code block, "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Lines 27 - 35 contain a conditonal statement that has one if statement, two else if statements and an else statement. Each of these has a code block contaning a string. The if statement and the first else if statement's strings contain a concantenation. Each statemnt, besides else, has peramiters that check to see if bearChoice is exactly equal to a number. JavaScript will first run the if statement and if it is true it's code block will exicute. If it's false JavaScript will run the first else if statement. If it is true, it's code block will execute, if false JavaScript will check the next else if statement. If that is true, it's code block will run. If it is false the code block in the else statement will run.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

  "You run as fast as you can into the next room. It's full of snakes"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the beat the hat is too small and it starts to cry!"

7. What is your favorite ending?

"You stay with the bear and become it's best friend!"

*/
