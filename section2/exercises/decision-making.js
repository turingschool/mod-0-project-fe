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
// The code is setting up two conditions. one where if you go through door one there is a bear wearing a hat.
One where if you dont go through door one, then the bear is wearing a scarf. You will choose your answer to the question
"Do you go through #1 or #2" and the code will run the appropriate scenario based on how your answer fits the conditions set.
Because the current variable doorChoice is equal to one on line eight, the bear will be wearing a hat.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
"scarf" because 3 is not strictly equal (!===) to one, so it would run the else condition leading to scarf being chosen.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
The code is setting up three conditions. One where you offer your own to the bear. One where you point it out to the bear.
And another where you make a dash for the next room. The code will run one of these scenarios based on which condition fits your answer.
If you chose option 1, the first scenario would run. If you chose option 2, a different second scenario would run. If you chose option 3,
a third different scenario would run. The code decides what scenario to run based on the number chosen and which
condition leads to a "true" outcome. Because the variable bearChoice is equal to one as defined on line 10, the console will log
"You offer the bear your hat and the bear shows you a secret passage out!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
""You run as fast as you can into the next room. It's full of snakes!""

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
""You tell the bear the hat is too small and it starts to cry!""

7. What is your favorite ending?
Its between "You offer the bear your hat and the bear shows you a secret passage out!" and "You stay with the bear and become it's best friend!"
*/
