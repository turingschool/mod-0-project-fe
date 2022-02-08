/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 4;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 3) {
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
This is an if..else statement. It is reassigning bearClothing based on the value of doorChoice.
If this condition is true, it will execute the first set of code: bearClothing = "hat"
If this condition is false and doorChoice does not strictly equal 1, it will execute the second set of code: bearClothing = "scarf"

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
This is an if statement that evaluates the value of bearChoice and logs specific text to the console depending on which condition is met.
Ihe first condition being evaluated on line 27 is if bearChoice strictly equals 1, if this is true print out the line "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!"
If the first condition is false, then the second condition on line 29 evaluates if bearChoice strictly equals 2, if this is true print out the line "You tell the bear the " + bearClothing + " is too small and it starts to cry!"
If the first and second conditions are false, then the third condition on line 31 evaluates if bearChoice strictly equals 3, if this is true print out the line "You run as fast as you can into the next room. It's full of snakes!"
If none of the above conditions evaluate to true, the block of code on lines 33 & 34 will be executed and will print out the line "You stay with the bear and become it's best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You tell the bear the scarf is too small and it starts to cry!

7. What is your favorite ending?
You stay with the bear and become it's best friend!
*/
