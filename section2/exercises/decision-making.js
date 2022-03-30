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
// The generator is comparing the variable doorChoice to 1 to see if it's exactly the same.
// If it is, it executes the next line of code in the fancy brackets, which is that the
// bear puts on a hat. Anythng else, meaning option door #2 or anything else for that matter,
// and the next code block will be executed, bear puts on a scarf instead.

2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// The generator looks to the variable bearChoice to see if it's exactly 1. If so, it executes
// the first code block which is you give the bear your hat or scarf and it shows you the way out.
// If exactly 2, it executes the code block of you saying the clothing is too small and
// the bear starts to cry, number 3 chosen give the exact output of the code block in which
// you run as fast as you can into the snakes' room, and any other option chosen, 4 or otherwise,
// and you stay with the bear and it becomes your best friend, the string of code written into
// that option's code block.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// You run into the next room, and it's full of snakes, or the string of code is executed
// with the 3 being exactly equal to that option's choice.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
// I like the ending of you staying with the bear and becoming it's friend! But probably not very realistic... :/
*/
