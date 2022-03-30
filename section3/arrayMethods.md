#Array Methods#

### Pop ###

The pop method will remove and then return the *last* element in the array. This means that the length of the array will reduce by 1.  If the array is empty and you try to call `pop()`, the result will be `undefined`. The proper syntax for this method is
```javascript
array.pop()
```

### Push ###

The push method will add more elements into the array.  The new elements will be added to the *end* of the array and the array will have a greater length, and this new length will be returned as the output.  The proper syntax for the push method is
```javascript
array.push(element0, element1, /* ... ,*/ elementN)
```

### Shift ###

The shift method will do the same thing as the Pop method, but for the *first* element in the array.  This means that the entire array will shift because the 0th element is removed and the 1st element becomes the new 0th element, the 2nd element becomes the 1st element and so on. Proper syntax is
```javascript
array.shift()
```

### Unshift ###

The unshift method will do the same thing as Push, but the elements will be added to the *front* of the array.  Similar to the shift method, this will change which element is assigned to the 0, 1, 2, N positions within the array. Also, the elements will be added in the exact order that they are listed within the unshift command.  This means that adding elements one by one may have a different result than adding several elements in a single chunk. Syntax is
```javascript
array.unshift(element0, element1, /* ... ,*/  elementN)
```
