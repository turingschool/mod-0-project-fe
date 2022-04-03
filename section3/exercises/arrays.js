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
animals[2] = "Gorilla"

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push("Tiger");

// YOU DO: Write code that will log the String "Elephant" in the animals array
//Since we removed Elephant from the array in the step above where we reassigned it to Gorilla, I will reassign element 2 back to Elephant first
animals[2] = "Elephant"
console.log(animals[2]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["zucchini", "steak", "potato", "radish"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.push("broccoli");
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.push("tomato", "chicken", "pepper");
console.log(foods);

// YOU DO: Remove the food that is in index position 0.
foods.shift();

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

// 1:Spotify app: Playlist, which stores song names
// 2:AllTrails app: List of hiking trail names in your chosen region
// 3:Starbucks app: List of menu items, click on "hot coffees" section and lists all hot coffee drinks

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
var percentBatteryLeft = 11;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here
//Need to decide if user can call an Uber based on battery percentage remaining and if they have a charger and what type.
//Create if else statement. If the user variable percentBatteryLeft is greater than or equal to 15, it would evaluate to true.
//User doesn't need a charger (of any type) and message response is logged to console.
if (percentBatteryLeft >= 15) {
  console.log("Congrats! You can call an Uber to get a ride.");
}
//If the above condition is false and user variable percentBatteryLeft is less than 15, then need to determine if user has a charger using a true or false boolean.
else if (hasCharger === true) {
//If the boolean hasCharger evaluates to true, then need to determine if the charger type is strictly equal to the string "car."
//If chargerType is equal to "car" user is able to call an Uber and log message to console.
    if (chargerType === "car") {
      console.log("Good save! You are able to call an Uber.");
    }
//If variable chargerType is any other string for the charger type they are not able to call an Uber. Message logged to console.
    else {
      console.log("So close! But still not enough juice to call an Uber.")
    }
}
//If user has less than 15 percentBatteryLeft and variable hasCharger is strictly equal to false (i.e. no charger) they also cannot call an Uber.
//Message logged to console.
else if (hasCharger === false) {
  console.log("Wah wah, no Uber for you. Better start running home.")
} else {
//Not sure if this is needed, but in case user enters unexpected data types for any of the variables wanted this message to show up to prompt them to change values.
  console.log("Enter valid values");
}
// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
