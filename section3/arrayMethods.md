## H2 Array Methods

1. __`pop`__
  * __Definition__: The `pop()` method removes the last element from an array and returns that element.
  * __Syntax__: `pop()`
  * __EXAMPLE__:
    ```JavaScript
    var myGames = ['Skyrim', 'Totalwar', 'Deep Rock Galatic', 'Gunfire'];
    myGames.pop()
    ```
2. __`push`__
  * __Definition__: The `push()` method adds one or more elements to the end of an array and returns the new length of the array.
  * __Syntax__: `push(elementN)`; `push(element0, element1, /* ...*/ elementN)`
  * __Example__:

    - Adding Elements to an Array
    ```JavaScript
    var sports = ['soccer', 'baseball'];
    var total = sports.push('football', 'swimming');
    console.log(sports)
    console.log(total)
    ```

    - merging two arrays using _spread syntax_
    ```JavaScript
    var potatoes = ['russet', 'yukon gold', 'sweet potato'];
    var morePotatoes = ['red', 'Russian Blue', 'King Edward'];
    potatoes.push(...morePotatoes);
    console.log(potatoes)
    ```
3. __`shift`__
  * __Definition__: The `shift()` method removes the first element from an array and returns the removed element.
  * __Syntax__: `shift()`
  * __EXAMPLE__:
    - Removing an element from an array
    ```JavaScript
    var myAnimalsNames = ['Cole', 'Calvin', 'Turkey Lue', 'Rudy'];
    var shifted = myAnimalsNames.shift();
    console.log(myAnimalsNames)
    ```
4. __`unshift`__
  * __Definition__: The `unshift` method inserts the given values to the beginning of an array and returns the new length of the array.
  * __Syntax__(From MDN):
    ```JavaScript
    unshift(element0);
    unshift(element0, element1);
    unshift(element0, element1, /* ... ,*/ elementN)
    ```
  * __EXAMPLE__(From MDN):
    ```JavaScript
    var prime = [1, 3, 5, 7, 11];
    prime.unshift("Prime Number");
    console.log(prime);
    ```
