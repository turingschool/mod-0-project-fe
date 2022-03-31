## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

The first point that resonated with me was the part about mistakes and how they are essential the to learning process.  I agree with this completely, and have already made a few mistakes in my coding throughout Mod0 that I believe actually lead to a better understanding of the material.  Another point from the blog post that was more of a new concept to me was the S.M.A.R.T. goals.  I want to adopt this mindset when coding because I think it sounds like a very beneficial way to break down a project into different sub-goals and it will make for a very efficient process.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

I would say that I currently demonstrate many of the points that were mentioned in the article.  Some of these include: focusing on the process/reflecting, understanding mistakes are part of the learning process, seeking challenges, and understanding that experience and practice is essential for growth.  Points that I do not yet demonstrate and want to work on improving would be setting SMART goals, and asking for help when I need it.

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

I felt very good about not having as many of those supports.  In most cases, I hardly even noticed that there was less instruction because I feel like I have a good handle on everything so far. There were a few areas where I had to do a quick google search to find a solution, mainly near the end of the if-statements exercises at the part regarding logical operators.  I think having one example of the code is very helpful, but once I see that, I am able to recreate it and then tweak it with my own words and values.

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is a block of code that will return an output that depends on certain conditions that can be modified using variables.  A daily life conditional would be something like a height requirement to ride a roller coaster at a theme park.  _If_ you are `variable` inches tall, you may ride the roller coaster.  _Else_ you may not ride the roller coaster.  A web application that makes use of a conditional is the homepage for [4 Noses Brewing Company](https://www.4nosesbrewing.com/). When you first click that link, a box comes up asking if you are 21 years of age or older.  If you click yes, you enter the website, and if you click no, you are re-directed to the website for Capri-Sun.

5. How do you add multiple conditions to an `if` statement? In your own words, explain how the program reads them and determines what to do.

```javascript
if (variable === x) {
  console.log("This will be printed");
} else if (variable === y) {
  console.log("That will be printed");
} else {
  console.log("These will be printed");
}
```
In the above example, the program will first check if the `variable` is equal to x. If it is, it will print the first result.  If it does not equal x, it will move on to the next line.  If the `variable` is equal to y, it will print the second result.  If neither of the first two `if` statements are true, it will move to the third and final result and print it because I have not set a specific condition for that result.  So if the `variable` is anything besides x or y, it will print the third result.

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

You can add multiple conditions to a single line of an `if` statement by using a logical operator.  These are: and `&&`, or `||`.  When using `&&` the program will require that both statements surrounding the `&&` are true in order to run that line of code.  When using `||` the program only requires that one of the two statements are true.

7. What questions do you still have about `if` statements and/or functions?

I am feeling really good about `if` statements so far.  One question that I do have is about the semi-colons after every `console.log` line. It doesn't seem like these are necessary, as the code runs without error with or without them.  Is this just a "best practice" type of thing? I could understand that with more complicated coding it could help to read and visualize the line breaks, but for something more simple like the exercises we've done so far, is it really necessary?
