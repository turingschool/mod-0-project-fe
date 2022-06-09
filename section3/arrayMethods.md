### Array Methods

```
var pets = ["dog", "cat", "bird"];

```

How do you call a method? 
Start with the array name, a dot, and the method with parentheses. 

List of Methods:
- `pop`: This method **removes** an element from the **end** of the array and returns it. See how we apply this to the sample array above:
```
pets.pop(); //removes "bird" from pets and also logs it out on the console

console.log(pets);// logs ["dog", "cat"]
```

- `push`: This method **adds** an element to the **end** of an array. We specify the item we want to add inside the parentheses. See how we apply this to the sample array:
```
pets.push("frog"); //adds "frog" to pets

console.log(pets); // logs ["dog","cat","frog"] 
```

- `shift`: This method **removes** the **first** element from an array and returns it. See how we apply this to the sample array:
```
pets.shift(); //removes "dog" from pets and also logs it out on the console

console.log(pets); // logs out ["cat", "frog"]
```

- `unshift`: This method **adds** the element to the **beginning** of the array. We specify the item we want to add inside the parentheses.See how we apply this to the sample array:
```
pets.unshift("ferret"); //adds "ferret" to pets

console.log(pets); // logs out ["ferret","cat","frog"]
