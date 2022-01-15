##Array Methods##
- _Pop_ - The pop method removes the last item or element of an array and returns
that last element. So for example, if you declared the array var friends = ["Mike, "Tim", "Jim"],
you have three elements in this array ('Mike', 'Tim', 'Jim').
If you then used the pop method saying friends.pop(), "Jim" would be returned to you,
and if you then logged the array using console.log(friends), "Mike" and "Tim" would
be returned, and the array would two elements instead of three. Goodbye Jim.

- _Push_ - Push method add one (or more!) elements to the end of an array and
returns the updated number of elements in your array.
So continuing with our friends example, let's say you went to a party, made three
new friends and you'd like to add them to your friends array. Using the push method,
you would enter friends.push("Alex", "Monica", "Simone"). The number 5 would return,
because you now have five elements (or friends) in your array. You could then
console.log(friends) and would get back (5) ['Mike', 'Tim', 'Alex', 'Monica', 'Simone'].

- _Shift_ - The shift method removes the first element of your array and returns that
removed element (very similar to pop, but acting on the first instead of the last element).
So let's say you had a falling out with Mike and need to remove him from the friend list.
You would use friends.shift() and "Mike" would be returned to you. You could then
console.log(friends), and (4) ['Tim', 'Alex', 'Monica', 'Simone'] would be returned.

- _Unshift_ - The unshift method adds one (or more) elements to the beginning of
an array (similar to push, but manipulates the beginning instead of the end of the array).
It then returns the updated number of elements in your array.
Going along with our scenario, say you patched things up with Mike, and want him
back at the top of your friend list. You would use friends.unshift("Mike").
The number 5 would return, because you now have five elements in your array.
You could then console.log(friends) and get (5) ['Mike', 'Tim', 'Alex', 'Monica', 'Simone'] back.


##NOTE ABOUT INDEX POSITIONS##
As I/we have learned, JS counting starts with 0 and arrays access data sequentially,
as if they were in a numbered list.

So in our var friends = ["Mike", "Tim", "Jim"]
array, Mike would have the index position of 0, Tim would be 1 and Jim would be 2.

When we use the various methods described above, the index position of an element
can change if a preceding element is removed. This is mostly relevant for shift and
unshift, because they involve the first element(s) in an array. Just wanted to make
this note to remind myself that index position is not fixed!
