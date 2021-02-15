//As we already studied map, reduce and filter methods of the array.But what we did previusly is to use
//these methods separately.
//Suppose at first i want to  convert the USD dollars into nepali ruppess and then add all the nepali rupees
//at the same time. So can we do that?
//And the answer is yes. In javascript, we can be able to assign the result of first method to the second one
//and then again perform some operations on the second method and then finally log the result to the
//console.

//And that mechanism is called chaining which is like a miracle in javascript.
const USDdollar = [5, 8, 7, 6, 14, 15, 17, 32];
const USDtoNepaliRup = 120;

const totalDeposit = USDdollar.filter((currency) => currency > 0)
  .USDdollar.map((currency) => currency * USDtoNepaliRup)
  .reduce((acc, currency) => acc + currency, 0);
console.log(totalDeposit);

//And then what even more interesting in javascript is that actually we don,t know the final output
//which logs to the console is the result of which method. So javascript actually allows us to explore the
//little detail of your method and to even to log it to the console tounderstand in a better way.

const totalDeposit = USDdollar.filter((currency) => currency > 0)
  .map((currency, i, arr) => {
    return currency * USDtoNepaliRup;
  })
  .reduce((acc, currency) => acc + currency, 0);
console.log(totalDeposit);
