/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);
// this should log: true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// this should log: false

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers != numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: true


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: This code logs the result of the comparison: 4 is less than 9. This should evaluate to true.

var books = 3;
console.log(4 < books);
// YOU DO: The first code assigns the number 3 to the variable 'books'. The second code logs the result of the comparison: 4 is less than 'books'. This should evaluate to false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: The first code assigns the number 6 to the variable 'friends'. The second code assigns the number 2 to variable 'siblings'. The third code logs the results of the comparison: 'friends' is greater than 'siblings'. This should evaluate to true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: The first code assigns the number 9 to the variable 'attendees'. The second code assigns the number 8 to the variable 'meals'. The third code logs the results of the comparison: 'attendees' is strictly not equal to 'meals'. This should evaluate to true.


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework); // This should evaluate to false because the first operand is true and the second operand is false according to the logical AND operation truth table.
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework); // This should evaluate to true because the first operand is true and the second operand is false according to the logoical OR operation truth table.

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats); // This should evaluate to true.

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark); // This should evaluate to false.

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark); // This should evaulate to true.

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age); // This should evaulate to 1 which becomes true.

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line evaluates to 1 because it is a comparison of two different data types. For boolean values, JavaScript converts the values to numbers. True becomes 1.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? Yes. 
