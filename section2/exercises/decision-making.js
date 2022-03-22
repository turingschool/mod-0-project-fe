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

- block of code executes the statements between the first set of curly brackets
if doorChoice (the condition) evaluates to true (lines 14-16). Otherwise, the statement
in the second set of curly brackets will execute (lines 16-18).

2. What variable has a new value assigned to it after the first if statement executes?

- the variable that has a new value assigned to it after the first "if" statement executes is: bearClothing.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

- When changing the variable doorChoice to equal 3, the bearClothing value changed to "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

27: block of code executes if bearChoice === 1  evaluates to true
28: this should log: you offer the bear your hat and the bear shows you a secret passage out
29: block of code executes if bearChoice === 1 evaluates to false and bearChoice === 2 evaluates to true
30: this should log: you tell the bear the hat is too small and it starts to cry
31: block of code executes if bearChoice === 1 and bearChoice === 2 evaultes to false and bearChoice === 3 evaultes to true
32: this should log: you run as fast as you can into the next room. It's full of snakes!
33: block of code executes if none of the conditions above evaluate to true
34-35: this should log: you stay with the bear and become it's best friend!

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

- the final outcome will be: you run as fast as you can into the next room. It's full of snakes! 😱

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

- the final outsome will be: you tell the bear the hat is too small and it starts to cry 😭       

7. What is your favorite ending?
*/

/* my favorite ending is when i stayed with the bear and became friends with him.
I only hope that i was able to try on cute hats with them afterwards and have
a nice meal. Friends forever 😈 */
