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

This code block is conditional and is using an if-else statement to give instructions.
If doorChoice is strictly equal to 1, then bearClothing would be assigned hat.
If doorChoice is not strictly equal to 1, then bearClothing is assigned scarf.

2. What variable has a new value assigned to it after the first if statement executes?

Since doorChoice is assigned 1, the if statement will assign bearClothing a new value of hat.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

Scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

This sequence prints the story to the console after going through all of the previous conditionals,
initially determining bearClothing, then offering three different choices one of which will be printed to the console.
By changing the value of bearChoice, the output from this code block will vary.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

While doorChoice === 1 is good, I enjoy the premise of doorChoice != 1,2,3. Who wouldn't want such a dapper animal companion!?
*/
