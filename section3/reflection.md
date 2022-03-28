## Section 3 Reflection

1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?

- This section was definitely more challenging. Some parts were easy like when we had to find a way to display 1-10 backwards. I just had to watch the video provided in section3 to know how to do it. HOWEVER, in loops-arrays: i was struggling because you asked us to make a for loop with if/else statements to determine if you were old enough to vote with some text saying so.
I did some research and was making progress slowly. i eventually came to a point where i was getting frustrated so i decided to take a step back and use a pomodoro break.
After having a snack, i came back and figured out what was wrong with my code and just clapped to myself.
Sounds weird, but that's how i felt when i was able to code something without much support from this repo.

- One thing I noticed i struggled with with this project was figuring out what to do from the wording of the assignment/question. This was especially prominent in `arrays.js` where i had to write code that would log the string "Elephant" in the animals array.
at first i thought it meant to just add elephant to the array and then log the result to make sure elephant was in the array since anything between quotations is a string. I kept revisiting that question and reading it over again to make sure i was doing it right. I reached out to a member of turing and they told me to read it again carefully, to which i did since that means i most likely did the problem wrong. I then realized that it was similar to the first example shown in the exercise where we had to log "zebra" from the array. So i changed my code accordingly to add elephant and then made sure the code would log the string "elephant" from the animals array.

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

- I frequently use etsy to buy stuff for friends or myself. On each seller's page, there are the products they sell. An Array could be used to "list" all their products in a concise manner rather than logging each and every product that they sell.

**For example**:

```javascript
var products = ['soap', 'stickers', 'slime', 'art']
```

3. In your own words, explain what an Array method is.

- An `Array method` is a function that is built into javascript to perform a specific process. Such as, added something to an end of an Array or to the beginning.

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

- A loop is used when we want to perform an action a certain amount of times. We would use a loop in an array if we wanted to check for a result with a certain condition n number of times.

**Example**;
``` javascript
var foods = ['banana', 'sushi', 'burger', 'salmon', 'seaweed'];
for (var i = 0; i < foods.length; i++) {console.log(`Add ${foods[i]} to shopping list`);}
```
- In cases where we don't need a loop in an array is if we just wanted to make a simple list of products a shop may sell

```javascript
var products = ['soap', 'stickers', 'slime', 'art']
console.log(products);
```

5. If you had to teach a 5 year old about loops, how would you explain it?

- If i was a witch and i wanted to tell someone to dance the hokey pokey 10 times, i could put a spell on them that make them do that. 💃

6. What questions do you still have about Arrays and loops?

- Should I console.log every time I make a change to an array using an array-method even though i know what the result will be for all Turing problems even if the problem doesn't state that i have to log the result? I did it in this lesson just to show that the result of my code would log the expected result. 

- Maybe i'm just typing it wrong when i try it but will there be instances where interpolation won't work so we would have to use concatenation instead of a loop in an array?
