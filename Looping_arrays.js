//Lopping in arrays is done in baiscally two ways in which the first one is to use for of loop and the second
//one is to use forEach loop. for of loop is the traditional way of looping arrays while forEach loop is the modern
//way of looping over the arrays that is in ES6.

//So let's loop over the arry using both techniques.
//for of loop :
//So at first create an array.
const bankOp = [200, 300, -400, 500, 600, -700, -150, 147, 157];

for (const operation of bankOp) {
  if (operation > 0) {
    console.log(`You deposited ${operation} amount`);
  } else {
    console.log(`Withdrawl of amount ${operation} was successful`);
  }
}

// Now nextup we gonna loop over the array using forEach loop.
//In for each loop we always use the call back function which actually calls the parameter defined inside that
//function.

console.log("------FOR EACH-----");
bankOp.forEach(function (operation) {
  if (operation > 0) {
    console.log(`You deposited ${operation} amount`);
  } else {
    console.log(`Withdrawl of amount ${operation} was successful`);
  }
});
