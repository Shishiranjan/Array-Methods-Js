//We have heard the term of nested arrays right.So suppose we have array inside an array or no matter
//how deep the nested array is. The flat method simply merge all the subarrays and orginal arrays together
//and then put all the elements of both sub arrays and original arrays into an new array.

const priceFood = [52, 45, 82, 70, [41, 78, 89, [44, 78, 89, 56, 25]]];
console.log(priceFood.flat());

//The alternatives for using the flat method is to use both the reduce and concatenate method at the same time.

const newPriceFood = priceFood.reduce((acc, cur) => acc.concat(cur), []);
console.log(newPriceFood);

//The flat method also removes the empty slots in arrays.
//But while removing the empty slots in arrays it basically doesnot work in nested arrays.
const priceDrink = [41, , 45, 78, , (54)[(77, 87, 96)]];
priceDrink.flat();
