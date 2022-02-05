Pop: removes the last element from an array and returns that element
Push: adds one or more elements to the end of an array and returns the new length of the array
Shift: removes the first element from an array and returns that removed element
Unshift: adds one or more elements to the beginning of an array and returns the new length of the array


Extra ones for reference:

array.prototype.length: reflects the number of elements in an array
console.log(arrayName.length) worked for me to display number of elements

splice: I used arrayName(5, 1, "word to replace")
Here, the 5 is the index position, 1 is the number of elements to be replaced, and last is
what will replace the original element.
