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
console.log(animals.splice(2, 1, "Gorilla"));
console.log(animals);

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
console.log(animals.push("Koala Bear"));
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array

//first i would need to reassign elephant since it was kicked off the list by gorilla.
animals.splice(2,1,"Elephant");
console.log(animals)
console.log(animals[2]);


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["Pizza","Sushi","Tacos","Ice Cream"];
console.log(foods);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

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
foods.push("bagels", "mac n cheese", "sandwiches");
console.log(foods);

// YOU DO: Remove the food that is in index position 0.
foods.shift();
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

// 1:reddit - list of posts made
// 2: - list of comments made on posts
// 3: - list of commenst made on comments

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

 🤯 this is confusing because the statements in lines 112-114 directly contradict each other. It doesn't matter if they have a charger, but if they have a charger they can call a car? If the charger only works in the car, how can they use it to call the car with a dead phone? anyway...
*/

var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here
if (percentBatteryLeft >= 15) {
  console.log("User can call an Uber.")
}  else {
    console.log("User is walking home.")
}

// in this case, the code checks the battery %. if it's above the threshold, they can call an Uber. since it doesn't matter if they have a charger at all, or what type, they're walking.

//or maybe...

if (percentBatteryLeft >= 15 || hasCharger && chargerType === "car") {
  console.log("User can call an Uber.")
} else {
  console.log("User is walking home.")
}

/* in this instance the code checks if the user's battery is above the call threshold OR if they have a charger AND if that charger will work in the car.
so either they have 15+% battery or they have a car charger.

if they are below threshhold and don't have a charger, or they do have a charger but it's not the right kind, they're boned.

anecdotaly, this totally happened to me in portland last winter. i went out drinking and the public transport stops around 10. around 1am, i go looking for an uber with like 5% battery. right as the driver calls me to tell me they cant find me, my phone dies. i didn't have a charger and all the shops are closed. I ended up hiding in a restaurant patio in the freezing rain. busses started back up around 8am. that sucked. moral of the story: ALWAYS carry a spare charger!
*/

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
