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

  a) Between lines 14-18 we have an if/else statement that will decide if the bear is wearing a hat (doorChoice = 1
     OR a scarf (doorChoice = 2). Given the strict equality on line 14 the code is asking
     "is the value on the right the exact same as the value on the left"? If not, print scarf rather than hat.
     Any disagreement between line 8 & 14 will always push the code to the else statement and the console will print "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

  a) bearClothing is currently undefined in line 9 (''). It will have a new value assigned to it after
     the first if statement executes. Depending on the truthy or falsy value of this statement,
     bearClothing will be either a hat (=1) or a scarf (all other inputs).


3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

  a) If doorChoice = 3; ==> bearClothing = 'scarf';

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

  a) Between lines 27 and 35 we have an if -else if - else conditional structure. As bearChoice value varies
     from n = 1 --> n = 4 the if - else if - else structure will execute one of its four strict equality
     conditional outputs to the console. Any integer >3 will execute the else condition. The bearClothing variable
     is independent from the bearChoice variable and if -else if - else conditional. It will be logged to
     the console if bearChoice = 1 or 2, and not for any other value in the conditonal.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

  a) You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2,
   what will be the final outcome be?

  a) You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?

  a) You stay with the bear and become it's best friend!

*/
