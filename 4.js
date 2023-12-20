// Create a new set
const mySet = new Set();

// Add values to the set
mySet.add(1);
mySet.add("Hello");
mySet.add(true);
mySet.add({ name: "John" });

// Check if a value exists in the set
console.log(mySet.has(1)); // Output: true

// Get the size of the set
console.log(mySet.size); // Output: 4

// Iterate over the set
mySet.forEach((value) => {
  console.log(value);
});

// Remove a value from the set
mySet.delete("Hello");

// Clear all values from the set
mySet.clear();
