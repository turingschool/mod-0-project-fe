/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 8;
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
//
/*

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
*/
console.log("1. Between lines 14 and 18, the block code creates a conditional statement which controls the subsequent conditional instructions based on the value indicated in line 8 with the rest of the code.");
console.log("Specifically, this line of code states that when the doorChoice variable is exactly equal to 1, then the execution will ask the following:");
console.log("Is the doorChoice value exactly equal to the value 1? If it is exactly equal to 1, then you offer the bear your hat... aka it corresponds with any line that allows the code to insert the value of the bearClothing such as 20, 21, 28, and or 30.");
console.log("If the value of the bearChoice is true or does equal 1, then it corresponds with lines which include bearClothing within the code.");
console.log("If the doorChoice is anything other than the value to the left of the operation in line 14, then it will correspond with lines 16 and 17 and insert the else option to insert the bearClothing as scarf in the code which ask for bearClothing values");
/*
2. What variable has a new value assigned to it after the first if statement executes?
*/
 console.log("2. The bearClothing variable has a new value assigned to it after the first if statement executes.");
 /*
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
*/
console.log("3. If you change the variable doorChoice equal to 3, then the bearClothing value changes to scarf instead of hat.");
/*
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
*/
console.log("4. Between lines 27 and 35, the block code is creating another conditional for the code that responds with an output reflecting line 28 if the bearChoice is exactly equal to the value 1.");
console.log("If we change the variable bearChoice to a value of 2, then line 30 will output -- likewise with the value of 3 being responsive to line 32. If the value is changed to anything else, then line 34 will be the output.");
/*
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
*/
console.log("5. If you change the variable to equal 3, the outcome will be line 32 stating that you run as fast as you can into the next room that is full of snakes.");
/*
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
*/
console.log("6. The outcome will be:");
console.log("You enter a dark room with two doors. Do you go through #1 or #2?");
console.log(" You see a bear putting on a hat");
console.log("It looks like that hat is too small for the bear, do you...");
console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");
console.log("You tell the bear the hat is too small and it starts to cry!");
/*
7. What is your favorite ending?
*/
console.log("7. You offer the bear your scarf and the bear shows you a secret passage out!")
