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
animals[2] = "Gorilla";
console.log(animals);

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push("Honey Badger");
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
// Add Elephants to the array
animals.unshift("Elephant");
// Log "Elephant"
console.log(animals[0]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["Apple", "Carrot", "Fish", "Pear"];
console.log(foods);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length)

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.push("Broccoli");
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.push("Corn", "Cake", "Bread");
console.log(foods);

// YOU DO: Remove the food that is in index position 0.
foods.shift() // alternative: foods.splice(0,1);
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

// 1: Myspace stores recent visitors in a list; ["CoolGuy666", "Billyl33t", "MissRad1990"]
// 2: Barnes & Noble has a list of books that you scroll through; ["Clifford", "The Little Prince", "Arthur"]
// 3: Ebay checkout has a list of items queud up that I am about to purchase; ["Empty Pizza Box", "Keytar", "Cool Shades"]


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of the project
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
The can call an uber if they have a charger and it is a car charger.

*/
// A variable percentBatteryLeft is declared and assigned to the Number value of 12
var percentBatteryLeft = 12;
// reassign percentBatteryLeft to the Number 89
// percentBatteryLeft = 89;

// A variable hasCharger is declared and assigned to the Boolean value of true
var hasCharger = true;
// reassign hasCharger to the Boolean value false
// hasCharger = false;

// A variable chargerType is declared and assigned to the String value of "Car"
var chargerType = "car";
// reassign chargerType to the String value "home"
// chargerType = "home";


// Write your conditional here
// First check if battery life is sufficient, if so - then run the code inside the braces
if (percentBatteryLeft >= 15){
  // Log a message to console
  console.log("You can call an Uber!");
} else if (hasCharger && chargerType === "car") { // Now check if user has a charger and that they have a "car" charger type, if so - then run the code inside the braces
  // Log a message to the console
  console.log("You can call an Uber, but you'll need to charge it in the car.");
} else { // If neither of the above conditons are met, then the user can't call an Uber, so run the code inside the braces
  // Log a message to the console
  console.log("Sorry bud, looks like you'll be walking home...")
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
