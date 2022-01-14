/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;
bearChoice = 4;

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
//This is a conditional statement using if/ else if. This means that the second part of the code is dependant of the result of the first part. Therefore, the result of else if depends on what is put in the if statement. Changing a variable at the beginning will affect what happens because the if uses a variable.

2. What variable has a new value assigned to it after the first if statement executes?
//bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//It would still be scarf, because the condition there is else, which means any other option besides 1.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
//This condition depends on the number of bearChoice. Each bearChoice 1-3 has a unique string that will run, while any other choice will run the last string.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You run as fast as you can into the next room. It's full of snakes!
However the only line changed by bearChoice is the last one.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
//You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You stay with the bear and become it's best friend!
*/
