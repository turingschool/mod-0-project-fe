## Section 3 Reflection
=======================


1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?

  * Felt great, I felt much more confident in this section than with any before it. To be honest, I have more trouble with cloning than I do with any of this stuff (will be reviewing it), section 3 really clicked for me.

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

  * Twitter almost certainly uses arrays to store the account names of people who liked tweets. The array would store the names of accounts that liked it and would pull from it when the option to display said names was selected.

3. In your own words, explain what an Array method is.

  * An array method is used to influence elements within arrays. They can be used to add or remove elements to or from specific places in an array (shift, pop, push and unshift are array methods that do this), reassign elements to different numbered orders within the array, run tests on elements, and lots of other things I haven't learned yet!

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

  * A loop is an incredibly powerful tool that allows us to automate all sorts of processes. For example, `for (var i = 0; i < 10 ; i++)` counts to 10; we would have to type 0-9 manually without something like this, and the efficiency becomes way more staggering as you scale it up. `i < 1000000` is _not_ something you want to have to do by hand. A loop is used in conjunction with an array when there are multiple elements that you want to feed through the loop sequentially.

5. If you had to teach a 5 year old about loops, how would you explain it?

  * Imagine you brought 5 of your favorite stuffed animals into your backyard for a picnic. It looks like it's about to rain! They're very big stuffed animals, so you can only carry one at a time. You bring them into the house one by one, and you stop going outside when you've brought in all 5. Loops are very similar to this. If you tell your computer to count up to 5 using a loop, it will count one number ("One..."), then it checks to see if there are any numbers left to count ("Two..."), and it keeps going until there are no numbers left to count ("Five!).

6. What questions do you still have about Arrays and loops?

  * Is there any danger in creating an infinite loop? Other than crashing the terminal (this happened to me earlier when I put `numbers.length` without the `i <` in the condition section) and potentially losing unsaved work, is there anything to worry about there?
