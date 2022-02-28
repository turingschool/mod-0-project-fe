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
  We are creating a conditional statement where if doorChoice is strictly equal to the number 1 then the variable bearClothing
  is assigned a string value of "hat". If doorChoice does not strictly equal the number 1, meaning the statement is false,
  the bearClothing is assigned the string value of "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
  bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  We are using an else if statement to evaluate the defined variable bearChoice.
  The first block of code (lines 27-28) will execute if bearChoice strictly equals 1.
  The second block of code (lines 29-30) will execute if bearChoice does not strictly equal 1, but strictly equals 2.
  The third block of code (lines 31-32) will execute if bearChoice does not strictly equal 1 or 2, but instead strictly equals 3.
  The last block of code (lines 33-35) will execute if none of the three bearChoice evalute to true.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  "You run as fast as you can into the next room. It's full of snakes!""

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  You enter a dark room with two doors. Do you go through #1 or #2?
  You see a bear putting on a hat
  It looks like that hat is too small for the bear, do you...
    1. Offer your own to the bear?
    2. Point it out to the bear?
    3. Make a dash for the next room?
  You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
  My favorite ending is where I stay with the bear wearing a hat that's too small for him and becoming best friends!
  I would do that by assigning the variable doorChoice to equal 1 and assigning the variable bearChoice to equal 0.
  Final output is:
    You enter a dark room with two doors. Do you go through #1 or #2?
    You see a bear putting on a hat
    It looks like that hat is too small for the bear, do you...
        1. Offer your own to the bear?
        2. Point it out to the bear?
        3. Make a dash for the next room?
    You stay with the bear and become it's best friend!
*/
