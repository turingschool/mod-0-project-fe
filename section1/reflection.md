## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I feel good about asking questions when I need to.  I am the type of learner that really likes to try and figure things out on my own before asking for help, but that being said I can recognize the "unproductive struggle" and I am not afraid to reach out for help if I've spent too long searching for an answer.  I think I land right about in the middle of too soon and too long, with maybe a slight lean towards too long.  So I will try and work on speaking up more if I have trouble and limit my searching to 20-30 minutes.

2. What are the data types you learned about in this section? In your own words, define each.

I learned about strings, numbers, and booleans.  A string is a combination of words, letters, and/or numbers surrounded by quotes. A number is any number, and can include negative, positive, or decimals.  A boolean is a statement that will output either true or false.  This could be a simple number equation like `2=2` (true), or a statement such as `football = basketball` (false).

3. How would you log the string `"Hello World!"` to the console?

```javascript
console.log("Hello World")
```
You could also assign it to a variable:
```javascript
var string = "Hello World"
console.log(string)
```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

There are two ways to indicate comments. The first is by using `//` which will make anything in the line after the double backslash a comment and will not run as part of the code.  The other way is by using `/* ... */` Anything written in between (where the `...` is) will be a comment.  This can extend through multiple lines.  The purpose of a code comment is to describe what the code is doing at that moment and can make it much easier to understand and follow the workflow of whoever wrote the code.  It is useful both for the original author to reference later on in the process as well as for someone who is unfamiliar with the code and wants to see a breakdown of how the code is working step by step.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is a way to define something.  It can be a word or a brief phrase, and you can decide to assign certain values to it and change those values at will by re-assigning it.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

- On Amazon, variables are likely used to determine pricing.  There is usually a quantity select box which acts as a variable.  The user assigns this variable to `1`, `2` , or `3` etc. and then that variable is multiplied by the price of one unit to output the total price in the shopping cart.  In this example the data type would be a **number**.
- Also on Amazon, a user's email and password would be variables, saved as **string** data.  The user inputs their information and if the variables entered match the variables that amazon has on file in their system, the user is able to log on.  This result of this comparison would be an example of a **boolean** data type.
- Another example of variables on Amazon's website would be a user's address that they want something delivered to. The user inputs their address to Amazon and their system will record it as **string** data and then Amazon will know what address to send the package to.

7. In your own words, explain what concatenation is.

Concatenation is a way to merge variables together to form a more complex string.  The variables can be different data types, such as a number and a string, but the resulting data will be a string.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

Also on the Amazon website, when you are logged into your account it will display your name and your address near the searchbar and read something like "Deliver to 'Thomas' at 'Broomfield 80021'" This is likely an example of concatenation where they are taking the variables `userName` and `userZipCode` and putting them together to form a string that shows the user that they can deliver to their specific account/zipcode combination.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

I feel like I am starting to understand how these concepts are used in real world scenarios, like with the above examples on the Amazon website, but I also feel like I'm missing other obvious examples.  I feel like Amazon probably uses variables and concatenation and interpolation all over their website, and it took me some serious thinking to just come up with the few examples above.  So I guess my question would be how can I apply these concepts to more real-world situations, rather than just typing simple sentences like we did in the exercises?  It seems like for the exercises it would be so much simpler to just type out the sentence as a string rather than assign variables and insert those variables into the sentence, so why would we do it this way?
