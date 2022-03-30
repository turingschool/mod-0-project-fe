## Section 3 Reflection

1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?

I'm still feeling very good about all of this information.  I didn't have to use many outside sources to figure out how to write these lines of code.  I did have to look back at the section 2 exercises to remember the exact syntax of the if statements, but I think that those will become more engrained in my memory after some more practice writing them.

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

On Facebook, the developers likely use an Array to keep track of your friends list.  If someone sends you a friend request, you can click the "Accept" button, which likely performs a `push` method to add that friend into your current list, or Array.  Facebook also displays a total number of friends, which could be obtained using `array.length`.

3. In your own words, explain what an Array method is.

An array method is a function that performs a certain edit to the array.  In this section I learned about 4 methods: `pop`, to remove the *last* element of the array; `push`, to add one or more element to the *end* of the array; `shift` to remove the *first* element of array and thereby shifting the index; and `unshift`, to add one or more elements to the *front* of the array, also causing a shift in the index.

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

The purpose of a loop is to run the same command for multiple iterations of a variable i.  We would use this in conjunction with an array if we wanted to set the number of loops to be executed to the exact number of elements in the array.  We do this by using `i < array.length`.  If we know how many times we want the loop to run, we can use `i < n` and do not need to use it with an array.

5. If you had to teach a 5 year old about loops, how would you explain it?

I would explain that a loop is almost like a roller coaster ride that takes your picture at the end of every ride. However, in this roller coaster, it starts with only 1 person riding.  The coaster goes through its loop, and takes the picture of the 1 person riding, and then on the next ride 2 people are allowed on.  On the third ride, 3 people are allowed on, and so on. The ride ends when no more people can fit, or when the conductor decides to set a limit on the number of people.

6. What questions do you still have about Arrays and loops?

I learned about the pop/push/shift/unshift methods, but it seems those all deal with elements of the array that are either at the front or the back of the array.  Are there other methods to add or remove elements to the middle of the array or to a certain position? I know we can assign an array position by using `array[n] = "New Element"`, but what if the `n`th position is already taken, is there a way to add it to the middle of the array and still shift the index and not overwrite the current element for the `n`th position?
