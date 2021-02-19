//1st Task:
//Loop over the array containing dog objects, and for each dog, calculate the recommended food portion,
//and add it to the object as the new property. Donot create a array, simply loop over the array.
//Formula: recommended food = weight*0.75*28(the result must be in grams of food, and the weight needs to )
//be in kg.

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Micheal"] },
];

const choice = dogs.map((dog) =>
  Math.trunc((dog.recommendedFoodPortion = dog.weight ** 0.75 * 28))
);
console.log(choice);
