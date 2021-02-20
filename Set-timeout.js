//Settimeout function basically set a timer to a callback function specifying that whenever we call that
//callback function after some time which is attatched to that function, the print statement gets printed.
//Suppose we have an example illustrating that when you order a pizza then it gets delivered to your house
//in suppose 5 seconds.
//Let's see that:

const ingredeints = ["olives", "spinach"];
const pizzaLover = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1}) and ${ing2}`),
  3000,
  ...ingredeints
);

//Javascript actually does not wait for a certain event to occur. As for example, the timer of 3000 milliseconds
//is set to print this statement which is inside the callback function of setTimeout. During that  3 milliseconds
//javascript actually runs in the background and then searches for another function statements or any other
//print statements and if during that time period this statement comes then it gets printed first.
console.log("Waiting");
