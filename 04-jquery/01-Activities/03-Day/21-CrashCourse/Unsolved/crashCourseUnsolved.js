// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

const variable = "empty string";

// 2. ARRAYS
// ==========================================================

// Create an array of five strings

const stringArray = [
  "Hello",
  "Goodbye",
  "Good Morning",
  "Good Afternoon",
  "Get Out"
];

// Create an array of five numbers

const numberArray = [0, 1, 2, 3, 4];

// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"
for (let i = 0; i < 5; i++) {
  console.log("My Name is Bob five times");
}
// Create a for loop that loops through your five string array
for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}
// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function
const divide = (first, second) => {
  console.log(first / second);
};

divide(5, 3);
// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

const arrayPrinter = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

arrayPrinter(numberArray);

// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

// Console log any three of the properties in that object

const javObj = {
  name: "Luc",
  age: 30,
  job: "content reviewer"
};

console.log(javObj.name, javObj.age, javObj.job);
// Create an Array of 5 Objects

// Console log 3 properties for every one of the five objects
const objArray = [
  { name: "Asshole" },
  { name: "Douchebag" },
  { name: "Dickwad" },
  { name: "MF" },
  { name: "Fucktart" }
];

// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.

const button = $("<button>");
button.addClass("hello");

$("#app").append(button);

$(".hello").on("click", function() {
  alert("I'm working");
});

// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
