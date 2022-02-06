## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?
- I like the idea of setting S.M.A.R.T. goals to keep my goals within reach, and make them a little more objective rather than airy and hard to pin down. Things like “get done with HW4 by noon on Tuesday” vs. “Become comfortable using Javascript” 
The first is objectively done or not done, has a date I want to get it done by, and is specific. The second is a little more airy. How do you measure comfortability? When do you want to get this done by? It leaves too many questions to be an achievable goal.
- I love learning new things, and the idea that there’s always room to grow made me happy to see in the article. In learning programming, I know that there’s always going to be new programs, frameworks and ideas being created. This will open doors to lifelong learning and I just find that so fulfilling and wonderful.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?
- I think I demonstrate a growth mindset by always being curious and pushing myself to learn new things.
- I think I don’t demonstrate this when I get very overwhelmed at a large problem. Sometimes it’s hard to get back on the horse and keep going when something feels a little too daunting for comfort. Growth mindset seems all about getting out of your comfort zone, but still being compassionate to yourself.

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

It felt challenging, but it was *exciting*. I got uncomfortable figuring out what to do at first, especially with all the new vocabulary, but as soon as I jotted all the vocab down in my notes, I was able to understand it much better and apply it to the exercises. I think this greatly supported my learning as I was able to really understand what these new words meant in my own context, leading to a deeper/more personal understanding.

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
A conditional statement is something that evaluates if a certain condition is `true`.

In real life this could be asking if you're hungry.

For example
> ```javascript
> var hunger = true
> if (hunger) {
> console.log("Get you a sandwich!");
> } else {
> console.log("You're nut hungry, but maybe have a little glass of water.");
> };



A website might ask you to input your name into a form, and if you don't, they might ask you to input it again.

For example
> ```javascript
> var userName = "Cyanne Jones";
> if (userName === "") {
> console.log("Please enter your name!");
> } else {
> console.log(`Welcome back ${userName}!`);
> };

5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
When you need to evaluate multiple conditions in a single statement, you use else...if statements. These work by evaluating one statement after another, evaluating from first to last. If a condition evaluates true, the conditions that follow aren't evaluated at all.
They are used like if...else statements, but with else if statements in between the first if statement and the last else statement.
For example
> ```javascript
> if (conditionVariable === 1) {
> console.log("This code runs if the variable has been assigned the value of 1");
> } else if (conditionVariable === 2) {
> console.log("This code runs if the variable has been assigned the value of 2.");
> } else {
> console.log("This code will run only if the variable has been assigned any other value than 1 or 2");
> };

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

If you want to check if two conditions are met, you'll use the `&&` operator in your conditional statement.
> `((condition1 === true) && (condition2 === true))`

If you want to check that one or the other is met, you can use the `||` operator in your conditional statement.
> `((condition1 === true) || (condition2 === true))`

Or you can use an if...else statement to check one condition before the other if that makes more sense.
> ``` javascript
>  if (condition1) {
> console.log("Run this code if condition 1 is true.");
> } else if (condition2) {
> console.log("Run this code if condition 1 wasn't true, but condition 2 is.");
> } else {
> console.log("Run this code if neither condition 1 or 2 is true");
> };

7. What questions do you still have about `if` statements and/or functions?

I'm not sure if I have any other questions, I've practiced with these statements before quite a bit and feel comfortable using them. If anything I'm excited to get into using the `switch` keyword to make this process much more streamlined!
