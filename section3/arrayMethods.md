pop:
Pop removes the last element of an array and shortens the array.

For example:
var spideyComics = ['120', '121', '129', '164'];
var traded = spideyComics.pop();

This would remove issue 164 from the array.

push:
Push adds elements to the end of an array, and extends the length of the array. It can also be used to push elements from a second array into the first one.

For example:
var blackSuitSpidey = ['asm252', 'asm253', 'asm254']
var blackSuitWars = ['mssw8', 'mssw9', 'mssw10', 'mssw11', 'mssw12']

we can use blackSuitSpidey.push(blackSuitWars) to combine the lists.

shift:
Shift removes elements from the beginning of an array and moves everything forward, towards element 0.

For example:
var dragonsToDefeat = ['green', 'red', 'blue', 'white', 'black'];
var defeatedDragons = dragonsToDefeat.shift();

This will remove the green dragon from the list and shift the rest down towards 0.

unshift:
Unshift will add an element to the beginning of the array and move everything up one element.

For example:
var livingDragons = ['red', 'blue', 'white', 'black'];
livingDragons.unshift(green);

This will show that we realized the green dragon from before was only stunned, not dead, and add it back to the beginning of the array.
