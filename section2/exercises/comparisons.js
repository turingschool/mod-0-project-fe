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
console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

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
//YOU DO: Explain.
//The code is evaluating whether 4 is less than 9. In this line of code, 4 and 9 are both treated as number data types.
//The presence of < also indicates we are looking at a comparison operation.
//Therefore when the console log is run, it will run whether the number 4 IS less than the number 9.
//This operation will return a TRUE boolean result because 4 is less than 9.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//The variable books is given a number data type and value of 3.
//This is also another comparison operation with the presence of <
//The console log is comparing whether the number 4 is less than(<) the variable books(3).
//With this information, we can conclude that the console log will determine whether "4 < 3".
//When run, it will return a FALSE boolean result because the number 4 is not less than the number 3.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//The variables friends and siblings are both assigned number data types with values of 6(friends) and 2(siblings)
//The presence of > also tells us this is a comparison operation
//The console log is comparing whether friends(6) is greater than (>) siblings(2)
//With this information, we can conclude that the console log will determine whether 6 > 2
//When run, it will return a TRUE boolean result because the number 6 is greather than the number 2.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
//The variables attendees and meals are both assigned number data tpes with values of 9(attendees) and 8(meals)
//The presence of !== tells us that this is a comparison operation
//The console log is then determining whether attendees(9) is not equal(!==) to meals(8)
//With this information we can conclude that the console log is actually running whether 9 !== 8
//When run, it witll return a TRUE boolean result because 9 does not equal 8.

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
console.log("The dog loves to play and loves treats", lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log("The dog loves to play and loves the dog park", lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log("The dog loves to play or loves the dog park", lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log("The dog loves to play and is a puppy", lovesToPlay && age <= 1);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
//TRUE
//As written, we have not defined key pieces of information for the computer to run the operation as intended.
//Specifically, we have not defined what a puppy is or how old a puppy is.
//Therefore, the computer also does not know this information and cannot run the operation.
//For the sake of this example, I used the age variable we already defined and then defined a puppy as 'age <= 1' in order to run the operation.
//I chose to move forward with this example in order to produce a viable result.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? Yes
