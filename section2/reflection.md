# Section 2 Reflection

### 1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

Something that I picked up from the growth mindset blog posts by Kristin Villanueva that really resonated with me was the idea that in order to cultivate a growth mindset one should always seek out things that are going to challenge them to advance their knowledge, skill-set, and abilities. Maintaining a fixed mindset and believing that you were born with a certain set of skills that you can’t adapt or change is not beneficial to your development as a programmer or working professional in general. However, with regards to coding in particular Villanueva’s view is that if you want to get better at it and learn new aspects of it you must strive to meet new challenges that come your way (i.e. learning new languages, familiarizing yourself with new libraries, and finding more efficient ways to do things).

The Hackflix podcast had a guest named Carmen Popoviciu. Something she shared about cultivating a growth mindset was the, “myth of the brilliant developer,” and not comparing yourself to an unrealistic standard set by this myth or others. Everyone learns and understands things at their own pace, so you should not feel ashamed if you are not understanding something as quickly as someone else might. Comparing yourself to others, especially those with years of experience under their belt, is destructive to one’s work and self esteem. Instead, focus on learning what you need to to be successful, and don’t be afraid to rely on help from others along the way to get yourself to where you want to be.   

### 2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

I would say a few ways that I demonstrate a growth mindset are always striving/being open to learning new skills, and being open to feedback and suggestions. Even if I feel like I might not be good at something, I’m always open to trying it, and seeing how much I can learn about it/how much better I can get at a skill. Along the way, I’m also open to feedback and constructive criticism on how I can get better at something. A few struggles I currently have with regards to growth mindset are knowing when to ask for help, and comparing myself to others often. In the past, I have had some difficulties asking questions when I probably should have. To this day, I also continue to compare myself to others, and typically feel ashamed about my own achievements and successes when I do compare myself to other people. However, I do know that overcoming both of these hurdles will help me to be able to build my growth mindset, and find more success in all aspects of my life.  


### 3. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node and made some directions a bit more vague, intentionally. How did that feel? What was uncomfortable about it? How did it support your learning?

Honestly I enjoyed the fact that there was a bit less support, and that some directions were a bit more vague. This made me feel like I have progressed a bit in Mod 0 with regards to problem solving and logical thinking. Something uncomfortable about it was feeling like I might not be doing things exactly how they should be done, and that if I did something wrong I wouldn’t know if it was incorrect or not. However, I persevered through this uneasy feeling, and it allowed me to learn a bit more than I think I would have otherwise, and push myself out of my comfort zone.

### 4. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

Conditional statements, with regards to code, are used to determine if the values of variables are true or false, and depending on said values certain lines of code will run, and others will not. If, else, and else if are all used to establish complex statements with different conditions. A daily life conditional I can think of would be something along the lines of, “If I miss the bus to work, I will have to take an Uber.” I believe conditionals are likely implemented into free apps with subscription services. For example, if you have the free version of Spotify, you only get 6 daily skips for songs. I would assume there is a line of code that determines if you’ve used up those daily skips, and if you have a condition that prevents you from skipping any more songs.


### 5. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

To add multiple conditions an if statement the logical operators AND (&&), and OR (||) can both be used to do so. These allow one if statement to include conditions for multiple variables, and the values of said variables. An example of this from our work would be:

``` var cupsOfFlour = 1;
var hasSauce = true;

if (cupsOfFlour >= 2 && hasSauce) {
   console.log("I can make pizza");
}
```

In this instance, the if statement determines if pizza can be made with the values of variables cupsOfFlour and hasSauce. In order to make pizza the value of cupsOfFlour needs to be greater than or equal to two, and hasSauce needs to be true. For this reason, there doesn’t appear to be enough flour to make pizza.


### 6. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

As a developer, both the console log and terminal, and the dev tools in a browser can be used to check one’s code and determine if conditions are being met or not. The console log will determine the two or more conditions that are being met by the value of variables if you plug the information into an if, else if, and or else statement with the console log command included. In the example from above, the console log will not log “I can make pizza,” because the conditions to make pizza in the if statement aren’t being met. However, with this specific else if statement added:

``` else if (cupsOfFlour < 2 || !hasSauce) {
   console.log("I cannot make pizza");
}
```

The console log will log, “I cannot make pizza” because it will recognize that the condition of 2 or more cupsOfFlour is not being met.  


### 7. What questions do you still have about `if` statements and/or functions?

The biggest question I have about ‘if’ statements is what is the best way to describe this aspect of coding to people that are new to it? I have developed a relatively good understanding of how these functions play out in JavaScript, but I am still having some issues describing exactly what they do.
