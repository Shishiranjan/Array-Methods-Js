//Suppose we want to print 5 numbers consecutively but at first 1 gets printed in 1 second, then 2 gets
//printed in 2 second, 3 gets printed in 3 second and so on and so forth.
//If we have to print all the consecutive numbers then of course we have to use for loop and then
//specify the condition  down bwlow and based on that condition the data gets printed.

//Why we actually use let here but not var because let is actually block scoped and it also creates a new
//reference every time when the function is called.
function data() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Hey do you understand this confused topic");
}
data();
