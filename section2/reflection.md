## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

* One of the points that resonated with me the most is viewing mistakes as a critical part of learning something new and not something to be discouraged by or avoided. I understand that when learning code, a concept that is new to me, I will struggle with certain things and make a lot of mistakes. But I will only be successful if I persevere through those struggles and mistakes.

* Another point that resonated with me was the concept of S.M.A.R.T. goal setting. I think it will be very beneficial to set specific, achievable, and time-focused goals while learning coding. This allows you to track progress and hold yourself accountable for learning different topics. It also can help with motivation because it allows you to see a clear path of progress while learning.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

* I currently demonstrate a Growth Mindset by not being overly critical of myself when I make mistakes or struggle to understand something at first. I know that with enough practice and maybe seeing things from another perspective when I'm stuck that I'm just as capable as anyone else to learn this material. I haven't employed the S.M.A.R.T. goals method before. But I see how it can be a very beneficial way to help hold myself accountable for learning and focus. As well as motivating to be able to see progress by setting specific goals and achieving them.

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

* It felt natural to me. I hadn't even realized that the directions had become more vague until this question. I didn't have a problem with any of the directions while doing the exercises. I didn't have much of a problem with with using the node command. I might have liked to understand what it is exactly. But it worked fine for checking my JavaScript while completing the exercises.

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

* A conditional statement is used to make a decision, usually with the response as a boolean true/false.
* A daily life conditional would be the process to decide what to wear in the morning before leaving. You would check to see if it will rain. If not you'd leave your rain coat. Will it be cold? if so maybe you bring a sweater. Will it be warm later in the afternoon? If so maybe you wear a layer under the sweater so you can remove it when it gets hot.
* A conditional that is probably used on the website facebook for logging in could be something like

```JavaScript
var username = 'name-apellido'
var password = 'abcde'

if (username = 'name-apellido' && password = 'abcde') {
console.log ('log in complete, please wait');
} else if (username = 'name-apellido' && password !== 'abcde') {
  console.log('password incorrect, please try again!');
} else if (username !== 'name-apellido' && password = 'abcde') {
console.log('username incorrect, please try again!');
} else {
  console.log('information incorrect. if you need help remembering click this link')
}
```

5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

* You add multiple conditions to an `if` statement by doing and `if/else if/else format`. In this format the computer will look at the first statement 'if....' and if it is determined to be true it will run just that section of code. If is it not true then it will check the next line. If that is evaluated and false then it moves onto the next line. This process continues until there is a condition that is met where the code is run. If none of the `else if` conditions are met then the computer will run the code for `else` at the end of the statement.

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

*   The tools that are available if you want to check that two conditions are met are logical operators. More specifically the `&&` (and) logical operator. This will check if one variable and the other are true or not. If you wanted to check that that 1 of 2 conditions are met you would use the logical operator `||` (or). This will check whether one variable, or the other, or both are true or not.

7. What questions do you still have about `if` statements and/or functions?

I feel pretty confident with my understanding of conditionals and comparison operators up to this point. But, I still have questions about the use of logical operators. I understand the concept of them. How the `&&` operator basically checks whether multiple variables meet their conditions. And the `||` operator checks whether any of variables meet their conditions. But, I'm still not very clear with what they look like in real life examples in web applications.
