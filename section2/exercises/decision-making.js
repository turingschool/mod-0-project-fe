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
  In those lines of code it is asking what doorChoice is equal to and with that number comes a different assigned value for the variable bearClothing. If you choose the number 1 for the variable doorChoice then the bearClothing will be equal to "hat". If any other number is inputed to the doorChoice then the bearClothing will be equal to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
  The variable bearClothing has a new value assigned to it after the first if statement.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  If you changed the variable doorChoice to equal 3, then bearClothing will be assigned the value of "scarf".

4. In English, using technical vocabulary, describe what is happening between lines 27 and 35.
  In those lines of code it is asking what bearChoice is equal to and with that number comes a different logged string for the number 1, 2, 3 and other. The code is executed in a specific order.
    - It starts with asking, if bearChoice is equal to the number 1 than a specific string is logged.
    - If 1 is not the number equal to bearChoice, it moves down to the next else if and asks if bearChoice is equal to the number 2. If 2 is the value assigned for bearChoice then a specific string is logged.
    - If 2 is not the value assigned it then moves to the next else if to ask if the number assigned to bearChoice is 3. If 3 is the assigned value for bearChoice then a specific string is logged.
    - If 3 is not the value assigned it then moves to else which means any other value other than 1, 2, and 3 will log a specific string.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  The final outcome will result in the logged string: "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  The final outcome will result in:
    You enter a dark room with two doors. Do you go through #1 or #2?
    You see a bear putting on a hat
    It looks like that hat is too small for the bear, do you...
    1. Offer your own to the bear?
    2. Point it out to the bear?
    3. Make a dash for the next room?
    You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
  My favorite ending is: "You tell the bear the hat is too small and it starts to cry!"
  
*/
