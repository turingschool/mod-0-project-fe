## Section 3 Reflection

1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?

It was challenging, but I think I really enjoyed it. I like how learning more independently feels a little like exploration and discovery and is ultimately very rewarding.

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

Using Slack as an example, all of the channels a user follows are probably stored in an array.

3. In your own words, explain what an Array method is.

An array method is a tool you can use to manipulate your array. Using the syntax of arrayName.methodName() you can add things to your array, remove things, get the length, probably anything you can think of yo make your array do very specific things.

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

A developer can use a loop to perform the same task a specific number of times. One can use a loop without an array when evaluating just one variable like logging the same string to the console 5 times like:

> ```javascript
> for (var i = 0; i < 5; i++) {
> console.log("This is my string!");
> };

They can also be paired with arrays to evaluate the condition paired with each element in the array. This can be used for something like evaluating if an array of plants is a fruit or a vegetable and logging the result.
> ```javascript
> var plants = ["Broccoli", "Apple", "Orange", "Onion", "Tomato"];
> for (var i = 0; i < plants.length; i++) {
> if ((plants[i] === "Broccoli") || (plants[i] === "Onion")) {
> console.log(`You are a ${plants[i]}! You are a vegetable!`);
> } else if ((plants[i] === "Apple") || (plants[i] === "Orange")) {
> console.log(`You are a ${plants[i]}! You are a fruit!`);
> } else {
> console.log(`You are a ${plants[i]}! You are an unknown plant!`);
> };
> };

Just a side note, I added tomato to the unknown category, because does anyone really know what it is?

5. If you had to teach a 5 year old about loops, how would you explain it?

Have you ever had a lot of toys to put away, and you didn't want to put them away one by one? Loops let you do that on the computer all at once. You can make a computer check if what's on the floor is a toy, and put it away for you, then check the next thing on the floor and do the same! That way you can put them all away at once. When you have a lot of the same thing to do, and you don't want to do it one by one, you can use a loop to do it all at once! ~~If only I could do this with folding laundry too...~~

6. What questions do you still have about Arrays and loops?

I'm not sure I have any right now, I'm just excited to learn more about different array methods and exploring the possibilities of using them!
