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
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals.length)

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals[2] = "Gorilla"
console.log(animals)

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push('Lion');
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals[2])

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var greenVeg = ['peas', 'asparagus', 'celery', 'lettuce']
console.log(greenVeg);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(greenVeg.length)

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
greenVeg.unshift ('broccoli')
console.log(greenVeg);
// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
greenVeg.pop()
console.log[greenVeg.pop()]
// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
greenVeg.push('kale','brussels sprouts', 'green beans');
console.log[greenVeg.push()]
// YOU DO: Remove the food that is in index position 0.
greenVeg.shift
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

// 1: Phone app - contacts are an array
// 2: Facebook - posts on profile are an array
// 3: Bank app - transactions in selected account are an array


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
//The line below checks if the condition percentBatteryLeft is greater than or equal to 15 is true, if it
//is the 'can call an uber' will print.
if (percentBatteryLeft >= 15){
  console.log('can call an uber')
//This line checks to see if the condition chargerType is 'car' and hasCharger is true, is true. If it
//is then 'can call an uber' prints.
}else if (chargerType = 'car' && hasCharger = true){
  console.log('can call an uber')
//This line checks to see if the chargerType is not 'car' or if the hasCharger is false, making the
//condition true and printing 'no uber'
}else if (chargerType !== 'car' || hasCharger = false) {
  console.log('no uber')
//The last line checks if the condition that the percentBatteryLeft is less than 15 is true, if it
//is then 'no uber' will print. 
}else if (percentBatteryLeft <15){
  console.log('no uber')
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
