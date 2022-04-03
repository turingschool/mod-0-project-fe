## Different Array Methods
1. pop
Removes the last item in the array and returns that item if you type in myArray.pop(). So if myArray = [0,1,2,3], it would remove the 3 from the list and return 3. Then myArray would just be [0,1,2] and only contain 3 elements instead of 4.

2. push
It adds an item (or multiple) onto the end of the array. You have to put the items you are adding inside the () separated by commas to add them. It then returns the length of the new array. If you don't specify an item to add i.e. just empty () it will return the length of the existing array. for example myArray = [0,1,2] then myArray.push(3,4,5). It will return 6. The new myArray = [0,1,2,3,4,5] which has 6 elements.

3. shift
This sort of does the opposite of pop above. It removes the first item of the array and then displays that removed item. So if myArray = [0,1,2,3] then if you type in myArray.shift() it will remove the 0 and then return that value. The other elements in the array just move one space to the "left." Then the new array will just be [1,2,3].

4. unshift
This adds new elements to the beginning of the array. Sort of the opposite of push. You can add as many elements as you wish to the front by inserting them between the parentheses. For example myArray =[1,2,3] you can use myArray.unshift(4,5,6) and they will get added to the zero position essentially. The other values will get pushed to the "right." The new myArray = [4,5,6,1,2,3].
