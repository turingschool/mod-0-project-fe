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
If door 1 is chosen then condition one is true and "hat" will run. If door 2 is chosen, then 1 is false and condition 2 will
 execute "scarf".
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
If you choose "1" then condition1 is true and "if" is executed. If 2 is chosen, condition 1 is false and condition 2 is true
so elseif 2 is executed: "is too small and it starts to cry". If 3 is chosen, conditions 1 & 2 are false and condition3 is true
so elseif 3 is executed: "You run as fast as you can...". If any other number is chosen, else is executed: "You stay with the
bear...".
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The if statement becomes bearChoice===3 and the final outcome is "You offer the bear your + bearClothing + and the bear shows
you a secret passsage out!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
*/doorChoice=2, bearChoice=1
