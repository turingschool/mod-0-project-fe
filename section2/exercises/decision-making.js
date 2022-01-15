/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 0;
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
  It is a "if else" statement. If the condition on line 14 (doorChoice === 1)returns true execute the statements
between the first set of curly brackets (bearClothing = "hat") on line 15. Otherwise on line 16 (doorChoice != "1"),
execute the statements between the second set of curly brackets(bearClothing = "scarf")on line 17.

2. What variable has a new value assigned to it after the first if statement executes?
 After the first if statement executes, "scarf"value has assigned.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
After changing the variable doorChoice to equal 3, the bearClothing  would be "scarf" .

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
It is a "else if" statement. If the condition on line 27 (bearChoice === 1) evaulates to true, the block of code on line 28 executes.
If the condition on line 27 (bearChoice === 1) evaulates to false and if the condition on line 29 (bearChoice === 2)
evaulates to true, the block of code on line 30 executes. If the condition on line 27 and 29 evaulate to false and the condition
on line 31 evaulates to true , the block of code on line 32 executes. Before line 33, if none of the conditions are evaluated
to true, the block of code at line 34 is executed.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The block of code on line 32 executes. You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
If it is changed the variable doorChoice to equal 1, the block of code on line 15 executes. You see a bear putting on a hat.
If it is changed the variable bearChoice to equal 2, the block of code on line 30 executes.You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
If it is changed the variable bearChoice to equal 4, the block of code on line 34 executes.
You stay with the bear and become it's best friend!
*/
