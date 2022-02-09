## Section 1 Reflection

### 1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I feel fairly comfortable asking questions. In my current job, I need to ask my team questions often due to frequent process changes. I sometimes wait too long to ask questions. I generally try to find answers on my own, but sometimes I lose track of time, and before I know it, I've spent way too much time researching. I really like the idea of setting a time limit for how long I research on my own. I think that will keep me on track at Turing.




### 2. What are the data types you learned about in this section? In your own words, define each.

   Today, I learned about strings, booleans, and numbers.

   - **_Strings_** show a series of characters just as they are listed between quotation marks. For example, "Hello!" would display Hello! in the console, exactly how it appears between those quotation marks. A string value is a way to replicate a 'string' of characters exactly. Even if I had "95", it would be a categorized as a string instead of a number since it is wrapped in quotes and is therefore interpreted as a 'string' of characters.
    
       - Example: `var greeting= "Howdy partner!";`

   - **_Numbers_** are simply numerical values such as 1, 2, 42, 394, etc. These values can be manipulated using operators.
    
       - Example: `var units= 1;`

   - **_Booleans_** are values that display if something is true or false in the console. For example, if I ran console.log(1 === 1), the console would show true, since 1 is equal to 1. Booleans are helpful for situations that require a yes or no answer.
    
        - Example: If I run `console.log(7 < 6);` the console will display false because 7 is not less than 6.




### 3. How would you log the string `"Hello World!"` to the console?

   `console.log("Hello World!");`




### 4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

   The purpose of a comment is to explain what the code is doing, especially if it is not evident in the code itself. A code comment would be useful if a piece of code is more complex, and requires some further explanation by the developer who wrote the code. 
    
   To indicate a comment, I would add two forward slashes to the code.
    
    
   `//This is the the correct format for a comment.`
    
   A comment is also a way to deactivate code. See example below.
    
   `//console.log("This code would not run because it is commented out");`
    
   Or:
    
   `/* For a longer comment, this way might be easier. */ `


### 5. In your own words, what is a variable? How would you explain it to a 5 year old?

   A variable is a piece of code that holds a value. That value can be changed or it can stay the same.
   Variables allow us to use these values in multiple places in our code without telling the computer what the value is
   over and over again.   

   If I were going to explain this to a 5 year old, I'd say that a variable is like a special talking box. You can put a
   thing in the box, and then if you call the box, it will tell you what thing it is holding. You can put a number in the box, and when you call it, it will tell    you the number. You can even ask the box a question like "is 3 greater than 2" and it will tell you if the answer is true or false.

   You can have many many many boxes, and they all have different names. Let's say I have a box called "favoriteColor". I can tell that box my favorite color is purple. When I call the box by its name, favoriteColor, it will tell me purple! But what if I decide I don't like purple anymore? I can tell the box my new favorite color, blue. The next time I call favoriteColor, the box will tell me blue. You can always change the thing that's in the box.




### 6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

   I use a daycare app called Tadpoles. Basically, this app keeps track of my daughter's meals, naps, etc. When I open the app, I see that there are headings that are static. For example, one heading shows DAILY REPORT. Under the DAILY REPORT heading, it shows the current date. I think that the DAILY REPORT is just a string that never changes.

   In order to access the app, I need to sign in. I'd imagine that the user name and password fields use booleans. If the user name and passwords match (are true) then I can access the rest of the app. I'm not sure exactly how these work yet, but I think it must be related to booleans checking if the values match in some way.

   I don't see any examples of numbers in this app, at least on the surface. However, I did look at another app I use often, Pokemon Go. In this app, it shows a number to display how many poke balls a player has. It does the same thing with great balls and ultra balls. It displays a picture of a poke ball, and then a number indicating how many I have availiable. As I use them, the number decreases. I imagine this looks something like this: `var pokeballs = 12;`.




### 7. In your own words, explain what concatenation is.

   **_Concatenation_** is a way to fill in the blanks in a string with specific values using the + sign.
    If I want to show "Good morning" and a user's name when they open an app, I could use concatenation. It would look something like this:
   ```javascript
   var userName = "Alex";
   console.log("Good morning " + userName + "!");
   ```

   I could also add a number and through concatenation it will be integrated into the string.




### 8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

   The same Tadpoles app that I use for daycare uses concatenation. There is a section on the main page of the app that reads, "Hi, Sadie's family." My daughter's name is Sadie, which is stored in a variable somewhere. I imagine that the code looks something like this: `console.log("Hi, + childsName + "'s family.");` This will be different for every family.



### 9. What questions do you still have about the work we've done so far? (not having a question is not an option)

   I would like a little more context about booleans and how they can be used. I have a lot more questions after looking at some apps that I have on my phone. I understand how variables work when I'm working in the terminal, but its hard for me to look at an app and identify them. It was pretty easy for me to find an example of concatenation, but booleans and even strings were more difficult for me to pick out. I guess my question is-- how do I look at an app and hypothesize what is going on behind the scenes as it pertains to data types like strings and numbers?
