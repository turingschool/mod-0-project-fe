/*
This exercise file is a little different from the others you have seen so far. Read carefully!
// Run this in the terminal for output: node section2/exercises/decision-making.js
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
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
}   else {
    console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
Answer: If the variable doorChoice is stricly equal to 1 then the variable bearClothing will be assigned the string "hat"
if not it will be assigned the string "scarf" using the else keyword.

2. What variable has a new value assigned to it after the first if statement executes?
Answer: bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Answer: "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Answer: If variable bearChoice is stricly equal to 1 (thus evaluating true) then the first `console.log` string will be outputted.
If it evaluates false JavaScript will check the following else if. If this is true it will output the second `console.log` string.
If this evaluates false then it will continue on till it gets a true evaluation or reach the else keyword and output the final
`console.log` output.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
Answer: You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
Answer: You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
Answer: You stay with the bear and become it's best friend!
*/
