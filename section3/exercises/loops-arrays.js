/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

// EXAMPLE: Write code below that iterates through a list of animals and print
// each animal.
var animals = ["Zebra", "Giraffe", "Elephant"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// YOU DO: Write code below that iterates through a list of animals and prints "The
// <animal> is awesome!" for each animal.

var myAnimals = ['Koala', 'Wolverine', 'Ibex', 'Liger'];

for (var i = 0; i < myAnimals.length; i++) {
  console.log('The '  + myAnimals[i] + ' is awesome!');
}

// YOU DO: Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.

var foodsToBuy = ['doughuts', 'cofffee', 'snickerdoodle cookies', 'cake', 'squash'];

for (var i = 0; i < foodsToBuy.length; i++) {
  console.log('Add ' + foodsToBuy[i] + ' to shopping list');
}



// YOU DO: Create an array of numbers and then iterate over that array to log double
// of each of the number. (Ex: 4 doubled is 8.)

var numsToDouble = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < numsToDouble.length; i++) {
  console.log(numsToDouble[i] * 2);
}

// YOU DO: Using the array of names below, print out "Happy Birthday <name>" for
// each name except the first two.
var names = ["Sevy", "Lindsey", "Jericho", "Raeonna", "Latrina", "Jhana", "Luca"];

for (var i = 2; i < names.length; i++) {      // Begin loop at 2nd indexed element. Sorry Sevy & Lindsey!
  console.log('Happy Birthday ' + names[i]);  // Log Happy Birthday <name> beginning from 2nd indexed element
}

// THE FINAL YOU DO: Using the array of ages below, print out a statement for each age.
// The age should determine which message is printed out:
  // Under 18? "Oh no, you can't vote quite yet."
  // 18 or over? "Make sure you get out and vote!"

// WORD FROM THE WISE: Before you start coding, jot down, with pen and paper, what steps you
// want to tell the program to take. Think of all the concepts you've learned so far.

// Remember, stuck for 15-20 minutes? Reach out to your Mod 0 cohort on Slack.


// Steps (& Pseudo Code)

// Array is defined already
// We need for loop 1st ==> with conditonal inside of loop
// if/else structure
      // if (ages < 18)
      //  log ==> Can't vote
      // else (no need to add >=18)
      //    log ==> Go Vote!


var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];

for (var i = 0; i < ages.length; i++) {             // (count from 0th index; dynamic index length; increement by 1)
  console.log(ages[i]);
 if (ages[i] < 18) {                                // if you're not 18 ==> cant't vote
  console.log('Oh no, you can\'t vote quite yet');
}  else {                                           // if you >= 18 ==> Go vote!
 console.log('Make sure you get out and vote!');
  }
}  // End for loop
