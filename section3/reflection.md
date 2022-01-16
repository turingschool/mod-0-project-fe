## Section 3 Reflection

1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?
* Went well! It forced me to revisit and practice some previous concepts and exercises. Searching through documentation was also a greta exercise - it's much easier to understand and read when you have some of the foundational knowledge (which I didn't before).

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.
* Arrays are used everywhere. An example in the Reddit app would be the list of subreddits followed. The user would be able to add and remove subreddits from the list attached to their profile. It's probably much more complex, but a simple version of what that looks like could be,
```javascript
var followedSubreddits = ["r/turing", "r/giraffesarentreal", "r/videogames"]
```

3. In your own words, explain what an Array method is.
* An array method is a specific operation given to an array. For example, using the `pop` or `push` array methods we can either add or remove elements to the end of an existing array.

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?
* The purpose of a loop is to run a piece of code `n` number of times performing a given action each time. We would use a loop with an array if we want an action to be taken on each item in an array. For example, if we want to wish a Happy New Year to a list of friends in an array. The loop would cycle through the list providing a personalized "Happy New Year, <insert name>!" to each of our friends in the array. We would not use a loop with an array if we don't want an action to be taken on each item in a list.

5. If you had to teach a 5 year old about loops, how would you explain it?
* Imagine you have 5 dogs to feed breakfast, and to feed them there are a few steps that need to taken for each; get a scoop of dog food, pour it into the bowl, feed it to a dog. You need to do this a total of five times, once for each dog. These set of actions you take each time are similar to how a loop works. A loop basically does a given number of steps and repeats them until we tell it to stop, or in this case, all five dogs have been given breakfast.

6. What questions do you still have about Arrays and loops?
* I had a clarifying question about using variables within loops. When we define variables within a for loop (i.e. var i = 0) does that variable only exist within in that loop, and that's why we have to define it each time because the value of i could change depending on our loop's goal? But, if I defined the variable outside the loop that would also work, but affect all subsequent loops? Are variables being defined in a function something we'll see throughout Javascript moving forward or is 'i' a special case for this function?
