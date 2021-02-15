//As in strings the most common method of array is slice which works the same way as it does in the string.
//As the slice method extracts basically the part of the string. In array also it basically extracts the parts
//of the array.
//So let's create one array.

let name = [
  "Randhir",
  "Pankaj",
  "Suraj",
  "Raman",
  "Aayush",
  "Mithlesh",
  "Abishec",
];
//Here starting from the index two of the array it will start printing the remaining element after that index.
console.log(name.slice(2));
//Negative value in slice method specifies the array elements from the end.For ex here in this array -1 is the
//last index of the name array here.Similarly -2 is the second last element.
console.log(name.slice(-1));
//Slice method also has two parameters inside it in which first one is the beginning part and the second one is
//the end part. For ex: here it will basically print the part of the array starting from index  number 1
// from the beginnng and starting from the index number -1 from the end.  And betwwen that indexes the
//element which is present gets printed.

console.log(name.slice(1, -1));
console.log(name.slice(2, -1));
console.log(name.slice(1, -3));

//Using the slicemethod original array remains the same.
//Let's check that. After performing  so many operations with slice method here upwards we still get the
//whole array.

console.log(name.slice());

//Another simple method in array about which we talk about now is the splice method. Both slice method and
//splice method works in the same way. The only fundamental difference between these two is that splice method
//actually mutate the array.It means that the original array changed after performing some operations with
//splice method.

console.log(name.splice(-1));
console.log(name.splice(1, -1));
console.log(name.splice());

//Next up we have the method called as reverse which basically reverse the array from backwards.
//The reverse method also actually mutate the arrays.
const alphabet = ["e", "d", "c", "b", "a"];
console.log(alphabet.reverse());

// for concatenation of tha array also also we have the the method called as concat.
//concat method basically combine the two arrays togeteher an store it in some variable.

const alphabets = ["e", "d", "c", "b", "a"];
const alphabetmiddle = ["f", "g", "h", "i", "j"];
const letters = alphabet.concat(alphabetmiddle);

//But on the other hand the join method also jointhe two arrays but in theform of strings separated by
//some separator.

console.log(letters.join("-"));
