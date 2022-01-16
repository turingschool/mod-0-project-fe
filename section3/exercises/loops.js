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
//0
//1
//2
// In the first line, 0 is logged to the console because the condition is evaluated to be true, yielding a return of the value of i, which is 0. This action increases the value of i by an increment of 1. When the condition is evaluated again, the value of i is 1, which is still less than 3 making the condition true. As a result, the code runs for another iteration, this time generating an output of 1 (since that is the current value of the variable i). Upon it's completion, the value of i is once again icreased by an increment of 1. In the third iteration, the value of i is 2. Since 2 is less than 3, the condition is once again evaluated to be true and the code executes a third time, generating an output of 2 (the newly assigned value of i). The code does not run after this step, as the incremental increase of 1 reassigns the value of i to 3, which will not satisfy the condition.

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
for (var i = 1; i <= 6; i++) {
  console.log("This is loop number" + i);
}
// YOU DO: Using a for loop, how could you get an output that looks like this:
for (var i = 10; i >= 1; i--) {
  console.log(i);
}
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

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your Mod 0 group on Slack!
  
