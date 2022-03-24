# Array methods

## Pop

#### What it does
The `Pop` method is used when you want to remove the last item in an Array.

**Syntax**: Array.pop()

**Example**:
```javascript
var food = ['noodles', 'pizza', 'crabs'];
food.pop()
//This line of code calls the `Pop` method on the food Array
food;
/*this line of code calls the food Array and should only list ['noodles', 'pizza']*/
```

## Push

#### What it does
The `Push` method is used when you want to add one or more items to the end of an Array.

**Syntax**: Array.push(insertItemsHere)

**Example**:
```javascript
food.push('crabs', 'cheese');
/*this line of code calls the push method on the food Array to add crabs and cheese at the end*/
```

## Shift

#### What it does
the `Shift` method is used to remove the first item in an Array.

**Syntax**: Array.shift()

**Example**:
```javascript
food.shift()
/*This line of code calls the shift method on the food Array to remove the first element*/
```

## Unshift

#### What it does
The `Unshift` method is used when you want to add an item to the start of an Array.

**Syntax**: Array.unshift(insertItemsHere)

**Example**:
```javascript
food.unshift('dumplings')
//This line of code calls the unshift method on the food Array to add dumplings.
```
