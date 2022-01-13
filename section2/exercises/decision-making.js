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

Between lines 14 and 18 we see the first if/else structue. Essentially, we are telling JavaScript what to print depending on the value assigned to doorChoice. In short, in lines 14 and 15 we are establishing that if door one is selected bearClothing will have a value of "hat". In lines 16-18, we are establishing that for any other door choice input, the value of bearClothing will be "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

After the first if statement executes, bearClothing will have a new value assigned to it.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If I changed the variable doorChoice to equal 3, the value for bearClothing would be "scarf". This is because in the first if/else statement the strictly equal (===) operator is used to establish that if the door choice is stritly equal to 1, the value for bearClothing is "hat". The else portion to follow establishes that for any other input, the value for bearClothing will be "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Between lines 27 and 35 we are establishing what outputs will run depending on the selection for bearChoice. In lines 27-28, we are employing an if statement to determine the output when the value of bearChoice is strictly equal (===) to 1. In the following lines, we use two subsequent else if statements to determine alternate outputs for bearChoice values of two and three. In lines 33-35 we use an else statement to define the output "You stay with the bear and become it's best friend!" given any other value assigned to bearChoice.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If I changed the variable bearChoice to equal 3, the final outcome would be, "You run as fast as you can into the next room. It's full of snakes!".

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

If I changed the variable doorChoice to equal 1 and the variable bearChoice to equal 2, the final outcome would be, "You tell the bear the hat is too small and it starts to cry!".

7. What is your favorite ending?

My favorite ending is, "You stay with the bear and become it's best friend!". 
*/
