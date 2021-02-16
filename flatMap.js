//The flatMap method basically returns a new array formed by applying a given callback function to each
//element of the array and the flattening the result by level 1. It is identical tothe map method followed
//by flat of depth 1, but slightly more efficient than calling those methods separately.

let arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
console.log(arr1);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);

//Another better example to show this method.

let arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
