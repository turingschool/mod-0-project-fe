/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 4;

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

* a condtional is being set up with an if/else statement. The code block is setting up the parameters for how to execute based
on variable doorChoice. If doorChoice is exactly 1 then the bearClothing value will be a hat. If any
other number is selected then the bearClothing value will be a scarf


2. What variable has a new value assigned to it after the first if statement executes?

* bearClothing has a new value assigned to it after the firt statement executes. The variable bearClothing is dependent
on doorChoice. Once doorChoice is assigned then bearClothing is able to assign its value based on what doorChoice was


3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

* the bearClothing value would be a scarf


4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

* a conditional is being used in the form of an if/else if/else statement. This code block is defining what will happen
dependent on what the bearChoice is. If the bear choice is evalutated and is 1 then that specific code will execute.
If bearChoice is 2 then code specific to that will execute, same for bearChoice 3. If there is any other number for
bearChoice then another separate code will run


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

* the final outcome will be "You run as fast as you can into the next room. It's full of snakes!"


6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

* the final outcome will be "You tell the bear the hat is too small and it starts to cry!!"


7. What is your favorite ending?

* my favorite ending is "You run as fast as you can into the next room. It's full of snakes!"

*/
