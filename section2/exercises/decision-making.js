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
In lines 14 through 18 an if/else statement is executing. The if else statement is a conditional, in this
case it offers two conditions, if the first condition is met by being true, it stops and doesn't go any further. If the
first condition is false, the code continues to execute and moves on to check the second statement. In this case since
there are no more else...if statements the code checks the first statement if it is false, it executes the second
statement no matter what.

2. What variable has a new value assigned to it after the first if statement executes?
The bearClothing variable has a new value assigned to it after the first statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If the variable doorChoice is set to equal 3, bearClothing would still evaluate to "scarf", because the if/else statement
evaluates to "hat" if the doorChoice is 1, but for every other value it will execute the else statement.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between lines 27 and 35 an else...if statement is executing, which means if the value of the variable bearChoice is set
to equal 1, the if statement will evaluate to true and the function will stop executing and will print "You offer the bear your
scarf and the bear shows you a secret passage out!" If the value of bearChoice is 2, the function (bearChoice === 1) will evaluate
to false and will move on to check the second function. If the value is 3, the first block of code as false, it will then move on
the second block of code, when that evalutes as false it will move on to the third block of code. For every choice above 3
the code will print "You stay with the bear and become it's best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If the bearChoice variable is equal to 3, the final outcome will be "You run to the next room
It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
If variable doorChoice is changed to 1 and variable bearChoice is changed to equal 2, the final outcome is "You tell the bear
the hat is too small and it starts to cry!"

7. What is your favorite ending?
My favorite ending is the last block of code "You stay with the bear and become it's best friend!"
*/
