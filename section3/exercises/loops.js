/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// LEVEL 1: Loops
//-------------------

// EXAMPLE: Write code that logs to the console "I love hedgehogs!" 9 times:
for (var i = 0; i < 9; i++) {
  console.log("I love hedgehogs!");
}

// EXAMPLE: Write code that logs to the console the value of `i`, 3 times:
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// What is logged to the console for this second example? Why?
// EXPLAIN:
/* The values 0, 1, and 2 are logged to the console in the second example. This is
because of the three statements in the counter condition portion of the 'for' loop code.
The initializing expression declares a variable, i, to equal 0.
The condition i < 3 states that the loop will run until the counter reaches 3.
And the increment expression uses the increment operator, ++, to add 1 to the
declared variable every time the loop is run.
Thus, we would expect the first iteration to return 0 since i = 0, the second iteration
to return 1 since i + 1 = 1, and the third and final iteration to return 2 since
i + 1 + 1 = 2. Because running the loop a fourth time will cause the condition to
return false, the loop will end and the script will move to the next line of code. */


 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
 for (var i = 0; i < 7; i++) {
   console.log(2 + 2);
 }


 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
 for (var i = 0; i < 10; i++) {
   console.log("She sells seashells down by the seashore");
 }


//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.
for (var i = 0; i < 5; i++) {
  console.log("This is loop number: " + i);
}

// YOU DO: Using a for loop, how could you get an output that looks like this:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

for (var i = 10; i >= 1; i--) {
  console.log(i);
}

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your Mod 0 group on Slack!
