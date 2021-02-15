//And finally we also have reduce method which we use to boil down all the elements of the original array into one single value.
//And the example of that is to add all the elements of an array together. When we add up every individual elements into a new array then it automatically becomes a single value.
//But we can also do many other interesting things. So for the example of adding up all the numbers in the array, we need to specify an operation like thisone where we have an accumulator variable. Then as the //reduce meythod loops over the array, it keeps adding the current element onto th accumulator until at //the end of the loop.
//Here the reduce ethod can be also treated as the snowball effect.
//So there is nonew array in this case but only the reduced value.

const bankOp = [200, 300, -400, 500, 600, -700, -150, 147, 157];
//here in the reduce method first parameter of callback function is always accumulator.
//We can understand accumulator as the starting number from where the addition starts.
//in this case here the operation is addition.
const totalBalance = bankOp.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);
console.log(totalBalance);

//We can also be able to use the reduce method using arrow functions and actually it is agood practice
//to do so.

const totalBalance2 = bankOp.reduce((acc, cur) => acc + cur, 0);
console.log(totalBalance2);
