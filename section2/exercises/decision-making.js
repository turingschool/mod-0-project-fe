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
+ In the lines of code 14 through 18 it is using an (if) statement which evaluates (or) checks a condition.
In this case the two conditions present are strings, connected to to the integer of a varaible doorChoice.
If the variable doorChoice is 1, the if statement prompts the varaible bearClothing string "hat.
All other intergers will prompt bearClothing string "Scarf."
2. What variable has a new value assigned to it after the first if statement executes?
+ bearClothing has a new value assigned to it after the first statement executes.
It's string changes between hat and scarf depending upon whether the integer is 1 or not.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
+ Before I even put it in I'm going to assume that everything besides 1 in this if statement will produce option 2.
Meaning the value only changes between the two options, the integer 1 being hat and EVERYTHING else
being scarf.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
+ in lines 27 through 35 of the code, the varaible bearChoice is put in an If, else if, and else statement.
The condition of what is beign prompted changes depending on the value of the varaible.
Here the value only has 4 conditions in which a response will be prompted in the terminal.
If the variable bearChoice === (strictly equals) the value of a specific integer (number) it wil prompt
a string (statement.) If no integer present strictly equals the varaible the else statement prompts the condition
"You stay with the bear and become it's best friend".
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
+ When changing the value of the varaible bearChoice to the integer 3, the condition of the else if statement
(bearChoce === 3) becomes true. It prompts the repsonse "You run as fast as you can into the next room.
It's full of snakes."
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
+ When changing the variable doorChoice to the value 1, the string provided prompts hat. The statement provided-
from the condition becomes:
"You see a bear putting on a hat. It looks like that hat is too small for the bear, do you... "
When the varaible for the bearChoice changes it's value to 2, the string prompts:
"You tell the bear the hat is too small and it starts to cry."
7. What is your favorite ending?
+ Not to sound mean but I think that 2 was my favorite ending. Not that I'm a jerk or anything, but I just don't like bears...
or Cats..
*/
