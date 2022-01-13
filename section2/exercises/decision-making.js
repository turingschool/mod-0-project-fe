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
Between lines 14 and 18, the code is going through condtionals. It is checking that if you you go through
door 1, you get a hat. If you choose something other than 1(the only option here being 2), you get a scarf.
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing changes from "" to whatever the string value is added.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Scarf
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between lines 27 and 35, we are seeing the outcomes for values being put put in. If you put in the numbers 1
through 3, the code checks the condtionals and ouptuts a different response based on the value put in.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The final outcome will be "You run as fast as you can into the next room."
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You see a bear putting on a hat.It looks like that hat is to small,do you... 2 point it out to the bear?
You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
Staying with the bear and becoming it's best friend!
*/
