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

Starting on line 14, the code is first asking to evaluate a condition to see if it is true or false.
Depending on the outcome of the comparison of the variable `doorChoice` to the number 1,
the script will run one way or another. If it's evaluated that the value of the variable `doorChoice`
is strictly equal to the integer "1", then the condition can be evaluated as true and a
script is written for this outcome, which assigns the string value of `hat` to the `bearClothing` variable.
If the condition was evaluated and found to not be strictly equal/false, the script will continue with a different statement
that assigns the `bearClothing` variable a string value of `scarf`.

2. What variable has a new value assigned to it after the first if statement executes?

Once the code is executed, the `bearClothing` variable will have it's empty string value reassigned
to the string value `hat` after its confirmed that the value of `doorChoice` is stricly equal to the the number
that it is being compared to.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If the value for the variable `doorChoice` was equal to 3, the condition would be
evaluated as false since 1 does not equal 3. Since the first condition is evaluated as false,
it will continue on to the next statement. This particular conditional statement is an "if/else",
essentially meaning that if the first statement is evaluated to be not true, the second will by default
have to be true and the second script will run. The value of the `bearClothing` variable can only be `hat` if
the first condition is true, therefore if the `doorChoice` variable is assigned a value of 3,
the condition will be false and the value `scarf` is assigned to the variable `bearClothing` in all other cases.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Between lines 27 and 35, a condition is defined and multiple `if/else if/else` statements are written
and will be evaluated against the condition. Starting with the condition defined for the `if` statement
and moving down, each line will be evaluated for truth. It first asks us to
compare the value of the `bearChoice` variable to the number 1 for strict equality. We can see that
the `bearChoice` variable was assigned the value 1, which is strictly equal to the other operand 1.
Since the first statement is evaluated as true it will initiate the first script to run. If it were false,
the subsequent statements would then be evaluated in order and executed if they were found to be true.
Only one `if/else if/else` statement needs to be true and Javascript will ignore all other instructions once
the true statement runs it's instructions.


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If the variable `bearChoice` had a value equal to 3, the first `if` and `else if` statements
would be evaluated as false and wouldn't run. The second `else if` condition would be evaluated as true
since 3 is strictly equal to 3 and would print "You run as fast as you can into the next room. It's full of snakes!".

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

If the variable `doorChoice` had a value equal to one, the `bearClothing` variable would be
assigned the string value of `hat`, as defined in the condition of the `if` statement
on line 14. With a `bearChoice` variable equal to 2, the `if` statement would be evaluted as false, skipping it
and moving on to the next condition to be evaluated. The first `else if` statement would be
evaluated as true since 2 is strictly equal to 2 and it would print the script that follows.
Through concatenation, the string value "hat" stored in the variable `bearClothing` is added into the string and
would print "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

I would like to become best friends with the bear, so I would hope the bear chooses a value
other than 1, 2, or 3.
*/
