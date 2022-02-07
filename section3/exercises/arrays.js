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
animals.push("Puffin")


// YOU DO: Write code that will log the String "Elephant" in the animals array
animals.push("Elephant")
console.log(animals[5]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var yummy = ["Pizza", "Noodles", "Salad", "Burrito"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(yummy.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added

yummy.unshift("Broccoli")
console.log(yummy[0]);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
yummy.pop[5]
console.log(yummy);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
yummy.unshift("Bread")
yummy.push("Taco")
yummy.push("Soup")
console.log(yummy);
// YOU DO: Remove the food that is in index position 0.
yummy.shift[0]
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

// 1: YouTube. A content creators different playlists must be an array.
// 2: Spotify. Every song I like is sent to an array.
// 3: Amazon. The shopping cart is probably an array fiend. There are arrays likely
// storing products, different prices for different versions of that product, colors,
// etc., then when added to the cart that is an array of itself.


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

// Write your conditional here
// 120 uses greater than or equal operator to determine if 15 is met, if not, the
// OR operator will go to the other side then determine if hasCharger is true, AND
// if chargerType is strictly equal to string "car". The result is then logged to the
// console, depending on what values the variables hold. 
if (percentBatteryLeft >= 15 || hasCharger && chargerType === "car"){
 console.log("The user can call an Uber");
} else {
 console.log("The user cannot call an Uber");
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟

/*
Try:1

 I would like to note that this does not work though it was a fun theory:

if (percentBatteryLeft >= 15 || hasCharger && chargerType = "car"){
  console.log("The user can call an Uber");
} else {
  console.log("The user cannot call an Uber");
}
While this works in my human brain, the computer is likely seeing that there are
several of these logical operators inside of this and cannot compare them in the
order I've given it.

Try:2

if (percentBatteryLeft >= 15) {
  console.log("The user can call an Uber!");
} else if (hasCharger && chargerType = "car"){
  console.log("The user can call an Uber!");
} else {
  console.log("Start walking.");
}

I'm realizing now that I have been ASSIGNING chargerType to car in the if statement.

Try 3:

if (percentBatteryLeft >= 15 || hasCharger && chargerType === "car"){
 console.log("The user can call an Uber");
} else {
 console.log("The user cannot call an Uber");
}

Back to checking actual equality here, Try 3 works using Try 1! WOW!!! I used
strict equality because I was told to always use that about an hour ago.

*/
