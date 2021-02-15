//Find method is somehow similar to the filter method of an array. But there are two fundamental differences
//between these.
//First one is that filter method returns the whole array based on any condition but find method only
//returns the first occurence of element based on any condition.
//Second difference is that filter method actually returns a whole new array but find method actually
//returns only a single value.

const nepaliRuppee = [252, 147, 157, 257, 549, -420, -971, 214, -205];
const NegativeNeprup = nepaliRuppee.find((rupaiya) => rupaiya < 0);
console.log(nepaliRuppee);
console.log(NegativeNeprup);
