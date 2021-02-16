//The some method in array basically tests the result of the array and then log the output to the console
//as true if it passes the condition and false it it fails to pass the condition.
//Suppose we have an array having some elements and the condition is that that if any even element is
//present inside the array then it returns true otherwise it returns as false.
//So let's do that.

const randomNum = [4, 8, 7, 54, 74, 14, 19];

const evenNum = (number) => number % 2 === 0;

console.log(randomNum.some(evenNum));

//The some methos actually executes the callback function for every single element present inside the array.
//And when it finds the element where it satisfies the condition then the call back function returns a tru
//thy value. But if whole element of array is traversed and the element is not found then in that case
//the cllback function basically returns a falsy value.
