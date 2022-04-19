## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

  For the most part I feel comfortable when asking questions. However, I will always take the time and have the first thought to attempt answering the question myself. The negative side in that is there is a chance I will spend too much time being self reliant when in reality asking someone for help could be beneficial to more than just myself. During this experience I will work on time management and being cognizant of the amount of time when stuck. I will aim to solve the issue by myself in >15 minutes and not spending more than 25 minutes.

2. What are the data types you learned about in this section? In your own words, define each.

  **Numeric Data Type**- The numeric data type stores all numbers including negative and decimals as values.
  This data type can be used very similarly to a calculator using different operators
  to determine the sum of a task within your syntax.

  **String Data Type**- The string data type consists of letters, symbols, and other characters wrapped within quotations to give value to your variable. This data type provides a direct visual for the user.

  **Boolean Data Type**- The boolean data type is used to evaluate either a "true" or "false" outcome for the variable.
  This data type can be used behind the scenes to determine which path to take after a users input.

3. How would you log the string `"Hello World!"` to the console?

```JavaScript
var greeting = "Hello World!";

console.log(greeting);
```

or

```JavaScript
console.log("Hello World!");
```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

  `//` - Are used to add messages at the end of a syntax line. These messages are written
  in present and imperative mood. They are used to make the code more understandable by logging
  any fixes or adjustments made.


5. In your own words, what is a variable? How would you explain it to a 5 year old?

  A variable is statement that allows us to store complex information as a value and re use
that value throughout our syntax.

  *Example:*
  A variable is like a new pet. We know this pet can be significant and a great show and tell
but unless we give this pet a name (or value) we have no way to tell our friends about it.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

  *Reddit uses multiple variables and data types in order to make the user experience fluid.*

  **String Data**
 is used once the user has created a profile, upon creating a profile the user chooses a user name. This username will be in the form of String Data and be used across the platform for comments, uploads, posts, etc.

  **Numeric Data**
 is used every time the user opens up a post, within that post is a numeric value of "Upvotes" the community has contributed to.

 **Boolean Data** is used on the home feed to display specific subreddits the user has chosen to follow giving them a "true" value.

7. In your own words, explain what concatenation is.

  Concatenation is a term used to describe the joining of multiple strings and/or variables within JavaScript. The result being a syntax that is easier to write and understand.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

  Developers for bank applications could have used concatenation when writing writing informative messages for the user. This message could have multiple values such as name, balance, payments made, etc.

  *Example:*
  ```JavaScript
  console.log("Good Morning, " +firstName+ " your balance is " +availableBal+, +paymentPaid+);
  ```

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

  What is the proper etiquette to use short hand to log and give values to variables?
Is it frowned upon to get in the habit of shorthand for efficiency?

  *Example:*
  ```JavaScript
  var firstName = "Josh", isHungry = true, numberOfPets=120;

  console.log(firstName, isHungry, numberOfPets);

  // I did ask this question in class before I made my final revisions.
```
