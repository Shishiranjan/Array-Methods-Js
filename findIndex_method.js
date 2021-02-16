//The findIndex() method basically returns the first index of the array which satisfies the certain condition.
//Suppose that in array there are two elements which is greater than 50 and the first greater element than 50
//is at index 3 then the findIndex method returns the index 3 and then log it to the console.
//If there is no any  element present in the array which satisfy the certain condition then it simply returns -1.

const Kilometer = [55, 42, 58, 68, 80, 89, 98];
const largeKilometer = Kilometer.findIndex((distance) => distance > 90);
console.log(largeKilometer);
