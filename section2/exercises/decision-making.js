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
In lines 14-18 an `if` and `else` statement is being run. The outcome of which depends on what door you choose.
If you chose door 1, then a bear with a hat will be behind the door. If you chose anything but 1, a bear
with a scarf will be behind the door.

2. What variable has a new value assigned to it after the first if statement executes?
`bearClothing`'s value changes based on `doorChoice`.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
`bearClothing` would be "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
In lines 27-35 a series of `else if` statements are being run to see what condition is met based on `bearChoice`.
If you chose 1 then you offer the bear your clothing. If not, then the code checks if you chose 2 - if you did, then
you tell the bear their clothing is too small. If not, then we move on to if you chose 3 - if you did, then
you dash to the next door. And if none of these criteria are met, you stay in the room with the bear.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If you changed the variable to 3, then "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The final outcome would be "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
Staying in the room with the bear and becoming best friends. Who wouldnt want a bear that wears hats (or scarfs) as a friend?
*/
