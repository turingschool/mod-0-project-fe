/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 3;

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
  Lines 14 - 18 is an if statement. It is deciding what happens when you go through a door.
If you choose door #1, the bearClothing decision is a hat, but if you go through door #2,
(technically any door choice that is not #1) the bearClothing decision is a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
  After the first if statement, the variable bearClothing has a new value assigned to it. Originally,
it is just assigned the value of an empty string, but during this statement it is given the new
value of 'hat'.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  The bearClothing choice would be 'scarf'. This is because the if statement beginning on line 14
says that if the door choice in anything except #1, then the default item is scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  Lines 27 - 35 contain the second if statement. You must make a decision between bearChoice 1,2, or 3.
Then, depending on what you've chosen, (which condition is met), a specific response is logged
to the console. If you choose a choice number that is not 1,2, or 3, then no defined condition
is met, and the final response is logged to the console.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  "You tell the bear the hat is too small adn it starts to cry!"

7. What is your favorite ending?
  My favorite ending is the original: "You offer the bear your hat and the bear shows you a secret passage out!"
*/
