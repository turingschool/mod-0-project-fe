## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
In the past, I have tended to ask questions too late. I am learning to ask for help sooner so I don't waste time going around in circles.

2. What are the data types you learned about in this section? In your own words, define each.
We learned about three primitive data types, `numbers`, `strings`, and `booleans`.
* A number has a numeric value. This includes floating points like `3.4` and negative numbers like `-859`.
* A string uses quotes (either single or double) and consists of letters and other characters (even emojis!). For example, `This is a string!`.
* A boolean evaluates to true or false. Booleans can use comparison operators to see if a condition is true or false. `"My cat is named Chimera" === "My cat is named Kasha"` would evaluate to false, since the two strings are different.

3. How would you log the string `"Hello World!"` to the console?
```javascript
console.log("Hello World!");
```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
You can use two backslashes `//` to add a single line of comments, or `/* enclose comments with a backslash and asterisk */` for multiple lines. A code comment lets someone else understand what you wrote, and it also lets you temporarily stop code from running. This can be a useful feature if you want to test code but not delete it.

5. In your own words, what is a variable? How would you explain it to a 5 year old?
A `variable` lets you store some piece of information to use later. It's called a variable because you can change, or reassign, those values as you write your code.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
On Twitter, I imagine these variables are probably used:
* Your `username`, which is a string
* Your `follower count`, which is a number
* A variable that might be called isFollowing, which is a boolean that tells you if you're following an account or not.

7. In your own words, explain what concatenation is.
Concatenation allows you to join strings together with the `+` operator. This functionality is useful because you can form sentences or longer strings from variables.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?
When I log into my bank's site, it displays a welcome message with my first name. I think the developers probably used code like `"Welcome " + firstName + "!"`. (It's also possible this functionality uses interpolation, but conceptually it's somewhat similar.)

9. What questions do you still have about the work we've done so far? (not having a question is not an option)
While I feel pretty comfortable with what we'e done so far, I would like to know more about `let` and `const`, since I know those are variable conventions you see a lot of in modern Javascript.
