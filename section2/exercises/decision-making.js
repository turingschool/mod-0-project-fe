/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
// var doorChoice = 2;
// var doorChoice = 3;
var bearClothing = "";
var bearChoice = 1;
// var bearChoice = 2;
// var bearChoice = 3;
// var bearChoice = 99;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) { // line '14'
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}                       // line '18'

console.log("You see a bear putting on a " + bearClothing);                                   // line '27'
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
}                                                                                           // line '35'

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
We're using an if-else statement to determine the value we assign the bearClothing variable.
If doorChoice === 1 evaluates to true, then we execute whatever is between the brackets for the if statement, which
in this case, is setting bearClothing to the string value "hat".
If doorChoice === 1 evalutes to false, then we execute whatever lines of code are between the brackets after the 'else', which
in this case, is setting bearClothing to the string value "scarf".
In short, if the doorChoice value is 1, change bearClothing value to "hat" - otherwise bearClothing is set to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
bearClothing would be assigned the string value "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
We have an if-else if-else block. We're checking the value of bearChoice to see if it's between 1 and 3, otherwise we default to executing the else block.
We execute the if statement if bearChoice has a number value of 1, otherwise we go to the first else if statement to see if bearChoice has a number value
of 2. If this is false, then we move on to the second else-if statement to see if bearChoice has a number value of 3. If this is not the case, then we
execute whatever is between the else statement block.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
First the initial lines of code will execute.
Then the doorChoice (lines '14'-'18') if-else block would execute and output the corresponding codeblock based off the value of doorChoice.
Then the subsequent lines of code after the initial if-else block would execute.
Finally, the else if statement for bearChoice === 3 would execute whatever is between its brackets.

In this case, that line would output:
"You run as fast as you can into the next room. It's full of snakes!" to the console.

The complete output (given the default variable assignment of door choice 1):
  You enter a dark room with two doors. Do you go through #1 or #2?
  You see a bear putting on a hat
  It looks like that hat is too small for the bear, do you...
  1. Offer your own to the bear?
  2. Point it out to the bear?
  3. Make a dash for the next room?
  You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The complete output would be:
  You enter a dark room with two doors. Do you go through #1 or #2?
  You see a bear putting on a hat
  It looks like that hat is too small for the bear, do you...
  1. Offer your own to the bear?
  2. Point it out to the bear?
  3. Make a dash for the next room?
  You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
My favorite ending is when you assign doorChoice and bearChoice a value of 2, you get the following:
  You enter a dark room with two doors. Do you go through #1 or #2?
  You see a bear putting on a scarf
  It looks like that scarf is too small for the bear, do you...
  1. Offer your own to the bear?
  2. Point it out to the bear?
  3. Make a dash for the next room?
  You tell the bear the scarf is too small and it starts to cry!

When is a scarf ever too small!?! I guess when it's a scarf for ants...
*/
