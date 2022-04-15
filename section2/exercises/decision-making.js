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
//Lines 14 - 18 include an if statement.
//If door choice is 1 and true then the bear will wear a "hat" else and false the bear will wear a "scarf"
2. What variable has a new value assigned to it after the first if statement executes?
//bearClothing has a vaule re-assignment of "scarf" on line 17.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//The bear clothing would remain false, else would be executed and "scarf" will run.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
//Lines 27 - 35 include an if/else statement.
//If the variable bearChoice is condition1 it is true and first block of code will execute.
//If the variable bearChoice is condition2, then condition1 evaluates as false and cond2 will evaulate as true.
//If the variable bearChoice is cond.3, then cond.1 and cond.2 will evaluate to false & cond.3 will evaluate to true.
//Else, if non of the cond. are met they will evaluate to false. Line 34. block of code wil execute.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//"You will run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//The variable doorChoice is 1 and the variable bear clothing will execute "hat."
//The variable bearChoice is 2 "you point it out to the bear." Then line 30 code block will execute. . .
//"You tell the bear the "hat" is too small and it starts to cry! will run.
7. What is your favorite ending?
*/
//My favorite ending is variable doorChoice 2, and the variable bearChoice 1
var doorChoice = 2;
var bearClothing = "";
var bearChoice = 1;

//You offer the bear your hat and the bear shows you a secret passage out!
