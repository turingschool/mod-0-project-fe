## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

 *Mentioned in the blog, "When you see mistakes as critical to learning, you won't feel discouraged when you make a mistake." This statement is so true! Viewing mistakes more as opportunities to grow removes the stigma of "failure".*

 *I often need to remind myself that seeking help is not a sign of weakness. I appreciate how the article emphasized being unafraid to ask for help is a strength. Not only can you learn from others, but improve the efficiency of your work!*

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

 *I currently demonstrate a Growth Mindset with my problem-solving skills. By learning to read error messages and trial possible solutions, I've been able to manage "roadblocks" in my homework assignments/practice. Unfortunately, once I find a strategy that works, I get comfortable and stick with it. I need to learn to push my limits to expand my tool box/methods.*     

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

*It made me feel uneasy, initially. However, I knew where to look to remind myself how to run a file in node and I was able to figure out what the exercise directions/questions were asking by using context clues. It took a moment, but once I understood, it gave me the reassurance I needed.*

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

  *A conditional statement is based on a a concept of if/then/else; if a condition is met, then your code executes one or more statements, else your code does something different (or just skips the step.)*

  ```javascript
  var personAge = 21;

  if (personAge >= 18) {
    console.log("The person can vote");
  } else if (personAge < 18){
    console.log("The person cannot vote");
  }```

 ```javascript
 var hour = 1800;

 if (hour >= 1700) {
   console.log("Good evening, lkarpins!");
 } else if (hour < 1700) {
   console.log("Good day, lkarpins!")
 }
```


5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

  *To add multiple conditions to an `if` statement, you need to add _else...if_/_else_ statements. The program will evaluate the initial condition and if it's false, it will move to the next statement. Only one section of the _if/if...else/else_ structure can have its instructions run. If the `if` statement is true, for instance, Javascript will not bother to look at the _else if_ or _else_. Only one block executes.*

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

  *Logical operators allow you to compare the results of more than one comparison operator. 'Logical and' (&&) tests more than one condition, while 'logical or' tests at least one condition.*

7. What questions do you still have about `if` statements and/or functions?

  *No questions at the moment, but I'm sure they will arise as I learn more.*
