//Reversing an element in an array like object.
//The following example creates an array-like object a, containing three elements and a length.
//property, then reverses the array-like object. The call to reverse() returns a reference to the reversed array-like object a.

const a = { 0: 1, 1: 2, 2: 3, length: 3 };

console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); //same syntax for using apply()

console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}
