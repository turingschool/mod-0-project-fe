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
console.log("Is the number of teachers less than the number of students?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
console.log("Is the number of teachers equal to stringTeachers?", numberTeachers == stringTeachers);
// this should log: true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
console.log("is the number of teachers *strictly* equal to stringTeachers?", numberTeachers === stringTeachers);
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
console.log("is the number of teacher *not* equal to the number of students?", numberTeachers != numberStudents)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is the number of students greater than or equal to 20?", numberStudents >= 20 );
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("is the number of students greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("is the number of students less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("is the number of students less than or equal to 21?", numberStudents <= 21);
// this should log: true

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
// this says 4 is less than nine which is a true statement

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// 4 is less than the variable number of books which is currently 3, so it is false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//the variable number of friends which is currently 6 is greater than the variable number of siblings which is currently 2, this statement is true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// the variable number of attendees is nine which is not equal to the number of meals, somebody isHungry = true

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
console.log("the user is hungry but the homework is not done; false")

// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
console.log("the user is hungry but it doesn't matter that they haven't finished their homework. true");

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("does dog love both treats and play?", lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log("hey, dog. do you love play and the dog park? Dog: ", lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log("dog, do you love play or go to dog park? Dog:", lovesToPlay || lovesDogPark, "\n haha, but which is it? do you like to play OR do you like the dog park? dog:", lovesToPlay || lovesDogPark, "\n ok, moving on");

// Determine if the dog loves to play and is a puppy
console.log("Catalyst here, reporting on location at the dogPark, interviewing dogs for my class project. Hello dog, are you loves to play and is a puppy? Dog: ", lovesToPlay && age,". Well there you have it, Jim. dogs may be man's best friend but they're not very smart. back to you.");

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:

//the == operator is trying to compare a boolean and a number. I think the 'true' value of lovesToPlay and numerical value of age either don't compute or perhaps 'true == 1 == age == 1'.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?

// i had a lot of little typos and things that held me back momentarily. I learned if you hit a period -instead of a comma- inside a string it won't return anything at all.

// I also wan't sure if i was supposed to write my answers out as a comment or as a console log that would show up in the terminal.
