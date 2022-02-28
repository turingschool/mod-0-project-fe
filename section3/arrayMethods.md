pop takes the last element out of the array.
It also returns the last element so you could, say, remove the last element from an array and set that element as a new variable with  
`var last = Array.prototype.pop(someArray)`

push adds an element to the end of the array and then returns the new array length.

Shift does what pop does for the first element of the array taking out the item at position 0 and then *shifting* all the remaining elements over
before returning the removed element.

Unshift is like the push of shifting. It pushes a new element to the start of the array and then shoves all the other elements in the array over one position in response.
I find the name of this very confusing. I mean it makes sense if you're using it after shift because it would undo
the shift of all elements to the left by pushing all elements to the right but if you use it on its
own it's just shifting things to the right. It'd make more sense to call it like clockwiseshift. Except that's a self evidently terrible name.
unshift is fine.
