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
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: The log is evaluating if the integer 4 is less than 9, it should result in the output: true.

var books = 3;
console.log(4 < books);
// YOU DO: A variable "books" is initialized as the value 3, then in the console the integer 4 is being evaluated as less
//than the value books, this output will be: false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: The variable "friends" is initialized with the integer 6, and the variable "siblings" is initialized with 2.
//The log is then evaluating if the value of friends is greater than the value of siblings. The output will be: true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: The variable "attendees" is initialized to 9 and the variable "meals" is initialized to 8. The console is
// evaluating if the attendees value is not equal to the meals value. This output will return: true.


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
//the user is hungry but has not finished homework so will return false.
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
//user is hungry so  will return is hungry or true.

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);  // should return true

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark); //should return false

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark); //should return true

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age < 2); //should return true

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My code evaluated true, false, true, true as I thought!
// In the first evaluation
//the value lovesToPlay and lovesTreats are both true, and since they both must be
// true in order to evaluate so they evaluate true.
//In the second evaluation lovesToPlay
//is true but lovesDogPark is false, since they both need to be the same evaluation it returns
//false.
//In the third evaluation lovesToPlay is true and lovesDogPark is false,
//since its using the OR evaluator and one option is true it returns true.
//In the final evaluation it wants me to find out if the lovesToPlay value
//and the age of the puppy will both return true.  It also wants me to evaluate
//the dogs age constitutes a puppy.  I think that puppies are atleast 2 to be
//considered fully grown, so I compared the age value to be less than 2. since
//that was true and lovesToPlay is true the statement returns true. 

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
