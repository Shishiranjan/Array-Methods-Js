//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//The every method executes the provided callback function once for each element present in the array.
//until it finds the one where callback returns a falsy value. If such an element is found, then the every
//method immediately returns false. Otherwise, if callback returns a truthy value for all elements, every returns true.

const randomNum = [48, 18, 15, 18, 88, 84, 54];

const evenNum = (number) => number % 2 === 0;

console.log(randomNum.every(evenNum));
