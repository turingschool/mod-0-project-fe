## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

* I had never heard of the **SMART** approach to accomplishing goals.
S- Specific
M- Measurable
A- Achievable
R- Relevant
T- Timely
  - Breakdown code/learning into manageable sub-goals and apply this approach
* The part about mistakes being essential to learning definitely resonated with me.
  - Test a line of code, iterate, test again, repeat until it reaches a solution that you are satisfied with.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

* I definitely have a growth mindset in that I believe we can always grow/change our skill set
  - Awareness is a huge component of having a growth mindset
* I struggle with having a growth mindset in that I sometimes don't like asking Questions
  - Constructive feedback is helpful to our learning and I am still working on accepting that

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

* At first I forgot where the directions were in order to run a file in the Terminal so I opened dev tools using `cmd + opt + i` and ran the code there instead of the Terminal as I was going through the exercises.  

*  By eliminating some of the directions in subsequent exercises it forces you to think on your own, which isn't always comfortable.  I eventually found the directions for how to run a file in node on the Terminal.  
*  I'm also learning how to use Google to search for answers when I am stuck as well as looking into the book, *JavaScript & JQuery*

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

* Conditional Statement - used to decide the flow of execution based on different conditions

  - Daily life condition - "If it is Friday I will wear jeans else/otherwise I will wear khakis"

  - Web application condition - //GIVE AN EXAMPLE//

5. How do you add multiple conditions to an `if` statement? In your own words, explain how the program reads them and determines what to do.

* Use the `else if` command in the code block
  - The program will read the first line of code and based on whether the condition evaluates as **true** or **false** it will either execute or ignore and move to the next line.  
  - Here is an example of this workflow:

``if (condition1) {
  //block of code executes if condition1 evaluates to true
} else if (condition2) {
  //block of code executes if condition1 evaluates to false and condition2 evaluates true
} else if (condition3) {
  //block of code executes if condition1 and condition2 evaluate to false
  //condition3 evaluates to true
} else {
  //block of code executes if none of conditions above evaluate to true  
};``

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

- _Logical Operators_ Compare two or more values and return a boolean value (true/false)

  1.  `&&` - compare the results of more than one (both conditions have to be met) in order for it to be **true**
  2. `||` - test at least one result (one condition has to be met) in order for it to be **true**

7. What questions do you still have about `if` statements and/or functions?

* What would nested `if` statements look like?  In other words, an `if` statement within an `if` statement?
