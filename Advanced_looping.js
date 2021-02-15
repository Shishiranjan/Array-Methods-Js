//For of loop.
//In for of loop the first parameter defined inside the variable is the index and the second parameter is
//the actual value which is the different value of array itself
const bankOp = [200, 300, -400, 500, 600, -700, -150, 147, 157];

//here i basically signifies the index and then operation basically signifies the actual value of the array.
//To loop over an entire array, we use basically entries method.
for (const [i, operation] of bankOp.entries()) {
  if (operation > 0) {
    //here it will start printing the statement from the first index of the array.
    console.log(`operation ${i + 1}: You deposited ${operation} amount`);
  } else {
    console.log(
      `operation ${i + 1}: Withdrawl of amount ${Math.abs(
        operation
      )} was successful`
    );
  }
}

//But on the other hand the call back function which is passed inside the forEach loop contains three
//Parameters in which the first one is the actual value and the second one is the index and then finally
//the third one is an entire array.

console.log("------FOR EACH-----");
bankOp.forEach(function (operation, index, array) {
  if (operation > 0) {
    console.log(`operation ${index + 1}: You deposited ${operation} amount`);
  } else {
    console.log(
      `operation ${index + 1}: Withdrawl of amount ${Math.abs(
        operation
      )} was successful`
    );
  }
});
