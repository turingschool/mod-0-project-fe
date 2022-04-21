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
// EXPLAIN: What is logged to the console is 0,1,2. This is the loop that is logged to the console for the varible of i.
// "for" declares a loop, next we declare our varible "i" and assign it equal to 0, and third we set up our increments to plus 1 "i++".
// the first loop sets "i = 0", this evaluates to true becasue 0 is less than 3, so the console will log 0.
// the second loop sets "i = 1", because our increment is set to +1, this will also evaluate to true so the console will log 1.
// the third loop sets "i = 2", because out increment is set to +1 , this is less than 3 and will evaluate to true so the console will log 2.
// the fourth loop sets "i = 3", since this evaluates to false the console stops logging. 

 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
for (var i = 0; i < 7; i++) {
  console.log(2+2);
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
  console.log("This is loop number:",i);
}
// YOU DO: Using a for loop, how could you get an output that looks like this:
for (var i = 10; i >= 1; i--){
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
