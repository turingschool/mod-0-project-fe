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

//Questions

//1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
console.log("1.  Lines 14-18 are a conditional statement using If...Else keywords.");
console.log("The statement reads that if the doorChoice is 2, then the bearClothing will be a hat.");
console.log("If the doorChoice is not 2, then the bearClothing will be a scarf.");

//2. What variable has a new value assigned to it after the first if statement executes?
console.log("2.  bearClothing has a new value assigned to it after the first statement executes. The new value is 'hat'.");

//3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
console.log("3.  If doorChoice were equal to 3, then bearClothing would be a scarf because the condition1 would not have been met, so the 'else' code block executes.")

//4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
console.log("4.  Lines 27-35 are a conditional statement using If..else if..else keywords.");
console.log("If bearChoice is assigned the value 1, and 1 exactly equals 1, then the first code block would (and did) run.");

//5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
console.log("5.  If bearChoice is equal to 3, then 3 does not exactly equal 1.");
console.log("So condition1 is not met, then it moves to condition2. If 3 exactly equals 2, then the second code block would run.");
console.log("It does not meet that condition, so then moves to condition3: if 3 exactly equals 3, which it does, so that code block is executed.");

//6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
console.log("6.  You tell the bear the hat is too small and it starts to cry!");
//7. What is your favorite ending?
console.log("7.  My favorite ending the 'else' statement: 'You stay with the bear and become its best friend!''");
