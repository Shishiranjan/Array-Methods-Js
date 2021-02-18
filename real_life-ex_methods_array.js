//Here we gonna see the real life example of array methods.
//here we basicaly apply the array methods in the different properties of objects defined inside the array.

const information = [
  { name: "Shishiranjan Thakur", age: 23, character: "Situation wise" },
  { name: "Raunak Thakur", age: 28, character: " good" },
  { name: "randhir shah", age: 22, character: "Allrounder" },
  { name: "Laxman Thakur", age: 54, character: "uncomparable" },
  { name: "Sundar Thakur", age: 25, character: "Not handled" },
  { name: "Aarti thakur", age: 19, character: "Lovable and caring" },
];

const newInfo = information.map((person) => person.name);
console.log(newInfo);

console.log("-------OR------");

const TwentyPlusPerson = information
  .filter((person = person.age >= 23))
  .map((person) => person.character);
console.log(TwentyPlusPerson);

const TotalAges = information
  .filter((person) => person.character != "Allrounder")
  .map((person) => person.age)
  .reduce((total, age) => total + age);
console.log(TotalAges);
