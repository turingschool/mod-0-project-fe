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
var moreAnimals = ["Penguins", "Cats", "Goldfish", "Moose"];
for (var i=0; i<moreAnimals.length; i++){
  console.log(moreAnimals[i] + " are awesome!");
}


// YOU DO: Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.
var food = ["blueberries", "bananas", "yogurt", "bread","peanutbutter"];
for (var i=0; i< food.length; i++){
  console.log("Add " +food[i]+" to shopping list." );
}


// YOU DO: Create an array of numbers and then iterate over that array to log double
// of each of the number. (Ex: 4 doubled is 8.)
var array = [4,34,17,12];
var index;
for (var i =0; i<array.length; i++){
  index = array[i];
  console.log(index*2);
}


// YOU DO: Using the array of names below, print out "Happy Birthday <name>" for
// each name except the first two.
var names = ["Sevy", "Lindsey", "Jericho", "Raeonna", "Latrina", "Jhana", "Luca"];

for (var i =0; i<names.length; i++){
  if(i>1){
    console.log("Happy Birthday "+names[i]);
  }
}



// THE FINAL YOU DO: Using the array of ages below, print out a statement for each age.
// The age should determine which message is printed out:
  // Under 18? "Oh no, you can't vote quite yet."
  // 18 or over? "Make sure you get out and vote!"

// WORD FROM THE WISE: Before you start coding, jot down, with pen and paper, what steps you
// want to tell the program to take. Think of all the concepts you've learned so far.

// Remember, stuck for 15-20 minutes? Reach out to your Mod 0 cohort on Slack.

var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];
var current;
for (var i=0; i<ages.length; i++){
  current = ages[i];
  if(current >= 18){
    console.log("You are " + ages[i] + " looks like you need to get out and vote!");
  }else {
    console.log ("You are " + ages[i] +  " so you can't vote quite yet.");
  }
}
