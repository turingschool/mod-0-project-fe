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

Lines 14 through 18 estalblish a few conditionals for the variables doorChoice and bearClothing.
The conditionals estalbished are as follows: if the variable doorChoice has a value of 1 then
the value of the varible bearClothing will log to the console as, "hat". However, if the varialbe
doorChoice has a value of any other number then the value of the variable bearClothing will log to
the console as, "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

The varialbe bearClothing is either assigned to, "hat" or "scarf" depending on if varible doorChoice
has a value of 1 or any other number.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

Assigning varible doorChoice to 3 makes the bearClothing value, "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Lines 27 through 35 estalish a few conditionals for the variable bearChoice. The console can log 4 different
options depending on what value variable bearChoice is assined to (choices based on values 1 - 3, or any other number).
The variable bearClothing is also included in the console log, but it's value is determined by prvious conditions.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

Assiging the variable bearChoice to the value of 3 makes the final outcome in the console log:
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

Assigning variable doorChoice to the value of 1, and assigning variable bearChoice to the value of 2
makes the final outcome in the console log: "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

My favorite ending is when you assign varialbe bearChoice to a number other than 1, 2, or 3 and the console logs
you becoming the bear's friend.
*/
