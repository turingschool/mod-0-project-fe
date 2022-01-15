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
console.log(animals.push("Tiger"));
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
console.log(animals.push("Elephant"));
console.log(animals[4]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foodType = ["fries", "wings", "soup", "tacos"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foodType.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
console.log(foodType.push("broccoli"));
console.log(foodType);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
console.log(foodType.pop());
console.log(foodType);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
console.log(foodType.push("tomatoes", "pretzels", "bananas"));
console.log(foodType);
// YOU DO: Remove the food that is in index position 0.
console.log(foodType.shift());
console.log(foodType);
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

// My example would be STEAM which is a cloud based gaming library.

// 1: There is a game `LIBRARY` that stores all of the games _you_ currently have, and will have that is updated once you purchase a game or once you delete a game completely out of your cloud library.
// 2: There is a friends list, adding and removal of friends is done by the user and you can also search but that sounds more like a method although it is based on the array of `Friends`.
// 3: The most obvious one for me was the `GAMES` section, it has a collection of most games available on STEAM. It also has games that are upcoming which will be added on specific lists.


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
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "outlet";

// Write your conditional here

// line 120 is stating a condition that if the variable `percentBatteryLeft` has a value of greater than or equal to 15 AND the variable `hasCharger` is set to the boolean value of true AND if chargerType has a value of `"car"` print the following line to the console.
if ((percentBatteryLeft >= 15) && (hasCharger = true) && (chargerType = "car")) {
  // line 122 is what will be printed to the console under all of the prior conditions being met. If they are not met, the code will contiue to execute the next line.
  console.log("I can call for an uber");
} else if ((percentBatteryLeft < 15) && (hasCharger = false) && chargerType !== "car") {
  // line 123 is another conditon placed in the if/else statement declaring that when the variable `percentBatteryLeft is less than 15` AND the variable `hasCharger = false` OR if the variable `chargerType` is not equal to the value of `"car"` to run a different block of code.
  console.log("I cannot call for an uber, my battery is too low");
  // line 125 is what will be printed to the console if the conditions placed on line 123 are met
  // line 128 is the final else statement which will log if none of the prior conditions have been met and no blocks of code have been executed.
} else {
  // line 130 is the last block of code that will be executed if none of the prior conditions have been met.
  console.log("I wonder how I am going to get home?");
}

// Originally in line 123, I had an logical `&&` operator for the first condition and a `||` and I was struggling to find a condition that allowed for my final else statement to run. Switched it out with `&&` and it worked as intended.

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
