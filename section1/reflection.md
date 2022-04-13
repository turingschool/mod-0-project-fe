## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
* After reading the blog posts in Part A, I feel better about forcing myself to ask questions, no matter if I deem the question to be stupid or not. As long as I follow the "How to Ask Questions" gist, I think I'll be on the right track.
* I definitely wait to much time before asking questions. With section 1, I found myself going down a rabbit hole (several actually), before realizing that, perhaps I need to reformulate the question and ask it out loud.

2. What are the data types you learned about in this section? In your own words, define each.
* There are seven data types in JavaScript: number, string, boolean, symbol, object, undefined and null. In section 1, we specifically learned about number, string and boolean.
- **Number** is any number, this includes decimals and negative numbers.
- **String** is any set of letters, numbers or symbols as long as they are wrapped in quotes. A string can be wrapped in one or two quotations marks, but they have to match.
- **Boolean** is a true or false value. Any time a yes or no answer is required, a boolean data type can probably be used.

3. How would you log the string `"Hello World!"` to the console?
var greeting = "Hello World!"
console.log(greeting);

or just

console.log("Hello World!");

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
// Two backslashes are used for a single line of
/* If you want to comment out multiple lines of code, you can use a backslash followed by an asterisk and then wrap the code with an asterisk followed by a backslash. */
* The are multiple reasons for code comments. We try to write code as clearly as possible, but sometimes it requires a little extra explanation. Sometimes we use comments to organize code into sections. Sometimes we want to comment out a piece of code because we're testing another function or something isn't working.

5. In your own words, what is a variable? How would you explain it to a 5 year old?
* A variable is like a box that allows you to put something in it. We call that something an object. Once you know what or decide what that object is you can name it. Once you've give it a name you can declare it or give it a value. For example, I can make a variable an animal by saying `var animal`, then I have to decide what that animal is. The animal can be anything I decide. Let's make the animal a panda by saying `var animal = "panda"`.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
* I frequently visit the New York Times, both in app form and the website. Three variables and the data types each probably uses are:
1. `var weather = 65`. This is would be a **Number** data type - the weather and date are always up to date.
2. `var name = ""` if empty = false, `var name = "Dinne"` else is true. This would be a **Boolean** - the login would take you through a true/false set of else/ statements. There is a quiz feature for example, when you answer the question, it prompts you through the next question, by going through true/false.
3. `var message = "Congratulations"`. You get a "congratulations" when you finish the quiz, this is a **String**

7. In your own words, explain what concatenation is.
* Concatenation is adding two or more strings together into one string.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?
* I often peruse a clothing site called Lulus. One of the places the developers probably used concatenation is in the greeting. When you've signed into the site an alert pops up "Hi Dinne!" Imagine the code goes something like this.

 `var firstName = "Dinne";`
 `var lastName = "Kopelevich";`

 `console.log("Hi" + " " + firstName + "!")`

 Or they use interpolation istead.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)
* Why exactly do we use pull requests instead of just pushing our work up to the main branch and then having our partner change from there?
* How exactly do we save a variable? I s it always necessary for a variable to change.
* Why do we initially have to have to assign a value to a boolean data type?
