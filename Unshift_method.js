//unshift method actually add the elements to original array from starting position.
const animals = ["pigs", "goats", "sheep"];

const count = animals.unshift("cows");
console.log(count);

console.log(animals);

animals.unshift("chickens", "cats", "dogs");
console.log(animals);
