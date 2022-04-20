/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals[2] = ('Gorilla');

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals[3] = ('Monkey');

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals[4] = ('Elephant');


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ['kale', 'almonds', 'raspberries', 'bananas']

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.push('broccoli');
console.log(foods);
// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.unshift('peach', 'plum', 'hummus');
console.log(foods);

// YOU DO: Remove the food that is in index position 0.
foods.shift();
console.log(foods);
//
//****Please note: In the console in Dev Tools in Chrome "console.log" is not needed.
//****I am using console.log for consistency with example questions.
//
//
//-------------------
// PART 3: Where are Arrays used?
//-------------------
/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.
//
//** EX from: Pandora App below
// 1: Songs I've liked
// 2: Stations I've added
// 3: Songs I disliked


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of the project
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
They can call an uber if they have a charger and it is a car charger.
*/
//

var percentBatteryLeft = 14;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here
//
// -If the variable percentBatteryLeft declaration is greater than or equal to 15%
// -The console output will be "In Luck! Call an Uber, Quick!"
  if (percentBatteryLeft >= 15) {
  console.log("In Luck! Call an Uber, Quick!");
}
// -If the variable percentBatteryLeft is less than 15% and the variable hasCharger declares, true;
// -and the variable chargerType strictly equals the string 'car',
// -the console outout will be "Close call"
else if (percentBatteryLeft < 15 && hasCharger && chargerType === 'car') {
  console.log("Close call");
}
//
// -If the variable percentBattery Left is less than 15 and the declared value of hasCharger is false
// -and/ or the variable chargerType string input is other than 'car',
// -the console output will be "Not enough, Juice!" and the rider will not be able to call an Uber.
else {
  console.log ("Not Enough Juice!");
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
