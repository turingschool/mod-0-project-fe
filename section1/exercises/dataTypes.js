ls
cd/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Each section has 2 examples that are already completed. Your task is to complete
any remaining prompt in each section.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/dataTypes.js`
*/


//-------------------
//STRINGS
//-------------------

// EXAMPLE: Write code below to log the String "Alan Turing" in the console:
console.log("Alan Turing");

// EXAMPLE: Write code below to log `Welcome to Turing!` in the console:
console.log('Welcome to Turing!');

// YOU DO: Write code below to log `99 bottles of pop on the wall...`:
console.log(`99 bottles of pop on the wall...`);

// YOU DO: Write code below to log one line from your favorite song or movie:
console.log(`Not The Bees!`);


//-------------------
//NUMBERS
//-------------------

// EXAMPLE: log the result of the sum of 2 and 2 to the console:
console.log(2 + 2);

// EXAMPLE: log the result of 7 subtracted from 83 to the console:
console.log(83 - 7);

// YOU DO: log the result of 6 multiplied by 53 to the console:
console.log(6 * 53);

// YOU DO: log the result of 20 divided by 4 to console:
console.log(20 / 4);

// YOU DO: log the result of the modulo of 10 into 54:
console.log(10 % 54);


//-------------------
// BOOLEANS
//-------------------

// EXAMPLE: log to the console the result of 1 is equal to 2:
console.log(1 === 2);

// EXAMPLE: log to the console the result of 7 is greater than 2:
console.log(7 > 2);

// YOU DO: log to the console the result of "hello" is equal to "Hello":
console.log("hello" === "Hello");
// YOU DO: log to the console the result of 3 is not equal to 4:
console.log(3 !== 4);
// YOU DO: log to the console the result of 4 is less than or equal to 5:
console.log(4 <= 5);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?


## Console Print ##

Node.js v17.8.0
/Users/Isac/turing/0module/mod-0-project-fe main $node
Welcome to Node.js v17.8.0.
Type ".help" for more information.
> console.log("
console.log("
            ^

Uncaught SyntaxError: Invalid or unexpected token
> console.log(`Ninety-nine bottles of pop on the wall...`);
Ninety-nine bottles of pop on the wall...
undefined
> console.log(`99 bottles of pop on the wall...`);
99 bottles of pop on the wall...
undefined
> console.log(`Not The Bees!`);
Not The Bees!
undefined
> console.log(6 x 53);
console.log(6 x 53);
            ^

Uncaught SyntaxError: missing ) after argument list
> console.log(6) x 53);
console.log(6) x 53);
               ^

Uncaught SyntaxError: Unexpected identifier
> console.log(6)3);
console.log(6)3);
              ^

Uncaught SyntaxError: Unexpected number
> console.log(6 * 53);
318
undefined
> console.log(20 / 4);
5
undefined
> console.log(10 % 54);
10
undefined
> console.log("hello" === "Hello");
false
undefined
> console.log(3 !== 4);
true
undefined
> console.log(4 <= 5);
true
undefined
>
