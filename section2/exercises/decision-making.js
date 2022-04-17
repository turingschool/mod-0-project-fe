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


 Lines 14 - 18 are about which article of clothing you see the bear putting on, based on which room you enter.
 If you enter door 1 the bear will be trying on the hat.
 This is represented by line 14 and 15.
 line 16 and 17 represent what happens if you pick door number 2, the bear will be putting on a scarf.



2. What variable has a new value assigned to it after the first if statement executes?

  The variable that is assgined a new value is bearClothing.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

  The bearClothing would be scarf, since the else statement doesn't assign a nunber value anything over 1 is going to output scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

  Lines 27 - 35 are what happens based on which choice you make after you choose the door and enter to find a bear putting on clothing.
  Lines 27-28 represent the message you recieve if you make the first choice.
  Lines 29-30 represent the message you recieve if you make the second choice.
  Lines 31-32 represent the message you recieve if you make the third choice.
  Lines 33-34 represent the message you recieve if you make any choice that is not one of the first 3.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

  The fianl out come would be "You run as fast as you can into the next rooom. Its full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

  The final result would read, "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

  My favoirte ending was the 4th option "You stay with the bear and become it's best friend!"
*/
