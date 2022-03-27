## Section 2 Reflection

# 1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?
 - If it's hard, that means you are growing.  Struggle is part of learning.
 - This idea reminds me of a TED talk I watched once about the power of "yet".  I can't do something vs I cant do something yet, is a growth mindset phrase.  I teach this in my classroom and know this will be useful to me as a student of computer science.

# 2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?
The power of "yet" is my mantra.

Sometimes I think I know too much about growth mindset (because I am always preaching/teaching it in my classroom) I think maybe I have nothing left to learn about growth mindset;  it seems more a matter of practice then understanding...

# 3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

I liked it.  In teaching we call it "gradual release".  I love that this made me go back and look at old directions, look at old files, look at section 1 exercises.

And now I totally understand how to use the node command even better!!  I programmed a hotkey to help run this code to check that my code is working as expected each step of the way.

# 4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

In programming, a conditional statement is a piece/block of code that will perform an action within a defined set of parameters.  

I.e. In daily life, if I wake up and my son is still asleep, I will meditate and make coffee; else if I wake up and my son is a wake I will get him from his crib, change his diaper, and change him out of his pajamas.

Login pages are a great example of where a conditional statement could be in use.  If a user enters login information and password, GRANT ACCESS to the site; else if: open page to create an account/user profile to access website.

# 5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

Adding conditions to an if statement depends on how many conditions you want to apply/how specific you want to be. for example being hungry is either yes or no...

```javascript
var hungry = false;

if (true) {
} (hungry === true) {
  console.log("Eat food");
} else {
  console.log("don't eat food");
}
```
If adding more than 2 conditions after declaring the `if` statement, all the proceeding parameters to get evaluated (if the `if` statement evaluates to false), would be programmed as `else if` until the very end of the code block.  The last line of an `if` statement will be an `else` (not `else if`)

examples:
### NOTICE HOW THERE ARE 3 `ELSE IF` BUT THE VERY LAST IS `ELSE`?

(at least I think that is how it works...)

```JavaScript
var minutesToHeatWater = 7;

if (minutesToHeatWater < 7) {
    console.log("The water is not boiling yet.");
} else if (minutesToHeatWater === 7) {
    console.log("It's just barely boiling");
} else if (minutesToHeatWater === 8) {
    console.log("It's boiling!");
} else {
    console.log("Hot! Hot! Hot!");
}
```

# 6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

The `node` terminal command is pretty handy.  This allows me to check the code and see how it runs.

Also my bookmarked list of comparison and logical operators help with double checking notation/syntax.


# 7. What questions do you still have about `if` statements and/or functions?

1. Does the last line of an if statement always have to be `else`?

2. Can you have an `if` without an `else` or an `else if`?
