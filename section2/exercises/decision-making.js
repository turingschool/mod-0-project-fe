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
If the value for the varibale doorChoice = 1 then the result for bearClothing will be "hat", otherwise
the if else statement will output "scarf" for bearClothing.
2. What variable has a new value assigned to it after the first if statement executes?
After the first if statement executes, bearClothing has a new value assigned to it. Depending on
the door choice it chages the value.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The bearClothing variable would have a value of "scarf". This value would be the same as if doorChoice was "2" or
any number greater. The if statment only applies to varible doorChoice at a value of "1" and ever other
number greater than or equal to "2" is influenced by the else if.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between lines 27-35 the variable bearChoice determines what if else statment is logged. There are 4 options to log
depending on the value of bearChoice. bearChoice 1,2,3 will log the one of the first 3 if else statements.
All number other than 1,2,3 will log the last if else statement.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The fianl log result for bearChoice "3" will be "You run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the
final outcome be?The final log result for the input variable values doorChoice = "1" and bearChoice = "2"
will be: "You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
Naturally bearChoice = Number > 3: "YOu stay with the bear and become it's best friend!" Who doesnt want a bear
as a best freind. Think of all the cool bear things you could do.
*/
