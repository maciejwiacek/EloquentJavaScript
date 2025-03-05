// ARRAY AND OPERATIONS

const { todo } = require("node:test");

let array = [0, 1, 2];
array.push(3);
array.push(4);
array.pop();
console.log("--- ARRAY ---");
console.log(array);

// OBJECTS

let description = {
    work: "Went to work",
    "touched tree": "Touched a tree",
};
console.log("--- OBJECTS ---");
console.log(description.work);
console.log("work" in description); // in operator tells you if the property exists in the object or not
console.log(Object.keys(description));
delete description.work; // the difference between deleting and setting to null is that it will delete it from the object fully
console.log(Object.keys(description));
Object.assign(description, { study: "Went to school", ate: "Ate a lunch" }); // Adds properties from one object to another
console.log(Object.keys(description));

// MUTABILITY

let object1 = { value: 10 };
let object2 = object1; // object2 has the same address as object1 - objects are reference types
let object3 = { value: 10 }; // object3 has the same value, but its linked to different address
console.log("--- MUTABILITY ---");
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(`${object1.value} ${object2.value} ${object3.value}`);

// USEFUL ARRAY METHODS
console.log("--- ARRAY METHODS ---");
let toDoList = [];
function remember(task) {
    toDoList.push(task); // Adds a task to the end
}
function getTask() {
    toDoList.shift(); // Removes a task from the front
}

function rememberUrgently(task) {
    toDoList.unshift(task); // Adds a task to the front
}

remember("Buy tomatoes");
remember("Buy potatoes");
rememberUrgently("Write some code");
console.log(toDoList);
getTask();
console.log(toDoList);

// indexOf and lastIndexOf are looking for an index of first/last occurance of a given item
// They take also second (optional) parameter, which is where to start
console.log([1, 2, 3, 2, 1].indexOf(2)); // indexOf - returns an index of first matching item
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // lastIndexOf - returns an index of last matching item

// slice - returns array between start (inclusive) and end (exclusive) indexes
console.log([1, 2, 3, 2, 1].slice(2, 4));
console.log([1, 2, 3, 2, 1].slice(2)); // if end is not given it will go from index to end

// concat - add two arrays together to create a new one
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));

// ---------------
// STRINGS METHODS
// ---------------
