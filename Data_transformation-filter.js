//Next up we have the filter method which as the name says is used to filter for elements in the original //array which satisfy a certain condition.Suppose we have an array like this.
//const number = [1, 2, 3, 4, 5];
//And here we in this example we are only looking for the elements greater than 2.
//current > 2
//So all the elements which is greater than two will make it into an new filtered array.Or in other words //the elements for which the condition is true will be included in an new arrayb that the filter method
//returns. All other elements will be filtered out so that they will not be included into an new array.
//Here the condition is that only those numbers get filtered out in a new array which is greaterthan 0;

const bankOp = [200, 300, -400, 500, 600, -700, -150, 147, 157];
const deposits = bankOp.filter(function (data) {
  //here simply by returning the condition it will automatically check the condition and after checking
  //the codition the the results get stored inside the deposits array.
  return data > 0;
});
console.log(deposits);

const bankOp2 = [205, 305, -410, 500, 600, -700, -150, 147, 157];
const deposits = bankOp.filter(function (data) {
  //here simply by returning the condition it will automatically check the condition and after checking
  //the codition the the results get stored inside the deposits array.
  return data < 0;
});
console.log(deposits);
