const myMap = new Map();

const simpleObject = { name: "test" };

myMap.set("keyAsString", "it is string key");
myMap.set(1, "it is number key");
myMap.set(true, "it is boolean key");
myMap.set(simpleObject, "it is object key");

console.log(myMap.get("keyAsString"));
console.log(myMap.get(1));
console.log(myMap.get(true));
console.log(myMap.get(simpleObject));

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())
