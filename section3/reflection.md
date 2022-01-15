## Section 3 Reflection

1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?

* It took me longer than expected, but the more I broke the questions down for the challenges, the easier it got for me. I did ask some technical questions to peers and was pointed in the right direction but I was overcomplicating things on my end. I need to ***work*** on my googling, I got it when I got it but sometimes it took me more than I would like to admit when it came to breaking down the technical components of the exercises.

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

* I have recently been using MDN or Mozilla Developer Network as a tool for Turing. A good one if I might add, and when you click on the language you are interested in, there is a list that displays on the left side of the page. For `arrayMethods.md` we had to describe what methods we can use to manipulate array information like `.pop() or .push()`. The list on the side, I think is more related to objects in their current formatting BUT that could be considered an array. The list detailing exactly what methods can be used on arrays, in alphabetical order for easy sorting through as well. It is difficult to form examples of things like this, with the specific formatting because I am not fully comfortable with functions. I would like to be able to create a function that incorporates a conditional statement describing what happens if a specific method is clicked but that has more to do with `onClick()` plus the purpose of the function but the list would still need to be referenced so we could manipulate the data within the browser. The list would be something as simple as:
 ``` var jsMethods = ["on.click", ".push()", ".pop()"];

```

3. In your own words, explain what an Array method is.

* Ways we can manipulate arrays that are pre-built into the language. I have a few of them in the array listed above named `jsMethods`. They allow us to add or remove things to the list, there are a bunch of them and I can see more being used than others.

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

* Loops make it easier for developers to instruct a computer to do a specific set of tasks multiple times. An example of a loop with an array would be something like returning a new high score to a user. It would have a list of scores, 5 highest scores. The loop will check if the new value `newScore` is higher than any of the 5 elements currently within the array and would replace one of the values if the score is greater than any of the previous values within that array. An example of a loop without an array would be a conditional if statement that will return a value if condition 1 is met, and a different value if condition 2 is met. For example ```
var hrsSleep = 7;

if (hrsSleep < 7) {
  console.log("You should try to get to bed earlier");
} else {
  console.log("You are up and energized, get to work!");
}
```

5. If you had to teach a 5 year old about loops, how would you explain it?

* I would describe the difference between computers and people, mainly focusing on how specific the details need to be for a computer to follow a set of directions. After those details are understood, I would ask them about a task, aka taking the trash out. Do you check the other rooms or only take out the trash in the main living room? To have the chore completed all of the trash needs to get taken out, instead of making individual trips to and from the dumpster. To make things easier for a computer we would write the details of taking the trash out ONCE, and use a for loop to have the computer execute the task without us writing the code 3 times, we can write it once and the computer will do it multiple times with the power of a for loop to make sure all of the trash is out in the house.


6. What questions do you still have about Arrays and loops?

* They seem to be like objects, interchangeable almost but the idea is confusing to me. My questions relate more to how we reference them within functions. As a developer, is it going to be best practice for us to leave arrays open like `""` so we can add an infinite number of elements? Does it make sense to have arrays in arrays in other arrays? I feel like there are so many uses for lists, I might be array happy. Why is it best practice to only use strings within arrays, I had an example in a previous exercise before we had our session 5 discussion and I made an array for practice with more data types than just strings.. will that cause issues to my code? I'm going to break some things I made by adding in different data types to some things and see what happens.. I don't believe much will happen, I think the values I input are readable by JavaScript so who knows..
