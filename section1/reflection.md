## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I feel like I do a good job of waiting once a question pops into my head. On occasion, the question will be answered by the instructor before we move on. If it seems like the instructor is going to move on before answering my question, I will then put my hand up.

2. What are the data types you learned about in this section? In your own words, define each.

Strings - wrapped with quotes, this data type is used to log phrases with words, but can also use numbers or other characters.
Numbers - all numbers, including negative. Applies mathematical values to a variable.
Booleans - Used for true/false statements.

3. How would you log the string `"Hello World!"` to the console?

var phrase = "Hello World!"
console.log(`${phrase}`);

not sure why this isn't formatting in proper code, but this is the same thing I did in the exercises.

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

You use //. Everything that follows will not be included in the codebase. Code comments give us an opportunity to expand upon our logic for other developers to understand while collaborating.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is a store of information to represent another value. If you have 2 dogs, a cat, and a bird, you can use the variable pets to represent all of them. So, instead of listing out all the pets you have every time, you just have to say "I have pets". It's like giving someone the whole Pringles can instead of one chip at a time.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

CBS Fantasy Baseball app. Likely vars are

var totalPoints = player1Points + player2Points + ... -shows the total points your team has scored so far. Uses numbers data type.

var teamName = "Name of team typed in by person" -shows the chosen name of the team by the owner. Uses string data type.

var currentlyWinning = true or false -shows if you are winning or losing your current matchup. Uses boolean data type.

7. In your own words, explain what concatenation is.

concatenation is utilitizing pre-defined varibles within a string to create a cohesive phrase.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

For restaurants using Toast, they can calculate raw revenue by defining a variable representing price for a food item, and a second variable representing quantity. You can then use concatenation to multiply the two together to get raw revenue, while still allowing the variable for quantity to be changeable.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)
I'm not entirely sure if I am coding booleans correctly. I can get it to read out true or false when noding the file, but I'm not sure how to input a true or false function into a variable. Could we cover more of that in mod0?
