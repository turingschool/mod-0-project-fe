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

//not sure if this is what is asking us to do.  The current array has 3 items; index postions 0, 1, and 2.
//Reassign the last item?  Does this mean take off "elephant" from the array adn reassign it a new value? (like with or unshift method)
//or just append the array by adding (push) in a new item
//thus reassigning the last position (which would then have an index value of 3)??
animals.push("Gorilla");
console.log(animals);


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.pop();
animals.push("Dolphin");
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
console.log(animals[2]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["pho", "cheese", "chips", "pizza"];

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
foods.push("apples", "chicken", "ground turkey");
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

// 1: Google Classroom: When creating an assignment I can add materials, links, documents, rubrics, etc.  All of this is a "list" of data that is stored within the assinmetn created in the classwork section (which is also technically it's own list and of course the whole thing exists int he structure that is google classroom itself which has its own child lists(stream, classwork, grades, people))
// 2: Campus portal (online gradebook): this thing is chock-full of lists and values that are constantly being appended.  Each student (along wiht all their personal information) is connected to each of their enrolled classes and each teacher can append assignments to their gradebook and add grades/scores to those grades
// 3: Banking app: stores your accounts, and within that, the balance as a variable and stores all your transactions (deposits and withdrawals)


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
var percentBatteryLeft = 21;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here

//declares the initial condition of the IF statement.
if (percentBatteryLeft >= 15) {
//If answer to the initial condition is true then it will log "Can call an Uber!"
  console.log("Can call an Uber!");
//decalares what to evaluate when the initial condition (stated in line 121) is false.
} else if (hasCharger === true && chargerType === "car") {
//If answer to the above condition is true then it will log "Phew, I can call an Uber!"
  console.log("Phew, I can call an Uber!");
//lines 128 and 129: decalares what to do if the preceeding conditions evaluate to false. {line 129} in this case, the code will log "You're done for... Cannot call Uber"
} else {
  console.log("You're done for... Cannot call Uber");
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.



// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
