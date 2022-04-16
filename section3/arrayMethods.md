# Array Methods Mod-0 Section3
## Pop
`pop()` Is a method that removes the last element in an array and returns it when called. If you call `pop()` on an array that is empty the return will be `undefined`. The method changes the `length` of the array. You can also use `pop()` as a value in a variable.
```js
var faveFoods;
faveFoods = ['sushi', 'pizza', 'veggie burger', 'pasta'];

console.log(faveFoods.pop());
// expected output 'pasta'

var bestFood = faveFoods.pop()

console.log(faveFoods);
// ['sushi', 'pizza']

console.log(bestFood);
// 'veggie burger'

```
## Push
`push()` Adds onto the end of an array. If multiple items are being pushed they will be added to the end of the array in a chunk. The `length` of the array will change. You can also merge two arrays with push, this will add the second array you call onto the first. I imagine the elements added to the first array will gain a new position dictated by where they now are in the new array.
```js
var pets;
pets = ['Smokey Muffins', 'Teapot', 'Yaki'];

pets.push('Eggie');

console.log(pets);
// expected output ['Smokey Muffins', 'Teapot', 'Yaki', 'Eggie']
```

## Shift
`shift()` Is like `pop()` but with the first element. When the first element is removes all the elements that follow it will have a new position equal to their position minus one.
```js
var hatTypes;
hatTypes = ['baseball', 'sun', 'hard', 'clown'];

var sportsHat = hatTypes.shift();

console.log(hatTypes);
// expected output ['sun', 'hard', 'clown']

console.log(sportsHat);
// expected output 'baseball'

console.log(hatTypes.shift());
// expected output 'sun'
```

## Unshift
`unshift()` Is like `push()` but puts the elements on at the start of the array. Again, if multiple elements are used they are put in as a chunk. The existing elements will have a new position equal to their current position plus how many elements where `unshift()`.
```js
var flowers;
flowers = ['roses', 'daisy'];

flowers.unshift('blue bells', 'lily');
console.log(flowers);
// expected output ['blue bells', 'lily', 'roses', 'daisy']

```
