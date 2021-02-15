//We can also be able to loop over an entire map.
//A\Map is nothing but the collection of arrays.
//the looping inside a mapworks exactly in the same way as it does in the map.
//In the map we have two parameters in which the first one is the key and the second one is the aactual value.

const currencies = new Map([
  ["USD", "United states of America dollar"],
  ["EUR", "Pound Sterling"],
  ["RS", "nepali Ruppee"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

for (const value of currencies) {
  console.log(`${value}`);
}
