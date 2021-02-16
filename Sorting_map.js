//The idea is to traverse the array once to extract the actual values used for sorting into a temporary array.
//sort the temporary array, and then traverse the temporary array to achieve the right order.

// the array to be sorted
var list = ["Delta", "alpha", "CHARLIE", "bravo"];

// temporary array holds objects with position and sort-value
var mapped = list.map(function (el, i) {
  return { index: i, value: el.toLowerCase() };
});

// sorting the mapped array containing the reduced values
mapped.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// container for the resulting order
var result = mapped.map(function (el) {
  return list[el.index];
});
