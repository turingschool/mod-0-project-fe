/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 0;

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
  Line 14 is setting up the if/else statement by questioning(===) which doorChoice is selected and
  determing that value(1) to be true.
  Line 15 is assigning(=) the bearClothing variable to a "hat" value if doorChoice remains true.
  Line 16-18 is setting up our else statement by assigning the alternative value to bearClothing
  as "scarf" if doorChoice is not true.

2. What variable has a new value assigned to it after the first if statement executes?
  bearClothing is assigned the "scarf" value if the first 'if' statement is no longer true.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  If we assign doorchoice = 3, the bearClothing value would be "hat"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  Lines 27-28 are providing a statement if the assigned bearChoice value is "1." If so it determines this value to be true and provides the "passage" console.log outcome.
  Lines 29-30 are providing a statement if bearChoice value is not "1" but instead "2." The syntax then determines if we can continue to make
  this statement true with the "2" value. If so providing the "crying" console.log outcome.
  Lines 31-32 are continuing the trend by providing a statement if the bearChoice value is not "1 or 2" but instead "3." The syntax then considers the "3" value to be
  a true statement resulting in the "snakes!" console.log outcome.
  Lines 33-35 are closing out the syntax with the "best friend!" console.log outcome only displaying if the bearChoice value is anything but "1, 2, or 3."

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  The story concluding with the "You run as fast as you can into the next room. It's full of snakes!" outcome.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  You enter a dark room with two doors. Do you go through #1 or #2?
  You see a bear putting on a hat
  It looks like that hat is too small for the bear, do you...
  1. Offer your own to the bear?
  2. Point it out to the bear?
  3. Make a dash for the next room?
  You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 0;

You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You stay with the bear and become it's best friend!

*/
