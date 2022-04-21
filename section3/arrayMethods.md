* Pop
  " Pop is used to remove the last element form an array."

 This example uses the pop() method to remove the last item from the fruits array.
Note: pop() can only be used to remove the last item from an array. To remove multiple items from the end of an array, see the next example.
```JavaScript
const fruits = ['Apple', 'Banana', 'Orange'];
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange
```

* push
  " Push is used to add another element to an array, adds at the end of index, you and add multiple elements at a time.


 This example uses the push() method to append a new string to the fruits array.
```JavaScript
const fruits = ['Apple', 'Banana'];
const newLength = fruits.push('Orange');
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3
```

* shift
 "shift can be used to remove the first element from an array, and when asked can return that element"
changes length of array.


This example uses the shift() method to remove the first item from the fruits array.
Note: shift() can only be used to remove the first item from an array. To remove multiple items from the beginning of an array, see the next example.
```JavaScript
const fruits = ['Apple', 'Banana'];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple
```

* unshift
" Can be used to add a new element in the first element slot "0".

This example uses the unshift() method to add, at index 0, a new item to the fruits array — making it the new first item in the array.

```JavaScript
const fruits = ['Banana', 'Mango'];
const newLength = fruits.unshift('Strawberry');
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```
