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
Line 14 is using === to 'ask' if the doorChoice is 1. Line 15 desribes the output if the doorChoice is 1, or if the result is true, then the variable bearClothing will be a hat. Using an else statement, in the situation the door number is any other but 1, the bearClothing will be a scarf.
2. What variable has a new value assigned to it after the first if statement executes?
After the first 'if' statement executes, bearClothing will have a new value assigned. If the doorChoice is 1, it will be a hat. Any other number will assign the value of 'scarf'.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If doorChoice is 3, then the execution is: does doorChoice equal `1`? No, it does not. ELSE, or because it's not 1, the bearClothing value will be scarf.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Lines 27-35 is describing the path that will result from the selection made of bearChoice. If the value of bearChoice is 1, the execution path will end at the first if statement, leading the secret passage string to run. If the bearChoice input is 2, the first string does not apply, and therefore is skipped. In this case the crying bear string would appear. If the output is bearChoice 3, bearChoice 1 and 2 are false, and therefore do not run. This results in the snake room string. If the bearChoice is not 1, 2, or 3, but instead is any other number, the executed string is "You stay with the bear and become it's best friend!"
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If bearChoice equals 3, then "You run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending? //My favorite ending is choosing door 5000 and staying with the bear and becoming it's best friend. Obviously!
*/
