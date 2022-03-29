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
console.log(animals);

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.

animals.push("Vulture");
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals.push("Elephant");
console.log(animals);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var food = ["grape","walnut","bread","banana","tea"];
console.log(food);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(food.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
food.push("broccoli");
console.log(food);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
food.pop();
console.log(food);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
food.unshift("wine","carrot","brownie");
console.log(food);

// YOU DO: Remove the food that is in index position 0.
food.shift();
console.log(food);

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

// 1: Reddit has options for users to subscribe to different subreddits. A user's subscribed subreddits could be tracked in an array of subreddits.
// 2: Instagram app maintains my saved posts in a folder. These saved posts could be tracked in an array.
// 3: New York Times app could group news articles into section like opinions, world, U.S., with the use of arrays.

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
var chargerType = "tv";

// Write your conditional here
//I chose to start with the 15% battery left condition because when mapping out the workflow for the conditionals,
//the 15% condition was the most straightforward scenario that can lead to true if answered yes.
//I started my condition with the IF statement because that is the order in which to start.
if(percentBatteryLeft >= 15) {
//If the user has 15% battery left or more (conditon is met), the console will log the message "You can call an Uber!"
//If the user does not have 15% battery left (condition is not met), then the code will not run and will move to the following line.
  console.log("You can call an Uber!");
//If the first condition isn't met, the code on this line will check whether this ELSE IF statement is true.
//This statement also corresponds to the second branch of my conditionals workflow:
//If the user does not have 15% battery left, does the user have a charger and is that charger a car charger?
} else if(percentBatteryLeft < 15 && hasCharger === true && chargerType === "car") {
//If the condition is met (returns as true), then the console will log the message, "You can call an Uber!"
  console.log("You can call an Uber!");
//If the above condition is not met (returns as false), then the final ELSE statement will run to capture the final scenario:
//The user does not have any of the following: 15% battery left, charger, charger that is a car charger.
} else {
//The console will log the message, "Sorry, you can't call an Uber right now."
  console.log("Sorry, you can't call an Uber right now.");
}
// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
