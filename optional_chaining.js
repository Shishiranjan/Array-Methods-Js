const products = [
  { name: "dress", price: 600 },
  { name: "cream", price: 60 },
  { name: "book", price: 200 },
  { name: "bottle", price: 50 },
  { name: "bedsheet", price: 350 },
];

// Writing the different array methods
// on different lines increases the
// readability
const sale = products
  .filter((product) => product.price > 100)
  .map(
    (product) => `the ${product.name}  
        is ${product.price / 2} rupees`
  );

console.log(sale);
