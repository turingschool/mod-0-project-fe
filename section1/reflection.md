## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

For the most part I feel comfortable in asking questions. However I will always take the time and have the first thought to attempt answering the question myself. The negative side in that is there is a chance I will spend too much time being self reliant when in reality asking someone for help could be beneficial to more than just myself. During this experience I will work on time management and being cognizant of the amount of time when stuck. I will aim to solve the issue by myself in >15 minutes and not spending more than 25 minutes.

2. What are the data types you learned about in this section? In your own words, define each.

 Numeric Data Type- The numeric data type handles all numbers including negative and decimals.
 This data type can be used very similarly to a calculator using different operators
 to determine the sum of a task within your syntax.

 String Data Type- The string data type consists of letters, symbols, and other characters wrapped within quotations to give value to your variable. This data type provides a direct visual for the consumer.

 Boolean Data Type- The boolean data type is used to evaluate either a "true" or "false" outcome.
 This data type can be used behind the scenes to determine which path to take after a users input.

3. How would you log the string `"Hello World!"` to the console?

```JavaScript
var greeting = "Hello World!"

console.log(greeting)
```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

```JavaScript
// "//" Are used to add messages at the end of a syntax line. These messages are written
// in present and imperative mood. They are used to make the code more understandable by logging
// any fixes or adjustments made.
```

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is statement that allows us to store complex information and re use
the value throughout our syntax.

A variable is like a new pet. We know this pet can be significant and a great show and tell
but unless we give this pet a name (or value) we have no way to tell our friends about it.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

Reddit uses multiple variables and data types in order to make the user experience fluid.
When logging in you are greeted with four categories "News, Home, Popular, and Awarded"
Each of these categories can be considered your variables. Clicking each one will have a different outcome.
This is due to each variable having a different value.
- Clicking the "News" variable will lead you to a feed that highlights all of the major headlines
throughout the world, this variable could hold a string data type considering it only shows posts
that have the  phrase "news."(value)
- Clicking the "Home" variable will lead you to a feed of posts within subreddits you have joined(value),
this variable could hold a boolean data type considering it tracks only specific(true) subreddits
you chose to follow.
- Clicking the "Popular" variable will lead you to a feed of the most upvoted posts(value) within other
subreddits, this variable could hold a numeric data type considering it tracks the sum of upvotes per post.

7. In your own words, explain what concatenation is.

Concatenation is a term used to describe the joining of multiple strings and/or variables within JavaScript.
The result being a syntax that is easier to write and understand.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

Developers for Instagram could have used concatenation when designing the "insights" feature.
Posts within a user's insights consist of multiple variables such as terms they have searched, posts they have liked, hashtags they have clicked, etc. All resulting in specific keywords(or values.)
When writing the syntax for the insights feed they could have assigned all of those variables keywords to display relating images for the user.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

What is the proper etiquette to use short hand to log and give values to variables?
Is it frowned upon to get in the habit of shorthand for efficiency?

Example:
```JavaScript
var firstName = "Josh", isHungry = true, numberOfPets=120;

console.log(firstName, isHungry, numberOfPets)
```
