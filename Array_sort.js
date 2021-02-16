//The sort method simply returns the elements of an array in sorted order. But in which order the element
//is sorted. So by default simply the sort method sorts the elements in ascending order by at first
//converting the numbers into strings.
//So basically in arrays there is a two way to sort the elements of an array.
//1: First one is without using the compare function and the second one is
//2: With using a compare function.

//If compareFunction is not supplied, all  array elements are sorted by converting them into strings
//For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers
//are converted to strings, "80" comes before "9" in the Unicode order.

//But if the compare function is give the all the array elements are sorted according to the return value of
//the compare function.

//To compare numbers instead of strings, the compare function can subtract b from a like this.

function compare(a, b) {
  return a - b;
}

//Sorting both numbers and strings without using compare function.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);

//The following example creates four arrays and displays the original array, then the sorted arrays.
//The numeric arrays are sorted without a compare function, then sorted using again compare function.

var stringArray = ["Blue", "Humpback", "Beluga"];
var numericStringArray = ["80", "9", "700"];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log("stringArray:", stringArray.join());
console.log("Sorted:", stringArray.sort());

console.log("numberArray:", numberArray.join());
console.log("Sorted without a compare function:", numberArray.sort());
console.log("Sorted with compareNumbers:", numberArray.sort(compareNumbers));

console.log("numericStringArray:", numericStringArray.join());
console.log("Sorted without a compare function:", numericStringArray.sort());
console.log(
  "Sorted with compareNumbers:",
  numericStringArray.sort(compareNumbers)
);

console.log("mixedNumericArray:", mixedNumericArray.join());
console.log("Sorted without a compare function:", mixedNumericArray.sort());
console.log(
  "Sorted with compareNumbers:",
  mixedNumericArray.sort(compareNumbers)
);
