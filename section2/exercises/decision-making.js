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

//Lines 14-18 first evaluate the value of doorChoice. If the value is equal to 1, then the value of bearClothing
//will be 'hat'. If the value is anything but 1, the value of bearClothing will be 'scarf'.

2. What variable has a new value assigned to it after the first if statement executes?

//The variable 'bearClothing' will be changed to either 'hat' or 'scarf' depending on the result
//of the first comparison.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

//The value of 'bearClothing' will be assigned as 'scarf'.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

//In lines 27-35, the code is comparing the value of 'bearChoice' to determine what result will be logged to the console.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

//If 'bearChoice' has a value of 3, the final outcome will be a string logged to the console that says
//"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

//The outcome will be the bear wearing a 'hat', then you will make the bear cry by telling him it is too small :(

7. What is your favorite ending?

//Obviously being the bear's bff!! :)

*/
