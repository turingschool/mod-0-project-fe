## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

  * I feel confident in asking questions and I’ve found it’s the only way I will learn certain things. For the most part, I like to explore topics on my own as much as I can until I reach a deficit in my knowledge or ability to grasp a concept.
  * Through a lot of trial and error in my personal and professional life, I have a pretty good idea of when to ask questions. If anything, I will tend to I ask questions too late because I am afraid of asking too early/worried that I am just overlooking some tiny detail that is the key to my problem. The person I’m asking the question to will also have some impact on my behavior- I’m sure we have all experienced someone getting annoyed with us for asking a question and will make you feel bad/stupid for asking certain questions. Getting over that fear and accepting the other person’s response is something I still struggle with, but my drive to learn typically trumps that fear.

2. What are the data types you learned about in this section? In your own words, define each.

  **String**- Works with letters and other characters to convey the text elements of a webpage or other application in JavaScript. The letters and characters in a string you want to add to a project are enclosed in double or single quotes (“” or ‘’).

  **Number**- Assigns number values to variables. Can use negative numbers (ex: -5) or decimals  (0.25) but when writing bigger number values, you do not include a comma (ex: 1234 instead of 1,234)

  **Boolean**- Expresses true/false or yes/no values. Can help determine which part of a script will run initiated by user input or some other event.


3. How would you log the string `"Hello World!"` to the console?

  ```
  Var openingLine = “Hello World!”
  console.log.(openingLine);
  ```


4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

  - Using double backslashes **//** at the beginning of a line denotes a single line comment and using **/*"Comment goes here"*/** around your comment text denotes a multi-line comment. The comment characters essentially remove JavaScript formatting for text input so the text from the comment does not affect the outcome of the code you wrote. Code comments let other developers see what you adjusted/edited in each version of a project you’re collaborating on and why changes have been made.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

  - To a 5 year old, I would tell them a variable is something that can impact the outcome of something else depending on how you interact with it.

    * Ex: When you are playing a game on your mom's phone, if you win the game, it will show you the button to go to the next level. If you lose, it will show you a different button, letting you choose to try again. The variable is whether or not you win and the outcome is getting to move on to the next level or not.


6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

  **Spotify** uses multiple variables to display information about a playlist:
  * *Playlist Duration* - uses *string and number* data types (ex. 2h 53m)
  * *Number of Likes* - uses the *number* data type
  * */Name of playlist* - uses the *string* data type

7. In your own words, explain what concatenation is.

  - **Concatenation** is the process of combining multiple strings of variables separately, using *type coercion* if multiple data types are present which will help combine strings of different data types into one string.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

  On **Amazon**, on the shipping details page for an order, it displays my City *(string data)* and the Zip Code *(number data)* after it on the same line. *Type coercion* via **concatenation** makes it possible to show these two different data types together in the same string.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

  Why would you concatenate strings when interpolation uses less steps and is easier to format and read? Are there specific instances where it’s more advantageous to concatenate **or** where you cannot interpolate certain data types/strings?

  ![thinking hard](https://www.dictionary.com/e/wp-content/uploads/2018/03/Thinking_Face_Emoji-Emoji-Island.png "Pontificating")
