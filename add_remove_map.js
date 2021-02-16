//flatMap can be used as a way to add and remove items or to modify the number of items during when flatMap
//method is working.In other words, it allows you to map many items to many items by handling each input item
//Separately.

// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1

let a = [5, 4, -3, 20, 17, -33, -4, 18];
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap((n) => (n < 0 ? [] : n % 2 == 0 ? [n] : [n - 1, 1]));

console.log(a);
