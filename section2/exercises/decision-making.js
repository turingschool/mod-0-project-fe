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
The user is presented with two options on line 12: door 1 or 2. Line 14 begins the if conditional statement.
If the user chooses door 1, the if statement on line 14 executes as true and the bearClothing variable for hat executes.
If the user does not choose door 1, if statement on line 14 executes as false.
The computer then runs the else statement on line 16 which executes as true and the bearClothing variable for scarf executes

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Changing the variable value doorChoice on line 8 results in the bearClothing value executing as scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
If the user selects bearChoice 1, the if statement on line 28 executes as true and is displayed to the user.
If the user selects bearChoice 2, the else if statement on line 30 executes as true and is displayed to the user.
If the user selects bearChoice 3, the else is statement on line 32 executies as true and is displayed to the user.
If the user does not select bearChoice 1, 2, or 3, the else statement on line 34 executes as true and is displayed to the user.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You stay with the bear and become its best friend!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
You offer the bear your hat and the bear shows you a secret passage out!
*/
