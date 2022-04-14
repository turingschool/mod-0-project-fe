## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

    * After reading the blog post from part A, I discovered that yes you may think your question is dumb but the best thing to do is ASK! For me I have noticed that I usually have the "I want to figure it out on my own" attitude, and I spend to much time going down the rabbit hole so to speak. I also am somewhat in between with what I do when I'm looking for help sometimes writing out the question does lead me to the answer, other times I have to reach out to others. I want to work on learning the reason why, instead of just searching for the answer.

2. What are the data types you learned about in this section? In your own words, define each.
    * The first data type I learned was String. String variables are any series of characters
    between quotation marks. Ex. "hunter" is the string.

  ```javascript
  var name = "Hunter"
  ```
  * The second data type I learned was number. This would include any positive or negative numbers, as well as any simple math problems. Ex. 21 would be the number data.

  ```javascript
  var age = 21;
  ```
  * The third data type we learned was Boolean. This data type refers to true false answers. Ex. "attendClass" I either did attend class or I did not attend, so you could use Boolean to say attendclass = `true` which would represent attending class.

  ```javascript
  var attendClass = true
  ```
3. How would you log the string `"Hello World!"` to the console?

  ``` javascript
  console.log("Hello World!");
  ```
  or
  ``` javascript
  var message = "Hello World!";
  console.log(message)
  ```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

  * The character's you would use are `//`. The purpose of this is to hide the text from the code reader. This allows developers to use annotation and leave comments regarding pieces of code. You can also highlight a sentence or piece of code and use `command + /`.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

  * If all your legos are spread out on the ground and we wanted to make sure we didn't lose any of them what would you do? You would place them all in a container. That way you could keep track of them and re use them correct? We will call this container the variable. Now what if that box was stored in your closet, wouldn't you want to be able to tell what it was? We can put a label on the container called legosBox, this will be the variable name. Now your legos are stored away, and you can bring them out and play with them whenever you want.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

  * Trello; specifically the log on screen. When you type in your email, this data could be stored as a string. The password could be a Boolean, because it is either correct or not. A data number could be used as a two-factor authentication, that needs to be used to log on.

7. In your own words, explain what concatenation is.

  * Concatenation is a term used by programmers that means to join together. You can use concatenation to call multiple variables together, in order to display them in one message.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

  * I often use the NHL app, and they have a section where they display all the games times and scores for that given day. I think they could use concatenation to display each team together, and each of their scores. They would have the teams stored, such that they could easily change the match up each day. The scores would be stored as numbers and updates as well, and all strung together to display in the game and score in one area.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

  * One question I have was from the concatenate and interpolation exercises. I am still confused on what the data output `console.log("My zoo has " + numberOfCreatures + " " + creatures + "!")` produces. I know that it is showing a quantity so I believe that would be number, but can it also be displaying string data?
