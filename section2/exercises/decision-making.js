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

the User's choice influences the bear's clothing. if you choose the first door, the hat is assigned. any other choice will give the bear a scarf. which is silly, everyone knows bears don't wear scarves.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing is assigned Hat or Scarf

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

terminal asks for user input. if input is 1, it executes the first statement and the bear trades your item of clothing for your life.
if input is 2 it skips the first statement and executes statement 2; you made the bear cry YOU MONSTER.
if input is 3, it skips the first 2 options and executes option 3; you run foolishly into a room full of snakes. do the snakes live here? it doesn't mention if they're nice snakes or not. best not to presume.
if the user input doesn't match any of the expected choices, you now live with a bear that has dubious fashion sense. congratulations?

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

if input is 3, it skips the first 2 options and executes option 3; you run foolishly into a room full of snakes. i can **guarantee** you it stinks in there. D:

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

i tell the bear his tiny hat makes him look like a huge idiot. he cries and probably mauls me to death later.

7. What is your favorite ending?
probably give the bear a scarf and leave. i'm not about to give him my hat, so that's out of the question. room full of snakes would be cool for a little while, assuming they're not venemous.
*/
