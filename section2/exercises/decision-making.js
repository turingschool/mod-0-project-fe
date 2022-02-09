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
#14 The if statement is checking if the value stored in a variable called doorChoice is exactly equal to 1
#15 The statement evaluates to true (because doorChoice is set to exactly 1), so statements within this code block are running
returning hat later on in the subsequent console.log statements
#16 The else statement is ignored since the above line was executed based on the conditions evaluating to true
#17 The statement is ignored because the above evaluated as true
#18 The closing curly bracket indicates the end of the code block of if/else statements

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing has a new value assigned called 'hat'

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
bearClothing variable would be assigned to a new value called 'scarf' based on these new conditions with doorChoice equal to 3

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
#27 The if statement is checking if the value stored in variable bearChoice is exactly equal to 1
#28 The console.log will output text only when the above condition (if statement) evaluates to true.
In this case it does and the output will read, You offer the bear your hat and the bear shows you a secret passage out!
#29 The code in this line gets ignored unless the above variable bearChoice had been assigned to 2 then it would run
#30 The console.log will not output the text and will be skipped or ignored
#31 The code in this line also gets ignored unless the above variable bearChoice had been assigned to 3 then it would run
#32 The console.log will not output the text and will be skipped or ignored
#33 The else statement will also be ignored because one of the conditions above was met, otherwise if none had evaluated to true
the else code statement would be executed, i.e., if variable bearChoice were assigned to say 5
#34 The console.log will not output the text and will be ignored
#35 The closing curly bracket indicates the end of the code block of if/else if/else statements

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The output text would read, You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The output text would now read, You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
The second ending with bearChoice set strictly equal to 2

*/
