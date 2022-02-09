## Section 3 Reflection

1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?
I really enjoyed having a little more independence in this section. I liked that we were given good resources to use but expected to find answers on our own. I felt supported but challenged.

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.
On Instagram, developers probably use `Arrays` to store lists of recommended people to follow.

3. In your own words, explain what an Array method is.
An `Array` method allows you to add, delete, change, or access information about the values in an `Array`. For example, the method `Array.push()` lets the user add an element to the end of an array. The method `Array.length` returns the number of elements in an `Array`.

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?
A loop allows us to perform an action repeatedly without having to repeat the code multiple times. In conjunction with an `Array`, we can use a loop to access different elements in an `Array`, which is especially useful if we don't know what an `Array` contains. We can also use loops to repeat actions, e.g. logging the numbers 1-5 to the console:
```javascript
for (var i = 1; i < 6; i++) {
  console.log(i);
};
```
5. If you had to teach a 5 year old about loops, how would you explain it?
A loop is a shortcut for letting us do something over and over again. For example, if we wanted to log "I love pizza!" to the console 7 times, it would be really annoying to write that phrase out individually 7 times. A loop lets us use a couple of lines of code to do the same thing. Let's take a look!
```javascript
// Here, we're telling the program to start at 0 and to keep going as long as our index hasn't reached 7. Remember that Javascript starts counting at 0, not 1! Every time we loop, we'll increase the index by 1.
for (var i = 0; i < 7; i++) {
  // Everytime we loop through, we'll log "I love pizza!" to the console.
  console.log("I love pizza!");
};
```
This is much faster than typing out "I love pizza!" seven times!

6. What questions do you still have about Arrays and loops?
When do you use an `Array`, and when do you use an `Object`? What are the differences between `for` loops, `while` loops, `do...while` loops, `for...in` loops, and `for...of` loops?
