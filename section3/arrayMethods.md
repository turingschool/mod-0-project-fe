* `.pop()`

    This method removes the last element of the array and returns that element. This would mean in a list if I had an array ordered `var = sports
    itemSports = ["hockey", "football", "track", "basketball"]` using the `console.log(sports.pop());` should output basketball to the console. Then we can call the array itemSports to the console and see the array without the last element of `"basketball"`.

* `.push()`

   This method adds one or more elements to the end of an array and returns to the console the new length of the array. To continue the example `var sports =["hockey", "football", "track", "basketball"]` using the `console.log(sports.push(soccer));` would add in the new element of `soccer` into the list like `["hockey", "football", "track", "basketball" , "soccer"];` and we would be able to view be able to tell it was added by using the `.length` method that will output `4` using the index numbering or if we use `.count` mirroring the MDN site, it should output `5`. I can add as many new elements to my array as necessary.

* `.shift()`

   This method removes the first element in an array and returns that removed element causing a change in the  `.length` of the array. Using the same example above `itemSports =["hockey", "football", "track", "basketball", "soccer"];` to utilize this method it would look like `itemSports.shift();` and the new array would look like ` itemSports = ["football", "track", "basketball", "soccer"];`

* `.unshift()`

   This method adds one or more elements to the begining of an array and returns the length of the array upon output. Same example used as prior if I wanted to add the values of hockey and gaming, I would utilize `console.log(itemSports.unshift("hockey", "gaming"));` and it will create 2 new items in the beginning of the array `itemSports ["hockey", "gaming", "football", "track", "basketball"];`

   /*

   These methods allow us to manipulate our arrays, adding in what we need, taking out what we don't. I see here on the MDN doc that it we are not supposed to use strings as element indexes and that is sort of confusing to me, it is saying that is an `associative array` instead. Looking up the differences but still somewhat confused on this. I am noticing that in our work there are strings within our examples, I am thinking this is a terminology issue on my end but will continue to work and adapt my understanding.

    */
