/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");
//if doorChoice is exactly equal to 1, then
if (doorChoice === 1) {
//assign bearClothing equal to hat
  bearClothing = "hat";
//else
} else {
//assign bearClothing equal to scarf
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

//if bearChoice is exactly equal to 1, then
if (bearChoice === 1) {
//you offer the bear your bearClothing and the bear shows you a secret passage out!
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
//else if bearChoice is exactly equal to 2, then
} else if (bearChoice === 2) {
//you tellthe bear the bearClothing is too small and it starts to cry!
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
  //else if bearChoice is exactly equal to 3, then
} else if (bearChoice === 3) {
  //you run as fast as you can into the next room. Its full of snakes!
  console.log("You run as fast as you can into the next room. It's full of snakes!");
//else then
} else {
//you stay with the bear and become its best friends!
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
* If/else statment
* If doorChoice is exactly equal to 1, then assign bearClothing equal to hat, if doorChoice is not exactly equal to 1, else assign bearClothing equal to scarf.
* If you choose door # 1 the bear wears a hat. If you choose any other door number, the bear wears a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
* bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
* Scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
* If/else statement
* If bearChoice is exactly equal to 1, then you offer the bear your bearClothing and the bear shows you a secret passage out! Else if bearChoice is exactly equal to 2, then you tell the bear the bearClothing is too small and it starts to cry! Else if bearChoice is exactly equal to 3, then you run as fast as you can into the next room. Its full of snakes! Else then, you stay with the bear and become its best friends!

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
* Then you run as fast as you can into the next room. Its full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
* Then you assign bearClothing equal to hat.
* Then you tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
* you stay with the bear and become its best friend!
*/
