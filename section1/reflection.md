## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

  I like to think I'm somewhere in between. I enjoy finding my own answers but I'm pretty cognitive of time constraints so if I'm in the tank for too long I'll find someone to ask.

2. What are the data types you learned about in this section? In your own words, define each.

  - `numerical` = A data type that is a number. It can be a negative,  positive or a decimal. It can not be a fraction or contain commas.
  - `string` = A string is a data type that is wrapped in ether single or double quotes (can be ether but the start and end must match) it can consist of numbers, letters and some symbols. There are some symbols that need special character syntax.
  - `boolean` = This data type compares two operands and determines if the outcome is true or false.  
<br><br>
3. How would you log the string `"Hello World!"` to the console?
  ```
  console.log(\'Hello World!\');
  ```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

  You can use `//` or wrap the text in `/* */` to comment out something in JavaScript. Do this to leave notes about what the code does to yourself and whoever else is reading the code.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

  A variable is like a box that you can put different objects in. If you want to remove the object and replace it with something else you can, but the box will stay the same.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

I'm going to think about my scheduling app I use, Structured. It records when events start and stop. I'd guess it may looks something like:
```
var startTimeHour = 8
var startTimeMinute = 30
var endTimeHour = 10
var endTimeMinute = 30
```

7. In your own words, explain what concatenation is.

  Concatenation is when you take different things, like strings and value names, and join them together using a `+`.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

I like to play an online card game that matches you up with a remote opponent. When you are matched the loding screen displays you and your opponents screen names. I imagine it may look something like this:
```
(firstOpponent + " VS " + secondOpponent);
```

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

- I'm confused about what the definition for an `object` is (from the reading) I googled it and the takeaway I got was that it was any "unordered" letter, number or symbol. In the book, the definition seems more like any thing that can be described. From the books definition I am thinking of it more like a variable.

  *Update* I went back with fresh eyes and re-read the definition for `object` in the book. Now my understanding of it is that it's something like `var` or `console` then the contents in the data type are `parameters`?

- What vocabulary word do I use to describe something like what is being compared in a `boolean`. I used `property` in question 2, but I initially put `object`. I'd like to know if there is an umbrella term to describe the different parts inside a data type, or if you'd just use words like "compares two strings" or "compares two numbers"?

  *Update* I landed on using the vocabulary word operands.

- I'm wondering if I am using the inline code in a way that I shouldn't. For example, like I'm using it in these questions?

- I got ahead of myself with my commits and didn't follow the format outlined in this sections README. I had read the whole README before starting and just forgot. I'll follow the guideline better in the next sections. Will most the assignments have detailed directions on how to make commits?
  *Update* I did end up rebasing so it would have the correct commit message. I know not to rebase after something has been pushed, but since I hadn't pushed yet I thought it would be alright. Hopefully I got it right.
