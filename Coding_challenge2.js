//Find  sarah's dog and log to the console whether it is eating too much or too little.
//HINT: Some dogs have multiple owners, so you first need to find sarah in the owners array,and so this one is a
//bit tricky(on purpose).

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Micheal"] },
];

//const result = words.filter(word => word.length > 6);
//Her it is the code for the previous challenge.
const choice = dogs.map((dog) =>
  Math.trunc((dog.recommendedFoodPortion = dog.weight ** 0.75 * 28))
);

const eating = dogs.filter((dog) => dog.owners.includes("Sarah"));
console.log(eating);

//The condition for eating too much is that if the curFood is greater than recommended food.
//But if the curFood is less than the  recommended food then this is the condition for eating too little.

console.log(
  `Sarah dog is eating too ${
    eating.curFood > eating.recommendedFoodPortion ? "much" : "little"
  }`
);

//Task 3:
// Create an array containing all the owners of dogs who eat too much and an array of all owners of dogs who
//eat too little.
//For eating too much
const eatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFoodPortion)
  .map(dog.owners)
  .flat();
console.log(eatTooMuch);

//For eating too little

const eatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFoodPortion)
  .map(dog.owners)
  .flat();
console.log(eatTooMuch);

//Task 4: Log a string to the console created for each array created previously. like this:" Matilda and alice and "
//bob's dogs eat too much and " sarah and john and micheal's dogs eat too little."

console.log(`${eatTooMuch.join("and")} dogs eat too much!`);
console.log(`${eatTooLittle.join("and")} dogs eat too little!`);

//Task 5:
//Log to the console whether there is any dog eating exactly the amount of food that is recommended(just
//true or false)

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFoodPortion));

//Task 6:
//Log to the console whether there is any dog eating an OKAY amount of food that is recommended(just
//true or false)
//For eating an OKAY amount of food we have to satisfy this condition.
//current > (recommendedFoodPortion * 0.90) && current < (recommended * 1.10)

console.log(
  dogs.some(
    (dog) =>
      dog.curFood > dog.recommendedFoodPortion * 0.9 &&
      dog.curFood < dog.recommendedFoodPortion * 1.1
  )
);

//Task 7:
//Create an array containing the dogs that is eating an okay amount of food.

const eatTooMuch = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFoodPortion * 0.9 &&
    dog.curFood < dog.recommendedFoodPortion * 1.1
);

//Task 8:
// Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order.
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFoodPortion - b.recommendedFoodPortion);
console.log(dogsCopy);
