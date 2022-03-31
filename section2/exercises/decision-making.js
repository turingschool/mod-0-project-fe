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
We need to determine what the effect of our door choice is, i.e what path we take. So we create an if else statement.
If your variable door choice compares strictly equal to 1 (same data type and value),
then the Bear's clothing variable is assigned a string value of "hat."" If your door choice is anything
other than the number 1, the Bear's clothing variable is assigned a string value of "scarf.""

2. What variable has a new value assigned to it after the first if statement executes?
The bearClothing variable goes from being "" (which is just an empty string) to either a "hat" if the doorChoice variable
 compares to be strictly equal to 1. If doorChoice is anything other than the number 1, it gets reassigned from "" to "scarf."

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
bearClothing would be a "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
We need to decide what happens when the bear tries on the bear Clothing. So we create an if else statement to determine which path.
If the bearChoice variable value is compared to be strictly equal to the number 1 (in data type and in value)
 the console logs the response "You offer the bear..etc".
However if your bearChoice is strictly equal to the number 2, the console logs the response "You tell the bear...etc."
Or perhaps your bearChoice is strictly equal to the number 3, then the console logs the response "You run as fast...etc."
Otherwise if your bearChoice variable is anything other than the numbers 1, 2, or 3 the console will log the response
"You stay with the bear...etc."

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
My favorite ending is when you give the bear your scarf or hat and it shows you the secret passage out!
*/
