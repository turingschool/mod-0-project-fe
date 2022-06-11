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
// EXPLAIN: It logs 0, then 1, then 2. The reason this happens is because i originally is assigned to 0, and the first time the
//code runs, it prints that value. Then the incremental statement increases the value of i by 1, making it 1, so that's what prints.
// Then, the value is incremented once more and prints. It stops at 2 because of the condition expressed (i < 3) - the loop will only continue to run as long
// as i is less than 3. So it stops when i = 2.

 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
for (var i = 0; i <= 7; i++) {
  console.log(2 + 2);
}

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
for (var reps = 0; reps < 11; reps+= 1) {
  console.log("She sells seashells down by the seashore")
}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.

for (i = 0; i < 5; i++) {
  console.log(`This is loop number: ${i}`)
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

for (i = 10; i > 0; i--) {
  console.log(i)
}
