## Section 2 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

     I enjoyed hearing Carmen Popoviciu speak about growth mindset versus fixed mindset, since I'd never heard of these before. When she spoke about fixed mindset, there were things she said that really resonated with me. She said that there were times when she was studying Computer Science when she would be struggling and she'd think "I don't have it" or "I wasn't made for this." I've absolutely had this thought when trying to learn coding. However, I'm trying to be conscious of this, and I am trying to keep growth mindset as my goal going forward.

    I liked that she said she keeps her progress in mind, because then she sees that she can learn and grow. When I'm struggling with a new concept, I want to try and remember that I've already learned so much, and if I take a deep breath and consider what to do next, I can keep learning. I love when she basically said that in order to get to a place where you are an expert, you need to go through the process of growing first. Growth can be challenging, but the struggle is worth it.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

    I try to demonstrate a growth mindset by having perspective. When I'm struggling with a coding concept, or even with a challenge at work, I try to take a deep breath and take a step back. I try to calm down a bit before looking at the issue again with fresh eyes. I remember that I've solved problems like this before, and I can figure out this one.

    Sometimes when I get really frustrated, I do get stuck in a fixed mindset. I never imagined myself going into the tech field, or software development, ever. I haven't spent a lot of time before now learning about computers or technology. I majored in English. I didn't know a thing about code until 8 months ago. Sometimes when I have a problem when I'm coding, I feel like giving up. I think to myself, "I'm not a tech-y person. I majored in English for a reason. My brain just doesn't work like this." But then I work on the problem, I look at it another way, and I figure it out. I'm coming to find that I can teach myself to do things that are new and different, and that I can train my brain to work differently. I'm glad I'm learning that now.

3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

  I definitely feel that in this section, I needed to put more effort in to figure things out on my own. However, it felt good to work through these things on my own. This kind of relates back to growth mindset for me. It was more challenging without the steps written out. However, whenever I came
  across issues, I found that I was able to solve them on my own, using the resources I've been given. Its uncomfortable to work more independently
  since I don't want to make a mistake or mess up, but I think getting outside of our comfort zones helps us to learn, so I'm trying to embrace that
  discomfort as a part of this process.

4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is a piece of code that evaluates one, or multiple, conditions. Then the statement executes code according to which conditions were or were not met. An if statement gives the first condition to be checked. If it is true, the code executes. If not, the computer evaluates any else if statements, which provide alternate conditions to be checked. Then, if a condition is true, the code executes. If none of the conditions are met, there will be an else statement that tells the code what to execute if no other conditionals are true.

A daily life conditional I can think of would be related to eating. If I'm hungry, I should eat something. Otherwise, there is no need for me to eat anything. This conditional statement would look like this snippet below in theory.

if (isHungry=true){
  console.log("You should eat something!")
}
else {
  console.log("You should eat later.")
}

One app I use is Pokemon Go. In this game, you can collect items to use in the game by selecting a pokestop. Once you select this, you collect items
and they are automatically added to your inventory. However, you can only collect these items if there is room in your item bag. If there is no room,
you are unable to collect items. I imagine there is some sort of conditional in place like this:

if (itemBagFull=true){
  console.log("Item bag full")
}

else {
  addItemsToBag()
}

5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

To add multiple conditions, you can add else if to the code. Basically, if an if statement is false, the program will go to the next conditional (else if) and determine if that condition is true. If it is true, the code will execute. If not, the program runs the next else if statement. This continues on until either A) One of the else if statements is true and the code executes or B) None of the conditions are met, and therefore the else statement executes.

6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

To check that two conditions are met, I can use a logical operator such as &&. For the code to execute, both conditions must be met. If I want to see if
either one or the other condition is met, I can use ||. When I use this operator, the code will execute if either one of the conditions are met.

7. What questions do you still have about `if` statements and/or functions?

I am curious about best practice with if...else statements. For example, can code have too many else if conditions? If there are many many conditions, is there a better or more efficient way to check these rather than evaluating each condition? 
