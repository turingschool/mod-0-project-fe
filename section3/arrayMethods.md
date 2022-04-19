Pop = This methods removes the last element from an array and returns the element. This method changes the length of the array.

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
Expected output = removes tomato from the array



Push = The push() method adds one or more elements to the end of an array and returns the new length of the array.

var animals = ['pigs', 'goats', 'sheep'];
var count = animals.push('cows');
console.log(count);
Expected output is 4
console.log(animals);
//expected output: Array ['pigs' ,'goats', 'sheep', 'cows']



Shift = The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

var array1 = [1, 2, 3];
var firstElement = array1.shift();

console.log(array1);
//expected output: Array [2, 3]

console.log(firstElement);
//expected output: 1



Unshift = The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.


var array1 = [1, 2, 3];
console.log(array1.unshift(4,5));
//expected output: 5

console.log(array1);
//expected output: Array [4, 5, 1, 2, 3]
