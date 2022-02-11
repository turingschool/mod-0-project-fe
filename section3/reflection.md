## Section 3 Reflection

1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?

* I had a little trouble interpreting an error message from the Terminal when I was running `$ node section3/exercises/loops-arrays.js` and that was because of a syntax error in my text editor Atom around line 70.  I had to communicate on Slack to gain insight on how to solve the issue.  

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

* Arrays in JavaScript are similar to lists in Python.  They act as containers holding similar elements - but they don't need to be the same data types.  Developers probably use arrays on Facebook to contain user's posts.

3. In your own words, explain what an Array method is.
* An *_array_* is a variable that stores a list of values.
  - Use an array when working with a list of related items
  - Arrays can hold an **infinite** number of values
  - Use `[ ]` notation to create an array

* An array *_method_* is a function built into JavaScript that outputs information about arrays as well as changes performed to the original array.
  - An example is when using `filter()`

  ``var pets = ['dogs', 'kittens', 'mice', 'rabbits'];
     var result = pets.filter(word => word.length > 5);
     console.log(result); ``
     - The expected output would be ['kittens', 'rabbits']

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

* A loop is a way to write code for 1 action, but we instruct our program to carry it out 'n' times; iterate 'n' times through each piece of data in our program.

  - There are various types of loops: _for_, _while_, _do_while_
  - Loops have three main components:
    1. Initial variable which is denoted by 'i' or 'index' or whatever you want to call it using `var`
    2. Condition; i.e., i < 10; and it will run until it reaches 10; as long as it evaluates as **true**
    3. Update (increment or decrement); i.e., i++ and this adds one to the counter

  - //ADD MORE//

5. If you had to teach a 5 year old about loops, how would you explain it?

* A _for loop_ is the most common type of loop.  We can use this when we need to run something a certain number of times

6. What questions do you still have about Arrays and loops?

* Is it standard to use the following syntax with **for loops and Arrays** :

`for (var i = 0; i < <variable name>.length; i++) {
  console.log(<variable name>[i]);
  }`
- The part about `.length` when looping through Arrays
- This seems to allow you to change the array in a more dynamic ways
- What other things can you do to keep loops and arrays more dynamic?
