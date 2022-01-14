## Array Methods
===============================================================================
1. `.pop()`
    The .pop() method will remove the last value (element) in an array and shorten the length of the array as a result. The return value of the .pop() method is the element which was removed from the array.
    If you run the array again without calling any methods or properties, you will receive an updated list of the array reflecting the omitted final element.
    The .pop() method is *intentionally generic*, meaning it can be called to objects assembling arrays. That said, if the object does not have an appropriate length, the method will return `undefined` or may not behave as anticipated.

2. `.push()`
    The .push() method adds one or more new elements to the **end** of the array. The return value for the .push() method is the new length of the array. When adding multiple new elements with the .push() method, values are separated by a comma and enclosed in the single parenthesis.
    The .push() method is also *intentionally generic* and can be applied to any object that resembles an array. That said, this method relies on the length of an array to know where to begin interjecting the new values. That said, if the length is not numerical, it defaults to an index of 0, creating length. *It should be noted that this method cannot be applied to strings and arguments.*
    The .push() method can be used not only to add a new element to an array, it can also be called to combine two arrays by including `...variableName` within the area which you would add any other element.

3. `.shift()`
    The .shift() method is essentially the inverse of the .pop() method. When called, it removes the first element in an array and shortens the length of the array. When called, the return value is the element which has been removed. If the array is empty, the return value will be `undefined`.
    The .shift() method works by deleting the 0th index and *shifts* all values following it down to adjust the length of the array.
    Similarly to the .pop() method, the .shift() method is *intentionally generic*, meaning it can be called to non-array objects, however it may not behave as anticipated.     

4. `.unshift()`
    The .unshift() method is essentially the inverse of the .push() method. When called, the .unshift() method adds one or more new elements to the **beginning** of an array. The return value for this method is the new length of the array.
    The .unshift() method is also *intentionally generic*, meaning it can be applied to non-array objects. That said, this method operates based off of a length property. If the object does not posses a zero-based length, the method may not demonstrate the anticipated behavior.
