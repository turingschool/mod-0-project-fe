1. pop()

The MDN definition for the pop() array method is that it "removes the last element from an array and returns that element. This method changes the length of the array."

Which is to say, if an array includes five elements indexed 0-4, the final element, element number 4, will be returned if called AND removed, so that the array will include four elements indexed 0-3 moving forward.

2. shift()

This method mirrors the pop() array method; however, it applies to the first element (element index = 0) of an array instead of the last.

The MDN definition: "shit () removes the first element from an array and returns that removed element. This method changes the length of the array."

3. push()

The MDN definition for the push() array method is that it "adds one or more elements to the end of an array and returns the new length (numeric value) of the array."

Which is to say, if you've assigned an array the following values: a, b, and c:

var myArray = ['a', 'b', 'c']

and you'd like to add or insert two more values, d and e, to the end of the array, you can do so with the push() method:

var myArrayMoreValues = myArray.push('d', 'e')

What's noteworthy is that, unlike pop() and shift() which return elements, push() will return the length property, which is a numerical value. For example:

console.log(myArrayMoreValues)

will return '5', not an element stored in the array.

4. unshift

This method mirrors the push() array method; however, it inserts elements to the beginning of an array instead of the end.

The MDN definition: "unshift() adds one or more elements to the beginning of an array and returns the new length of the array.

It appears that shift() is the inverse of pop(), and unshift() is the inverse of push().
