## Section 3 Reflection

1. In Section 3, we removed even more supports and pushed you to learn a bit more independently, read through technical documentation, and use your resources more. How did that feel?

For me, the biggest challenge is explaining how my code works while incorporating new, technical jargon. I feel confident that I understand how my arrarys and loops work, however explaining that in my own words is still challenging. I enjoyed reading through the
MDN documentation, even though it took some work to understand it. I feel like the MDN documentation shows that its possible
to explain concepts succinctly and skillfully. I hope that the more I read technical documentation like that, the more comfortable I feel using technical terminology independently.

2. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

One mobile application I use often is Grubhub. This application probably uses arrays in a few different ways. If I search for Indian food, the application displays an array of different restaurants that I can select within this category.  If I change my mind and decide I'd rather have Korean food, I can search again and see an array of restaurants within this new category. I can even click a sort button, and I will have the option to sort the array by categories such as price, distance, and rating. This allows the user to manipulate the array.

3. In your own words, explain what an Array method is.
An array method is basically a function used to manipulate an array in some way. For example, the pop method takes out the last element of an array. The unshift method adds an element to the beginning of an array. The MDN documentation provides a heap of array methods that can be used to manipulate the array in many different ways.

4. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

A loop is useful because it gives the code the power to repeat whatever function is needed in the program. A loop would be used in conjuntion with an array if the code needs to apply that loop to the data contained in an array.

For example, if I am using a piece of insurance verification software, I might be prompted to enter my policy number to see if my policy is active. Once I click the submit button, the program will compare the policy number I entered to all of the other policy numbers in their system. Then, it will tell me that the plan is active if it finds a matching policy number.

/*
for (var i=0; i < policies.length; i++) {
  if (policies[i] === input) {
    console.log("Plan is active")
  else {
    console.log("No active policy found");
  }  
}
*/

Basically, a loop allows for us to repeat any function as many times as we'd like. A loop together with an array is harnessing the repetitive power of the loop, and applying it to specific data contained in the array.



5. If you had to teach a 5 year old about loops, how would you explain it?

Loops are really cool! When you write a loop, you tell your computer to do a task as many times as you tell it to. Let's say you wanted your computer to sing Baby Shark to your friends 100 times. You can tell your computer, hey computer, I want you to start at the number 0 and start counting how many times you sing baby shark. I want you to sing Baby Shark 100 times. Then stop. The computer will sing Baby Shark 100 times, and your friends will laugh. Cool right?

for ( var i= 0; i<100; i++) {
  console.log ("BABY SHARK DOO DOO DOO DOO DOO DOODOO!!!!!"")
}

6. What questions do you still have about Arrays and loops?

I wonder how complicated arrays and loops can get. I know a little bit about objects in code, and I know that those can be contained in an array. But I want to know more about the specific applications of loops and arrays. Also, I want to know if there are other ways to repeat or group things in code, besides loops and arrays. For example, when I think about insurance policy numbers, that seems like a staggering number of things to be in an array. Is it practical to have arrays that are that massive?
