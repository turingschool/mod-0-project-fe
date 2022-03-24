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

/* i is logged into the console and the output shows the iterations of i as it is run
through the loop starting at 0 and going to 2 (0,1,2). This is because,the loop
will execute if the condition: i < 3 evaulates to true. After the run
i is increased by 1 by i++ and the condition is evaulated again.*/

 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:

for (var i = 0; i < 7; i++) {console.log(2 + 2);}

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.

for (var i = 0; i < 10; i++) {console.log('She sells seashells down by the seashore');}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.

for (var i = 0; i < 5; i++) {console.log('This is loop number:', i);}

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

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your Mod 0 group on Slack!

for (var i = 10; i >= 1; i--) {console.log(i);}
/* i is logged into the console and the output shows iterations of i as it runs
through the Loops*/
// i is declared and assigned to the Number of 10
// the condition is that if 1 is greater than or equal to 1 the statement will execute
// i decreases in increments of 1 when an iteration is run 
