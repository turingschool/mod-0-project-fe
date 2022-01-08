## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

  * Answer: I feel comfortable asking questions over zoom and in a direct message to an instructor/grader however and I feel like I level that at the appropriate times. I still do not feel comfortable asking for help in slack. I get anxious asking for help from my peers in a written format. My plan for dealing with this is to interact with or post a slack message at least once a day.

2. What are the data types you learned about in this section? In your own words, define each.
  * Strings consists of any kind of text bound within either "" or ''.
  * Numbers are a data type that includes all numbers. Large numbers do not use commas. Decimals are written as normal. Numbers are not bound within anything: `14` `-3` `0.25` `7842` are examples of numbers.
  * Booleans are a data type that deal with evaluations that result in either a `true` or `false` statement

3. How would you log the string `"Hello World!"` to the console?

  ```JavaScript
  console.log("Hello World!")
  ```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
  * Code comments allow programmers to leave useful comments regarding parts of their code for themselves or for other who may be reading the code later on. Complicated code can sometimes be difficult to read and understand quickly a code comment can be used to describe what a specific piece of code is doing.
  * `//` are used to do single line comments. Any inputs after the slashes will be greyed out and not read for that line of code.
  * ``/*  */`` are used for multiline comments. Anything between the the slashes and asterisks will be greyed out and not read by the computer.
  * Code comments can also be used to silence sections of code if the programmers wishes to.

5. In your own words, what is a variable? How would you explain it to a 5 year old?
  * Variables are a way for us to define something and give it a value. We can then use this something later on in many places of our code when we need it. We can also change its value if we need/want to!

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
  * I shop at REI.com quite a bit. I would imagine they have `var userName`, `var productType`, or even `var numberOfClicks`. The first two are strings data types that can track our chosen user name or product category we are searching for. The 3rd is a number data type which could be used to track our behavior on the site. `var memberStatus` could be a Boolean data type that asses the true false statement of whether or not a customer browsing the site is a member.

7. In your own words, explain what concatenation is.
  * concatenation is a way of adding things together. Programmers use the `+` plus operator to join strings and other data types together.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?
  * When a user creates a new profile on a website the software will pull your name (probably from a `var userName`) and send you an email saying something like: "Hi Michael, Thank you for registering an account with us today". In code this could look something like:

  ```JavaScript
  var userName = "Michael";
  console.log("Hi " + userName + " " + ", Thank you for registering an account with us today!");
  ```


9. What questions do you still have about the work we've done so far? (not having a question is not an option)'
  * Interpolations seem like an overall simpler and faster way to combine different variables and strings. Why would we use Concatenation over Interpolation?
  * How do you allow a user to change a variable based on certain input?
  * What are some other primitive data types?
  * Are there different assignment operators used for concatenation other than (`+`)?
