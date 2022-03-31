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
// this should log: "Is numberTeachers less than numberStudents?" true

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);
// this should log: "Is numberTeachers equal to stringTeachers?" true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// this should log: "Is numberTeachers strictly equal to stringTeachers?" false

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
// this should log: "Is numberTeachers not equal to stringTeachers?" true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20)
// this should log: "Is numberStudents greater than or equal to 20?" true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: "Is numberStudents greater than or equal to 21?" false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: "Is numberStudents less than or equal to 20?" true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: "Is numberStudents less than or equal to 21?" true


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
/* Note: This line of code is using the "less than" comparison operator to check if 4 is less than 9.
This comparison will evaluate to true.  */

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
/* Note: Line 88 declares a variable named books and assigns the value of 3.
Line 89 is a "console.log" statement, this evaluates the comparison "4 is less than books".
This will log false. */

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
/* Note: Lines 95 and 96, declares variables named "friends" and "siblings", the variables
are respectively assigned integer values of "6" and "2".

The "console.log" statement on line 97 is logging the value of the "friends > siblings" expression.
The expression uses the "greater than" ( > )comparison operator, to compare the values of friends to siblings.
Because the value of friends(6) is greater than (>) siblings(2), this will evaluate to true.*/

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
/* Note: Lines 106 and 107, declares variables named "attendees" and "meals", the variables
are respectively assigned integer values of "9" and "8".

The "console.log" statement on line 108 is telling the console to log the value of the operand comparison (attendeees !== meals) expression.
The expression uses the "strict not equal" ( !== ) comparison operator, to compare the attendees and meals operands.
Because the operand attendees(9) is not the EXACT same (!==) value as operand meals(8), this will evaluate to true.*/

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// This should log: false

// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
// This should log: true

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
// This should log: true

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
// This should log: false

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);
// This should log: true

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);
// What did your final line of code evaluate to? Why do you think that is? Explain.

/* ANSWER: My final line of code evaluated to "1". I think this happened because
"lovesToPlay" value (true) could not be converted to "false".
Also the value assigned to "age" (1) is not a bool value (true or false).

The '&&' operator returns the value of the first operand (which in this case is "true") if it
can be converted to false; otherwise, it returns the value of the second operand
(which in this case is "1"). Also, when "&&" is used with a non-boolean value,
it may return a non-boolean value*/

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?

// Yes, everything printed out as expected!
