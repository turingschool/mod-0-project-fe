## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I tend to wait too long. I hesitate because I don't want to sound stupid, even though
I know I'm not expected to know everything yet and someone probably has same question as me.
So my goal moving forward is to ask at least one question per session, either in person or on Slack.

2. What are the data types you learned about in this section? In your own words, define each.
In this section I learned about:
* **Numbers**
* **Strings**
* **Booleans**

**Numbers** are pretty self-explanatory, they are any numbers/integers, including negatives and decimals. No need to use commas for larger numbers.

**Strings** are found within quotation marks, can use either single or double quotes.
They contain letters and other characters, including numbers, emojis, special characters.
Basically whatever is inside closed quotation marks.

**Booleans** are a way to ask your computer to answer true or false statements or yes/no
questions. You use comparison operators such as === (equals), != (not equals), > (greater than),
< (less than).
3. How would you log the string `"Hello World!"` to the console?
```javascript
console.log('Hello World!');
```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
Use // to indicate comments in JS file. Comments allow you to leave notes for yourself
or whoever else is working on the code to add info/notes to your code. They also
can be used to temporarily deactivate parts of the code you don't necessarily want to run.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is a way to represent a value or data. They're a placeholder for anything
you want to assign value to.

 So say you wanted to write a story about your favorite color, which is green, but you
 know that sometimes your favorite color can be blue. So in this case, your variable could
 start by naming your variable, in this case
 ```javascript
 var favoriteColor;
  ```
  and you could then say
```javascript
 var favoriteColor = "green";
```
You would then write your story using favoriteColor any time you were talking about your favorite color.
If you decided your favorite color was blue, all you need to do is go back to where you said that
```javascript
  var favoriteColor = "green";
```
  and change it to
```javascript
var favoriteColor = "blue";
```
  and it would
 change all the times you mentioned your favorite color to say blue instead of green.

 I'm probably addressing a very precocious five year old, but I hope this works as
 an example!


6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

 An app I use frequently is Dayforce, for my work schedule.
 There is probably a variable for hours I work, if a shift is available or not,
 and a variable for time off I accrue
 The variable for hours worked is a number.
 The variable for time off is a number, based on a percentage of what I earn in a week.
 The variable for an available shift is probably a boolean, that will lead to the
 display of a triangle icon if a shift is available or a circle if it's been picked up.

7. In your own words, explain what concatenation is.
A concatenation is a way to join variables or strings together. To do this, you
use the plus sign or plus operator (+).
8. Think of a site or app you use frequently. Where do you think the developers used concatenation?
I use a habit building app that will populate my progress over time. So for
example, it will say "Congrats, Emma, you've done yoga 12 times this month!".
So the develops concatenated my name, the activity I chose to log, and the amount
of times I logged doing that activity over the month.  
9. What questions do you still have about the work we've done so far? (not having a question is not an option)
When you reassign value to a variable, do you have to go back and edit it, or does
reassigning in a new line overwrite whatever assignment you made before? Also want
to get a better grasp of booleans within a script, which I'm sure I'll get plenty of
practice with! 
