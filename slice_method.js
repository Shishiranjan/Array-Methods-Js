//it bascically extract the part of an array from one starting index to another end index.

const BajajBike = [
  "Pulsar150",
  "Pulsar160",
  "Pulsar200",
  "Pulsar220",
  "Discover125",
  "Platina100",
];

const BikeIndex = BajajBike.slice(2);
console.log(BikeIndex);

const BikeIndex1 = BajajBike.slice(2, 5);
console.log(BikeIndex1);
