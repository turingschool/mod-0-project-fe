# The `pop()` method

The pop method removes the **last** item from an existing array.  Unlike `push()` you cannot specify the item you want removed.   The method "pops" off the item at the end of the 'line'.  

example:
```javascript
var array = [1, 6, true, "Hi"];

array.pop();

console.log(array);```
`[ 1, 6, true ]`

The method popped off the 'Hi' value.

    ### The `shift()` method

    The shift method removes the **first** item from an existing array.  Unlike `pop()` The method "shifts" the items to left by 1 index value.

    example:
    ```javascript
    var array = [1, 6, true, "Hi"];

    array.shift();

    console.log(array);```
    `[ 6, true, 'Hi']`

# The `push()` method

The push method appends an array.  It adds values to the variable that contains the array.  The values get 'loaded' to the back of the array by default (will have a bigger index number than what your initial array shows).

example:

```javascript
var array = [1, 6, true, "Hi"];

array.push("orange", 1000000);

console.log(array);```
`[1, 6, true, 'Hi', 'orange', 1000000 ]`

This will print all my values inserted in the initial `array` variable in addition to the other 2 values ('orange' and 1000000) that I pushed into the array using the `push()` method.  The last 2 values printed have an index value of [4] and [5] respectively.

    ### The `unshift()` method

    The unshift method shifts all the values in the array to the right leaving the first index (which is[0]) open to append.  Similar to push which adds an item(s) to the end of the existing array, unshift adds to the start of the array.  inthe parenthesis of the `unshift()` you input the value to be added

    example:
    ```javascript
    var array = [1, 6, true, "Hi"];

    array.unshift("orange");

    console.log(array);```
    `[ 'orange, 1, 6, true, 'Hi']`
