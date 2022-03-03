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

In line 14 - 18 we have a if statement that executes a block of code if the
condition doorChoice === 1 is true. If the condition is false, there is another
blocks of code that can be executed.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

bearClothing value will be scarf because of the condition in line 16 and 17 that assigned
the string "scarf" to the variable bearClothing.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

In line 27 - 35 we have another if statement that executes a specific block of
code if one of the conditions is true (bearChoice === 1, bearChoice === 2 or
bearChoice === 3).

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The final outcome will be: "You run as fast as you can into the next room. It's
full of snakes!" because the number 3 is assigned to the else if statement that
output the string with this sentence.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The final outcome will be:

You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
**When the variable doorChoice is assigned to the number 1 reassign the variable
bearClothing to the string "hat".**

It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
** When the variable bearChoice is assigned to the number 2 the if statement that
has the condition bearChoice === 2 will log the string "You tell the bear the hat
is too small and it starts to cry!" in the console.**

You tell the bear the hat is too small and it starts to cry!


7. What is your favorite ending?

My favorite ending is when the variable bearChoice === 1 because I really liked
the message in the string. :)
*/
