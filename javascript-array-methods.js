// Array of objects (name, price)
const items = [
  { name: "Bike0", price: 100 },
  { name: "Bike1", price: 200 },
  { name: "Bike2", price: 300 },
  { name: "Bike3", price: 400 },
  { name: "Bike4", price: 500 },
  { name: "Bike5", price: 600 },
  { name: "Bike6", price: 700 },
];

// Filter, it filters out and return the items which pass through the condition
const filteredContent = items.filter((i) => i.price > 500);
// Map, it returns a copy of an array
const mapContent = items.map((i) => i.name);
// Find, it's going to return very first item it'll find
const findContent = items.find((i) => i.name === "Bike5");
// forEach, it doesn't return anything. it's a good replace of for loop if you know the value in advance
const forEachContent = items.forEach((i) => console.log(i.price));
// Some, it doesn't print anything, It returns true of false if it meets the condition for anything
const sumContent = items.some((i) => i.price <= 500);
// Every, it checks every single item in the array meets the condition
const everyContent = items.every((i) => i.price <= 500);
// Reduce, startingPoint value is currentTotal value initially.
let startingPoint = 0;
const reduceContent = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, startingPoint);
// Includes, It checks if the specified item is in the array or not
const includeContent = items.map((item) => item.name.includes("Bike5"));

