const currencies = new Set([
  "USD",
  "EURO",
  "USD",
  "RS",
  "DIRHAM",
  "DIRHAM",
  "RIYAL",
]);
console.log(currencies);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
