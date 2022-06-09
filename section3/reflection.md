## Section 3 Reflection

1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?
- I feel comfortable working independently. I still had to reference other resources to help me gain a better understandig of the material. I watched tutorials videos and also tested out different things on my code to get the desired results. 

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.
- MyFitnessPal most likely uses arrays by storing related values. Each meal is an empty array. I can save what I eat for each meal and this would be added to the corresponding array. For instance, an array for breakfast would hold food like eggs, pancakes, and bacon. There would be other arrays created for lunch and dinner. If I don't log any food in, then this meal would return an empty array.

3. In your own words, explain what an Array method is.
- An array is a way for you to store and list multiple values inside one variable. Arrays can also store values of any data type together. There are built-in functions in Javascript that can be applied to arrays, called array methods. 

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?
- The purpose of a loop is to perform repeated tasks based on a condition. A loop will keep repeating until a condition is `false`. 
- You would use a loop **with** an array when you want to access each element individually inside the array and perform action on that element. The condition of the loop would be based on the length of the array.
- By itself, you can use a loop to set a specific number of times you want it to repeat a task. You do this **without** an array to set the condition. For example, you want to count down from 5. You set a variable for the counter and each loop will subract 1 from it:
```
var counter = 5;

for (var i = counter; i >= 0; i--) {
    console.log(i);
}
```

5. If you had to teach a 5 year old about loops, how would you explain it?

- A loop is like doing the same thing again and again. Click on a dropdown for examples to give your 5 year old.
<details>
<summary>Example 1: Toy chest</summary>
<br>
You left 6 toys out of your toy chest. Let's start to clean this up. I want you to pick up one toy, walk to your empty toy chest, and put it inside. Do these steps again. You can be done when there are no toys left out. Good job!
</details>
<br>
<details>
<summary>Example 2: Block Shape Sorter</summary>
<br>
Let's say you have a square toy with 6 sides and empty slots. This square has heart, star, and circle slots. You need to fill the heart slot with a heart block, the start with a start block, and the circle with a circle block for this side to be complete! You move on to the next side and do the same steps. You will do this 6 times total.
</details>
<br>

6. What questions do you still have about Arrays and loops?
- When would you a `while` loop or `do...while` loop _instead_ of the `for` loop?
