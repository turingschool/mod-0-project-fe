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

console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"

animals [2] = "Gorilla";
console.log(animals);

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.

animals [3] = "Lynx";
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array

animals [4] = "Elephant";
console.log(animals [4]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)

var foods = ["Spinach", "Avocado", "Blueberries", "Poultry"];
console.log(foods);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.

console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added

foods [4] = "Broccoli";
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed

// Removes last item in array
// Unlike using delete, the last element is removed completely and the array length reduced.
foods.pop();
console.log(foods);

//OR
// Setting the length property to a value less than the current value.
// Any element whose index is greater than or equal to the new length will be removed.

var foodsNew = ["Salmon", "Kale", "Brussels Sprouts", "Cheese", "Beets"];

foodsNew.length = 4
console.log(foodsNew);


// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added

foods.push("Tuna", "Coconut", "Bok Choy");
console.log(foods);
console.log(foods.length);  // Updates to 7 elements

// YOU DO: Remove the food that is in index position 0.

foods.shift();       // removes index 0 (Spinach)
console.log(foods);

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

// 1: Google Podcasts - There are lists of podcasters and by selecting a single podcast,
// you get a list of all their episodes.

// 2: Mountain Project - A climbing application that stores lists of routes on specific
// climbing walls (organized from L-R ideally).

// 3: Mountain Project Cont... - On each persons profile, they log all of their ascents,
// creating a chronological list of climbs completed


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
var percentBatteryLeft = 15;
var hasCharger = true;
var chargerType = "car";


// Write your conditional here

// Check if battery charge is at least 15%.
if (percentBatteryLeft >= 15 ) {
  // If true, allow user to order an Uber. Exit conditional
  console.log("Battery is greater than 15%, you may call an Uber.");
// If battery charge is less than 15%, and user has a car charger - they can call Uber.
} else if (hasCharger && chargerType) {
  // If true, allow user to order an Uber. Exit conditional
  console.log("Accepted, you may call an Uber.");
  // If battery charge is less than 15% and no car charger - they cannot call an Uber.
}  else if (percentBatteryLeft < 15 && hasCharger === false) {
  // Deny user from ordering an Uber - Exit conditional
  console.log("Uber is unavailable due to insufficent battery charge without car charger");
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
