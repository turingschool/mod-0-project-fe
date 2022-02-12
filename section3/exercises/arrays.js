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
//console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
var numAnimals;
numAnimals = animals.length;
console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
console.log(animals.fill("Gorilla", 2));

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
console.log(animals.push("Cheetah"));

// YOU DO: Write code that will log the String "Elephant" in the animals array
console.log(animals[2]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var listOfFoods = ["potato", "cheese", "crackers", "carrot", "applesauce"]

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
var numFoods;
numFoods = listOfFoods.length;
console.log(numFoods);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
console.log(listOfFoods.unshift("broccoli"));
console.log(listOfFoods);


// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
console.log(listOfFoods.pop());
console.log(listOfFoods);


// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
console.log(listOfFoods.push("watermelon", "popcorn", "apple"));
console.log(listOfFoods);

// YOU DO: Remove the food that is in index position 0.
console.log(listOfFoods.shift());
console.log(listOfFoods);
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

// 1: YouTube- Keeps all my "Liked" videos in a separate playlist.
// 2: https://www.w3schools.com/js/js_array_methods.asp- This site has lists on lists on lists!
// It has a menu along the left side of the screen displaying lists such as "Js Syntax" and "Array Methods"
// containing helpful information for each category.
// 3: Slack has a menu on the left with different catergories containing lists such as "Starred"
// which displays all of the channels I have starred.


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
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";

// This line of code is creating a conditional statement and when run, and the condition
//(the code within the parentheses) is evaluated for truth. This line is asking if
//the value of the percentBatteryLeft variable is less than or equal to 15.
if (percentBatteryLeft >= 15) {
// This line will execute the script (in parentheses) if the above condition is found to be true.
  console.log("Can call Uber");
}
//This line of code will only run if the above condition is false. It defines another condition
//which will be evaluated for truth, in this case if the percentBatteryLeft variable has a
//value less than 15.
else if (percentBatteryLeft < 15) {
//This line of code contains the script that will run if this condition is found to be true.
  console.log("Cannot call Uber");
}
//This line creates a logical AND conditional statement that is evaluating if both the values
//of the hasCharger and chargerType are true.
if (hasCharger && chargerType) {
//If above condition results in both variable values being evaluated as true, the script below
//will run.
  console.log("Can call Uber");
}
//This line of code contains script that will run if above condition is found to be false.
else {
  console.log("Cannot call Uber");
}
// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
