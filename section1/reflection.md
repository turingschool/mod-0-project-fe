## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
I tend to ask them too soon, especially to my partner (who is a full stack engineer). I would like to get into the habit of trying to find the answer on my own before consulting another human.

2. What are the data types you learned about in this section? In your own words, define each.
- Number: any number including decimals and negative numbers.
- String: Any grouping of characters (letters, numbers, spaces, symbols, etc.) surrounded by quotes (single or double). A fancy name for text.
- Boolean: A data type that only returns "true" or "false", can be used as on/off switches or answers to yes/no questions.
3. How would you log the string `"Hello World!"` to the console?
`console.log("Hello World!");`
4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
There are two kinds of comments, but both are for human eyes only, the computer just ignores them. This is useful for leaving your future self or other devs looking over your code notes.
You can use two forward slashes `//` for single line comments. You can use these for short annotations. (sentence)
You can use `/* example comment */` for multi-line comments. These tend to be more detailed and wouldn't work out well as a single line comment. (paragraphs)
5. In your own words, what is a variable? How would you explain it to a 5 year old?
A variable is kind of like a container that can hold information. Kind of like a box! You can put things into it, and take things out of it, but you can also move it around to wherever you might need it.
6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
Using Reddit for example, they probably use variables for a user's name (a string), a user's cake day (when their account was created, probably a number), and their karma count (kind of like Facebook's likes, which is also probably a number).
7. In your own words, explain what concatenation is.
Concatenation is a way of combining data types together in a string. You can combine strings, variables, numbers etc. together using the + operator, and get a string returned to you with the combined information.
8. Think of a site or app you use frequently. Where do you think the developers used concatenation?
When I log into Scribd, I get a nice message greeting me with my inputted name. I think concatenation was used here to combine the string "Welcome back" with the variable that is my name.
Something like `"Welcome back " + userName + "!";`
9. What questions do you still have about the work we've done so far? (not having a question is not an option)
So far interpolation seems much easier as far as syntax goes and I'm wondering when would be an instance that concatenation would be better to use than interpolation.
