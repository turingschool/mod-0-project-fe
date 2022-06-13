/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


// EXAMPLE:Manipulate the variable 'weather' to see if you can print something other
  // than 'coat'.

// var weather = 'snowy';
// var weather = 'icy';
// var weather = 'rainy';
var weather = 'sunny'; 

// While working through this example, I would toggle which variable declaration is
  // commented in/out and run the program in node several times to observe the output.
    //toggling between each variable is a little time consuming

if (weather === 'sunny') {
  console.log('sunscreen');
} else if (weather === 'rainy') {
  console.log('umbrella');
} else if (weather === 'snowy') {
  console.log('coat');
} else if (weather === 'icy') {
  console.log('yak traks');
} else {
  console.log('good to go!');
}

/* 
YOU DO:
Using the dogAge variable defined below, 
determine if a dog is a puppy (2 or younger), 
an adult, or elderly (10 or older).

Log to the console the appropriate age range
(puppy, adult, elderly).
*/

var dogAge = 3;
// Write your conditional below
var puppyMsg = "You're just a baby!";
var adultMsg = "You're all grown up!";
var elderlyMsg = "You're a senior dog!"; 

function checkDogAge(dogAge) {
  if (dogAge <= 2) {
    return puppyMsg;
  } else if (dogAge > 2 && dogAge < 10) {
    return adultMsg;
  } else if (dogAge >= 10) {
    return elderlyMsg;
  }
};

//tests: This is one test to check my code and log out other possible solutions. 
  //Another step would to get it to return an Error message when something goes wrong.
console.log(checkDogAge(dogAge));
// console.log(checkDogAge(1.5))
// console.log(checkDogAge(5));
// console.log(checkDogAge(10));
// console.log(checkDogAge(12));

/*
YOU DO:
Using the numQuarters variable defined below, determine
if you have enough money to buy a gumball. A gumball costs
two quarters. Right now, the program will log
out both "I have enough money for a gumball" and
"I don't have enough money for a gumball". Write
a conditional statement that ONLY logs one or the
other.

You should be able to change num_quarters and achieve these outputs:
When numQuarters = 0, program should log "I don't have enough money for a gumball"
When numQuarters = 1, program should log "I don't have enough money for a gumball"
When numQuarters = 2, program should log "I have enough money for a gumball"
When numQuarters = 3, program should log "I have enough money for a gumball"
*/

var numQuarters = 0;
var message;

// Write your conditional here
function checkMoney(numQuarters) {
  switch (numQuarters) {
    case 0:
      message = "I don't have enough money for a gumball";
      break;
    case 1:
      message = "I don't have enough money for a gumball";
      break;
    case 2:
      message = "I have enough money for a gumball";
      break;
    case 3:
      message = "I have enough money for a gumball" 
      break;
    default: //I set a default message in case I log out more than the other cases.
      message = "I can get more than one gumball"
      break;
  }
  return message
}

//tests:
console.log(checkMoney(numQuarters));
// console.log(checkMoney(1));
// console.log(checkMoney(2));
// console.log(checkMoney(3));
// console.log(checkMoney(9));


/*
YOU DO:
Using the variables defined below, determine if you have the
ingredients to make a pizza. A pizza requires at least two cups
of flour and sauce.

You should be able to change the variables to achieve the following outputs:
When cupsOfFlour = 1 and hasSauce = true, your program should log "I cannot make pizza";
When cupsOfFlour = 1 and hasSauce = false, your program should log "I cannot make pizza";
When cupsOfFlour = 2 and hasSauce = true, your program should log "I can make pizza";
When cupsOfFlour = 3 and hasSauce = true, your program should log "I can make pizza";
*/

var cupsOfFlour = 1;
var hasSauce = true;

// Write your conditional here
function checkPizzaIngredients(cupsOfFlour, hasSauce){
  if (cupsOfFlour >= 2 && hasSauce) {
    return "I can make pizza";
  } else {
    return "I cannot make pizza";
  }
}

//tests:
console.log(checkPizzaIngredients(cupsOfFlour, hasSauce));//false
// console.log(checkPizzaIngredients(cupsOfFlour, false));//false
// console.log(checkPizzaIngredients(2, hasSauce));//true
// console.log(checkPizzaIngredients(2, false));//false
// console.log(checkPizzaIngredients(3, hasSauce));//true

/*
For the last exercise, an ideal solution probably uses a logical operator. 
Did yours? Do you know what a logical operator in JavaScript is? Google it to answer
for yourself!

Yes, using the logical AND operator kept my code concise. 
It required that both conditions be met in order to evaluate true, 
therefore returning the first message. 

Logical operators allow developers to compare two or more expressions. 
In Javascript, we use the logical AND (&&) and OR (||) and NOT (!) operators. 
They are typically used with Boolean values.
*/
