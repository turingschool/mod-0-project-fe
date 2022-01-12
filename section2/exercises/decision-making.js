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
* We have made a conditional statement. Line 14 is stating when `doorChoice` is strictly equal to `1` assign the value of `hat` to `bearClothing` otherwise the value assigned will be `scarf`.

2. What variable has a new value assigned to it after the first if statement executes?
* bearClothing is the only variable being reassigned, it will either be `hat` or `scarf` and that is dependent upon if `doorChoice` is stricly equal to `1`.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
* The variable `doorChoice` being assigned the value of strictly equal to 3, would cause the block of code on line 21 to run. Using the concatenation method, `bearClothing` would be placed into the string reading "It looks like that scarf is too small for the bear, do you..."

* The variable `doorChoice` being strictly assigned to 3 would only impact which line of code runes from the final conditional statement of lines 27-35. Line 31 would run and print console.log("You run as fast as you can into the next room. It's full of snakes!").

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
* We have a conditional if/else statement that is determining which block of code will run under the condition of `bearChoice` being strictly equal to 1.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
* The block of code in line 32 will run printing to the console "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
* The concatenation method will print "hat" within the strings on line 20 and 21. Then with the conditional statement starting on line 27, it will print "You run as fast as you can into the next room. It's full of snakes!". All other lines will be ignored.

7. What is your favorite ending?
* My favorite ending was becoming best friends with a bear. How awesome would a party trick be if I brought in a domesticated bear..

*/
