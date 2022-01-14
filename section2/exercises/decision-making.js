/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "socks";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "pants";
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
      If condition 1 is true, then the subsequent code will execute and the bear's clothing will be pants.
      If condition 1 is false, then the second code will execute and the bear's clothing will be a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
      The variable bearClothing has a new assigned value if the first statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
      The bearClothing value would be 'scarf'.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
      Line 27 to line 35 is using else...if statements to check conditions. If the first condition is true where the bearChoice is strictly equal to one, the first code block is executed. If condition 1 is false but condition 2 is true, then the second code block is executed.
      If condition 1 and 2 are false but condition 3 where the bearChoice is strictly equal to 3 is true, then the third code block is executed.
      If none of the conditions above are true, then the last code block will be executed.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
      The final outcome would be `You run as fast as you can into the next room. It's full of snakes!`

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
      The final outcome would be 'You tell the bear the pants is too small and it starts to cry!'

7. What is your favorite ending?
      My favorite ending is that I stay with the bear and I become it's best friend. I would then be able to ride it anywhere I want.
*/
