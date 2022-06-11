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
// this should log: true

console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true

console.log("Is numberTeachers == stringTeachers?", numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false

console.log("Is numberTeachers === stringTeachers?", numberTeachers === stringTeachers);

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

console.log("Is numberTeachers greater than or equal to 20?", numberTeachers >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log("Is numberStudents less than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log("Is numberStudents less than or equal to 21?", numberStudents >= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);

//Will log the result of the comparison "is 4 less than 9", should log a Boolean value of true.

var books = 3;
console.log(4 < books);

// Will log the result of the comparison "is 4 less than the value of Books", should log a Boolean value of false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);

// Will log the result of the comparison "is the value of friends greater than the value of siblings?", and should log a Boolean value of true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);

// Will log the result of the comparison "is the value of attendees not strictly equal to the value of meals?", should log a Boolean value of true.


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework

console.log(isHungry && finishedHomework);

// Determine if the user is hungry or has completed their homework

console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats

console.log(lovesToPlay && lovesTreats);

//should evaluate to true

// Determine if the dog loves to play and loves the dog park

console.log(lovesToPlay && lovesDogPark);

//should evaluate to false

// Determine if the dog loves to play or loves the dog park

console.log(lovesToPlay || lovesDogPark);

//should evaluate to true

// Determine if the dog loves to play and is a puppy

console.log(lovesToPlay && (age <= 2));

//should evaluate to true

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
//It evaluated to true because the dog loves to play AND is a puppy (per my definition that a dog age 2 or under is a puppy.)- i.e., both conditions are true.
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
console.log("yes!")
