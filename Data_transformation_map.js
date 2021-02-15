//In array there are three most important array methods for the data transformation. So basically these are the methods that are used
//to create new arrays based on transforming data from other arrays.And in recent years these tools have become really popular
//And the tools which we are talking about is map, filter and reduce.
//First the map method is yet another method that we can use to loop over the arrays.So map method is
//somehow similar to the foreach loop but with the difference that the map creates a brand new array
//based on the original array. In simple words, it basically mutates the array.

//So essentially map method takes an array,and then loop over that array and then in each iteration it applies
//a callback function to the current array element.

const USDdollar = [5, 14, 9, 17, 21, 11, 25];
const conversion = USDdollar.map(function (rupess) {
  return rupess * 120;
});

console.log(conversion);

//We can also be  able to do it using for of or forEach loop.
//Let's see first using for of loop.

const newUSDdollar = [];
for (const price of USDdollar) newUSDdollar.push(price * 120);
console.log(newUSDdollar);

//Push method of array generally does not work in the case of forEach loop.
const modifyUSDdollar = [];
USDdollar.forEach(function (newprice) {
  if (newprice === number) {
    newUSDdollar.push(newprice * 118);
  }
  console.log(modifyUSDdollar);
});

//Sounlike forEach method map method has also access to these three parameters passed inside the callback
//function.
//So let's illustrate that.
