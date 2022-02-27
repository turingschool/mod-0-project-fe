## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

   - The Zone of Proximal Development was new to me! It's a good term to explain how getting pushed out of your comfort Zone
   can push you to learn.
   - The description of wanting to keep learning and improving programming skills resonated with me. There are so many
   programming languages and styles that you can learn about.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

   - Currently I demonstrate the growth mindset through my ability to make mistakes and learn
   from them.  I appreciate the process and problem solving nature of coding.
   - I struggle with using the S.M.A.R.T goals, often I will make the goals too large
   and unreasonable.  It is hard for me to guess the amount of time and work goes into
   a programming problem.


3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

   I liked it because it had me practice recalling that information.  I got to go back to my notes and make sure I had the correct syntax. It helped me see what syntax wouldn't work or what would still work.

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.  
   A conditional statement involves evaluating whether an argument is present.  If it is then a specific code will run, if not
   then a different code will run.  You might use conditionals for what clothes you choose for the day.  IF it is cold, you might where a sweater, but if its not you wont wear a sweater.  

   Websites like facebook probably use conditionals to determine if its someone's birthday and display a birthday message.  If it is their birthday, a true is returned and results in a happy birthday message.  If not it skips past this code and continues the normal day to day code.

5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

   To add multiple if statements you do the following:

```
if( argument = example){   //The program evaluates this statement first, if it returns true it runs doThisThing();
  doThisThing();
}else if (argument = sample){ //if the previous argument returns false it the next argument here
  doThisOtherThing();        //Here if it returns true it runs doThisOtherThing();
}else{                  // Lastly if the previous argument returned false then it runs doThisLastThing();
  doThisLastThing();
}
```
   If and else if statements determine different conditions that need to be evaluated. Then you can use `else` to define what happens if the arguments tested dont meet the if conditions.  Otherwise if there is no `else` it will just move on past the if statement without running what happens in the if statement.  

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

   As a developer you can use logical operators to check multiple conditions.  
` logical === operator && logical === symbols` is the  "and" making sure both conditions are true to return  true.
`logical === operator || logical === symbols` is the "or" meaning either condition can be true and the statement will return true.

7. What questions do you still have about `if` statements and/or functions?

   Is there a syntax where you can just list conditions to be tested like cases without using the if and if else ?
