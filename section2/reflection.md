## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

* I thought the idea of seeing your struggle as a strength is very interesting. I related to what Carmen said that when we struggle we tend to think this is not for us, or we aren’t good enough. It’s a great reminder for this program to remember even when struggling it is part of the learning process and that we will get there. 
* I also think reflecting on what is working and what is not will be a good way to problem solve whatever I am struggling with. Then I can create actionable changes and also remember not to compare my progress to others. 

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

* I have a growth mindset when it comes to personal development. I love reading personal development books on a wide range of topics. I feel that if you want to change this or that work on this or that personally you can do some research and read a book on it, essentially teaching something to yourself. 
* Deciding to do this program was quite challenging for me because I initially had a lot of self doubt whether or not I would be smart enough to do the program. Then I started to hear that if you want to learn this material you can learn it and I thought back to the hard things I accomplished in college. I still have some doubts going into the program but I am finding the growth mindset thinking very interesting and encouraging.

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

I thought this was good exercise to ask ourselves how much do we remember from the previous section. I couldn't remember to use node and went Google searching and was surprised I couldn't find it and then decided to use Slack to not waste any more time searching and searching, which was also good practice asking questions!

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement checks if two values are greater than, less than, or equal to eachother. Then the condition returns true or false which tells the program what to do next. In my weekly routine I go to the gym on Tuesdays and Thursdays so the conditional statement in my head would check - Is the day of the week, today, equal to Tuesday or Thursday? If yes - go to gym, if no -no gym! When checking out on a website there is probably a conditional statement for if the customer will get free shipping.

```
if (shoppingChart > 50){
  console.log ('Free Shipping')
} else {
  console.log ('Shipping will cost..')
}
```
5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

To add multiple `if` statements we can use `else if` after the first `if`. The program reads each `if` or `else if` statement until the return is true then the program disregards the rest of the `if` statement. 

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

To check if two or 1 or 2 conditions are met we use logical operators, `&&` or `||`. The `&&` operator returns true only when both values are true, all else returns false. The `||` operator only returns false when both values are false and all else returns true.

7. What questions do you still have about `if` statements and/or functions?

Using the logical operators I first put (cupsOfFlour >= 2 && hasSauce=true), this didn't run properly, but when I removed `=true` it did but I didn't really get why? Becuase it's already defined we can't define it again in the operation?
