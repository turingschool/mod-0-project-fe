## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?
  1. In the video, the guest Carmen talked about the myth of the brilliant software engineer. I realized that this stereotype is one I have held regarding computer engineers my whole adult life. I never believed that I was smart or capable enough to be a software engineer. When I applied to Turing I didn't think I would be able to get in and I still have doubts about whether I should be here even though I really am enjoying the program. Its comforting to know this feeling is a shared one even with a successful engineer like Carmen who has been in the industry for several years.
  2. I was unfamiliar with the Growth mindset concept as an established psychological principle. I have come across principles of a growth mindset before but this is the first time I have seen them laid out as a unified concept. One of articles stated outcomes is those with a growth mindset are more accepting of critical feedback. I have struggled with critical accepting feedback throughout my life. While practicing the growth mindset I will try to assess how I deal with feedback going forward.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?
  * One way I do demonstrate a growth mindset is my consistent appetite for learning new things. However, I do have a tendency to compare myself to other people too much instead of focusing on my own relative growth.

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?
  * I liked having some of the supports removed. I added a code comment with the node line at the beginning of each exercises so that I could easily copy it if I lost it. Although as I am writing this perhaps I should have written it out each time for practice 🤦‍♂️. I liked having to figure out I was supposed to use logical operators for the last part of the if-statements exercise. I love puzzles and problem solving so it was a treat for me to figure things out!

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
  * A conditional statement analyzes factors, variables, or data to evaluate whether that statement is `true` or `false`. "I have enough time to shower" could be evaluated true or false based on the amount of time I have to take said shower and how long it takes me to take a shower. When logging into my bank account online my success of getting into my account is conditional on me providing the correct password. If I type my password in wrong it will ask me to try again or reset my password.

5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
  * A programmer can use `else` and/or `else if` to add multiple conditions to an `if` statement. The program reads the first `if` statement and evaluates it. If it evaluates this first statement to be `true` the program stops there, doesn't  evaluate any of the `else` or `else if` in that code block, and continues on with the script. However, if the `if` statement is `false` then JavaScript will continue to evaluate the sequence of `else`/`else if` statements until it reaches a true statement at which point it will continue on with the script. The `else` keyword is used when no appropriate `if` statements are logged in which case JavaScript will use the code associated with this `else`. A good example of this was the `if` chain for the bear where if no inputs were logged you became best friends with the bear:
  ```JavaScript
  var bearChoice = 1;
  var bearClothing = "Puffy Jacket"

  if (bearChoice === 1) {
    console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
  } else if (bearChoice === 2) {
    console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
  } else if (bearChoice === 3) {
    console.log("You run as fast as you can into the next room. It's full of snakes!");
  }   else {
      console.log("You stay with the bear and become it's best friend!");
  }
  ```

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
  * Logical operators allow us to check multiple conditions. `&&` checks if both statements are `true` or `false`, while the `||` checks if at least 1 of 2 conditions are met.

7. What questions do you still have about `if` statements and/or functions?
  * I understand the difference between `==` and `===` with the latter meaning strictly equal to including the data type and data. However this led to a question regard `>=` and `<=`. Do these comparison operators mean strictly equal to or just equal to and data type doesn't matter?
  * I read in the book that sometimes lines of code do not run in the order that we expect them. There was an example of this using an `if` statement and I honestly did not understand it although there were some principles that we have not covered yet.
