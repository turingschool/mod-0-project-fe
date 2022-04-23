## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

  1: I'm familiar with the concept of a growth mindset from my participation in competitive fighting games and trying to improve efficiently at them; that particular community is full of Growth Mindset gurus and it's a common topic of conversation. What I was less familiar with is the concept of a fixed mindset, the growth mindset's evil twin. Being extremely risk-averse and petrified of failure, I am susceptible to fixed mindset decision making. Replacing fixed mindset habits with growth mindset equivalents is one of my biggest goals this year and it's going to be essential to climb above mediocrity in all of my areas of interest.  

  2: I haven't heard the term "S.M.A.R.T. Goals" in years. I was never taught this method directly but I've heard people reference it before. Specific, Measurable, Achievable, Relevant, and Time-Bound are all great metrics for ensuring a goal is likely to be met and I plan to incorporate this framework into my decision making.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

  * I demonstrate a growth mindset by being unafraid to search through resources when confronted with an error or formatting issue that I don't understand, by building my skillset gradually and connecting new techniques to my existing knowledge-base and by being patient with myself when I make mistakes (something I struggle with immensely in other more familiar areas of life). I do not demonstrate a growth mindset by setting S.M.A.R.T. Goals (yet) and I definitely need to review things more.

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

..* It felt fine, I was able to return to earlier resources with more explicit instructions the first time I needed to run `node directory/filename.js` and it felt satisfying to implement it in subsequent sections without need to review. I like it because it takes a way the training wheels, it ensures that I have it memorized.  

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

..* A conditional is code that uses `if,` `else if` and `else` to evaluate a (or multiple) condition(s). If one of the conditions is met, the code associated with it is executed and none of the subsequent conditions are executed.   

..* **Example:** If the forecast calls for rain, bring an umbrella. If not rain but snow, bring a coat. In all other cases, bring sunglasses.

..* A conditional is likely used by the YouTube algorithm to determine when to show videos. If a channel you subscribe to has uploaded a video today, display it on the front page. If you have already watched that video, do not display it.     

5. How do you add multiple conditions to an `if` statement? In your own words, explain how the program reads them and determines what to do.

..* To add multiple conditions to an `if` statement, add as many `else if` statements as needed. If the initial `if` returns a Boolean value of true (or false, if that is what is specified) then the code executes; if not, the `else if` is consulted and if its conditions are met, it executes; this continues until a condition is met or the final `else` is reached, at which point it executes whatever is subsequent to the else.

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

..* The `&&` operator is used to check that two conditions are met; the `||` operator is used to check that 1 of 2 conditions are met.

7. What questions do you still have about `if` statements and/or functions?

..* How do operators like `&&` and `||` interact with concatenation and interpolation? Are they ever necessary or is double parenthesis adequate to keep different kinds of variables from mixing poorly?
