## Array Methods

1. *pop* - removes and returns an item from the end of an array.
e.g.
```js
var dogNames = ["Pancakes", "Squiggles", "Kosa"];
dogNames.pop();
// updated array will be ["Pancakes", "Squiggles"]
```

2. *push* - adds one or more items to the end of an array and returns the number of items in the array after items have been added.
e.g.
```js
var dogNames = ["Pancakes", "Squiggles", "Kosa"];
var num = dogNames.push("Rupert", "Bagel");
// updated array ["Pancakes", "Squiggles", "Kosa", "Rupert", "Bagel"] and returns 5.
```

3. *shift* - removes and returns the first element from an array.
e.g.
```js
var dogNames = ["Pancakes", "Squiggles", "Kosa"];
dogNames.shift();
// updated array ["Squiggles", "Kosa"]
```

4. *unshift* - adds one or more items to the beginning of an array and returns the number of items in the array after items have been added.
e.g.
```js
var dogNames = ["Pancakes", "Squiggles", "Kosa"];
dogNames.unshift("Rupert", "Bagel", "Schmoo");
// updated array ["Rupert", "Bagel", "Schmoo", "Pancakes", "Squiggles", "Kosa"] and returns 6
```
