## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

- **The idea of two mindsets that people find themselves in.** People are either in a fixed mindset or growth mindset. In a fixed mindset, you believe that whatever you've been given is what you'll always have and always be. Whereas in a growth mindset, you believe you are more malleable and are not condemned to what you think you are. *(from the video)*
- **Be a challenge seeker.** Growth happens when you are willing to take on challenges, whether you overcome it or not - it's the willingness to do it for sake of learning. This really resonated with me because I am typically conflict and challenge avoidant. I find that I am very hard on myself if I can't solve something or overcome a challenge, so I typically take the path of least resistant. This is something I will absolutely dedicate myself to changing while at Turing. *(from blog post)*

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

- I've always been good about *correcting and understanding my mistakes*, which is crucial to a growth mindset. I do fall short when it comes to *seeking out challenges and asking for help*. I think this stems from a fear of failure. I think I can overcome this fear by recognizing it, acknowledge it, then disprove it by actually finding joy in a challenge and seeking out help.

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

- I was initially thrown off because I thought I had missed something. Once I realized the omission was intentional, I was okay with it.  I think by having some of the training wheels come off, I have to rely on other resources. So instead of just following a set of instructions,
I tried to recall what I could from memory. Otherwise I would refer to my notes.

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

- A conditional statement is a statement with the form 'if...then...'. It checks to see if the 'if' condition is met, then the 'then' condition happens.
- For example: **if** I don't do my homework, **then** I will not pass.
- I am sure web applications like GMAIL have an 'if...then...' statement coded in when checking for the correct password. **If** the password is
correct, **then** let the user in. Maybe there is an **else** statement that it defaults to if the conditional isn't met. So if the user types in the wrong password then they're not let into the email account and are instead redirected to the login page with a statement saying 'wrong password'.

5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

**You can check multiple conditions within ONE `if` statement by using the logical operators || (OR) or && (AND):**
```js
// The following lines of code will tell us if we should or should not own a cat
var catsOwned = 10;
var catsNeeded = 2;
var sufficientIncome = false;

if ((catsOwned <= catsNeeded) && (sufficientIncome == true)) {
  console.log("You need more cats!!!");
}
else if ((catsOwned > catsNeeded) && (sufficientIncome == true)) {
  console.log("You have too many cats!!!");
}
else {
  console.log("You should not any have cats...");
}
```
- The program reads the code block above by checking the first if condition to see `if` the condition as a whole resolves as true or false. If it's true then it executes whatever is between the brackets, otherwise it moves on to the next `if` statement. For the && logical operator the program checks to see if the statement to the left and the right resolve as true or false. For the whole statement to resolve as true, we need to get true && true, otherwise it's false. In the case above, the program would resolve `catsOwned <= catsNeeded` as false and so the whole statement would resolve as false ( we get a false && true case). Then the program moves on to the else if statement and determines that we have a true && true case and executes the code within its braces. The final result would print `"You have too many cats!!!"` to our terminal.
<br>

**To check for different conditions with different results, you can have cascading `if` statements (an if-else if-else code block):**
```js
// First condition - check if some statement is true
if (statement) {
  // if true, then execute whatever is in here
}
// Second condition - check if some other statement is true
else if (statement) {
  // if true, then execute whatever is in here
}
// Third condition -  check if some other OTHER statement is true
else if (statement) {
  // if true, then execute whatever is in here
}
// ...
// Keep adding else if(statement) to add more conditions...
// ...
// Else is our 'default' condition if all other conditions are not fulfilled
else {
  // execute whatever is in here
}
```
- The program above reads the above program by checking if the first `if` statement evaluates as true. If it does, then it executes whatever is between its brackets - otherwise it checks to see what to do if the statement evaluates to false by moving to the `if else` statement, but if it's not present then it will eventually default to the `else` statement and execute whatever is between those brackets.

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
- You can use a flow-chart to visualize what things look like, but you can also check what each condition resolves as (either true or false) independently by printing out the conditions on separate lines.

7. What questions do you still have about `if` statements and/or functions?
- I am curious if there is such a thing as too many `if` statements? I feel like in something like a video game it's mostly `if` statements or
conditions - so the code must look like a mess of `if`. Is there a more efficient way to use them?
