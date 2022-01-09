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
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);
/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
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
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// Comparing two hard-coded numbers, 4 and 9 respectively, using the less than operator, then printing out the boolean result.
// this should log: true

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// We are creating a variable called 'books' and assigning it a number value of 3.
// Then we are checking to see if 4 is less than the value stored in the variable books, 3, and printing out the boolean result.
// this should log: false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// We are declaring two variables. One is called friends and we are assigning it a number value of 6.
// The other variable is called siblings and we are assigning it a number value of 2.
// Then we are checking to see if the value stored in friends is greater than the value stored in siblings and printing out the boolean result.
// this should log: true

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// We are declaring two variables. One is called attendees and it is assigned the number value 9.
// The other variable is called meals and we are assigning it the number value 8.
// Then we are checking ot see if the value stored in attendees is NOT equal to the value stored in meals.
// this should log: true


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
console.log("Does the dog love to play and love treats?", lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log("Does the dog love to play and love the dog park?", lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log("Does the dog love to play or love the dog park?", lovesToPlay && lovesDogPark);

// Determine if the dog loves to play and is a puppy
// According to this articel (https://dogtime.com/puppies/1130-puppy-behavior-basics-hsus) most puppies are 2yrs or less
var adultDogAge = 2;
console.log("Does the dog love to play and is it a puppy?", lovesToPlay && (age < adultDogAge));

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
// Final line evaluted to 'true' because the valuations from either side of the AND (&&) operator are true.
// lovesToPlay has a boolean value of true and (age < adultDogAge) has a boolean value of true as well.
// Therefore true && true returns a value of true.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
// Yes!
