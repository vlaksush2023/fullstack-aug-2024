# Functional Programming in JavaScript
Functional Programming is a programming paradigm that treats computation as the evaluation of mathematical functions.

### Key Concepts:
Pure Functions
Immutability
First-Class Functions
Higher-Order Functions
Avoid Side Effects

### Pure Functions:
These are functions that, given the same inputs, will always return the same output without altering any outside state.
Example: 
```js
function add(a, b) 
{ 
    return a + b; 
}
```
– This is a pure function since its output only depends on its inputs.


### Immutability:
In FP, data is immutable, meaning once a value is set, it can't be changed. Instead of modifying data, new data is created.
Example: Instead of modifying an array, we create a new array.

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]

```

### First-Class Functions:
In JavaScript, functions can be passed as arguments, returned from other functions, and assigned to variables, making them first-class citizens.

```js
const greet = () => console.log("Hello!");

```

### Higher-Order Functions:
These are functions that take other functions as arguments or return functions. They're used to create more abstract, reusable code.

```js
function doMath(fn, x, y) {
  return fn(x, y);
}
const result = doMath((a, b) => a + b, 5, 10); // 15

```

### Avoid Side Effects
Side effects are when a function changes some state outside of itself (like modifying a global variable). FP avoids side effects to make the code more predictable and testable.

### Why Functional Programming?
Functional programming promotes writing predictable, testable, and maintainable code.  
It avoids the complexities of state changes and side effects that make debugging difficult in large systems.  


## Demo
```js
// Pure Function
function multiply(a, b) {
  return a * b;  // always returns the same result for the same inputs
}

// Higher-Order Function
function applyOperation(arr, operation) {
  return arr.map(operation);  // applies the passed function to each element
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const doubled = applyOperation(numbers, (num) => multiply(num, 2));

console.log(doubled); // [2, 4, 6, 8, 10]

```

# Lab - Building a Functional Product Manager in JavaScript
## Objectives
* Understand and apply functional programming concepts such as pure functions, immutability, and higher-order functions.  
* Use JavaScript’s map, filter, and reduce functions to manipulate an array of product objects.  
* Create and test functions that follow functional programming principles.  

## Steps
### Step1 - Create an array of products
* Create a new JavaScript file (productManager.js).  
* Define an array of product objects with properties: name and price.  
* Hint :  Each product should look like this
```js
 { name: 'ProductName', price: 100 }
```

### Step 2: Create a pure function to apply a discount
* Write a function called applyDiscount that takes two parameters: product (an object) and discount (a percentage).  
* This function should return a new product with the discounted price, without modifying the original object.  

* Hint: Use the ... (spread operator) to create a copy of the product object.  

### Step 3: Apply discount to all products (higher-order function)
* Use JavaScript’s map() function to apply a 10% discount to all products in the array.  
* Store the new array of discounted products in a variable discountedProducts.  

### Step 4: Filter products by price
* Write a function filterByPrice that takes an array of products and a maxPrice.  
* Use filter() to return only products that have a price equal to or below maxPrice.  
* Hint: filter() is a higher-order function that takes a function as an argument.  

### Step 5: Calculate total price (optional)
* Write a pure function calculateTotal that uses reduce() to sum up all product prices in the array.  
* Return the total price for the list of discounted products.  


<hr />


# Functions as First-Class Citizens
Functions as First-Class Citizens: Functions can be treated like any other value in JavaScript. They can be stored in variables, passed as arguments, or returned from other functions.

## Demo
```js
// Storing a function in a variable
const greet = function(name) {
  return `Hello, ${name}!`;
};

// Passing a function as an argument
function callFunction(fn, value) {
  return fn(value);
}

console.log(callFunction(greet, 'Suresh'));  // "Hello, Suresh!"

```


# Higher-Order Functions and Callbacks

* Higher-Order Functions: Functions that take other functions as arguments or return functions.  
* Callbacks: Functions passed into another function to be executed later.  

## Demo
```js
// Higher-order function that accepts a callback
function fetchData(callback) {
  const data = { id: 1, name: 'John Doe' };
  callback(data);  // calling the callback with the data
}

// Callback function
function displayData(user) {
  console.log(`User: ${user.name}`);
}

// Call the higher-order function with the callback
fetchData(displayData);  // "User: John Doe"

```

# Map, Filter and Reduce

1. `Map:` Transforms each element of an array by applying a function and returns a new array.  

2. `Filter:` Returns a new array with elements that pass a test.  

3. `Reduce:` Accumulates array elements into a single value based on a reducer function.

## Demo
```js
const numbers = [1, 2, 3, 4, 5];

// Map - multiply each number by 2
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Filter - keep only numbers greater than 3
const filtered = numbers.filter(num => num > 3);
console.log(filtered);  // [4, 5]

// Reduce - sum all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

```

# Other Higher-Order Functions

4. `forEach`: Executes a function for each element in an array, but does not return a new array.  
5. `some`: Checks if at least one element in the array passes a given test, returns true or false.  
6. `every`: Checks if all elements in the array pass a given test, returns true or false.  

## Demo
```js
const numbers = [1, 2, 3, 4, 5];

// forEach - log each number
numbers.forEach(num => console.log(`Number: ${num}`));

// some - check if there's any number greater than 4
const hasLargeNumbers = numbers.some(num => num > 4);
console.log(`Has numbers greater than 4: ${hasLargeNumbers}`);  // true

// every - check if all numbers are greater than 0
const allPositive = numbers.every(num => num > 0);
console.log(`All numbers are positive: ${allPositive}`);  // true

```

<hr />


# Asynchronous Programming in JavaScript
* Asynchronous Programming: JavaScript executes tasks without blocking the flow of the program.  
* Synchronous vs. Asynchronous: In synchronous code, one task is completed before the next starts.  
* In asynchronous code, multiple tasks can be initiated, and they complete whenever they're ready, allowing the rest of the code to keep running.  

# Asynchronous Programming with Callbacks
Callback Function: A function passed into another function as an argument and executed after a task is completed.  

## Demo
```js
console.log('Start');

// Simulating an asynchronous task using setTimeout (a common JS async function)
setTimeout(function () {
  console.log('Task Complete'); // Callback function executed after 2 seconds
}, 2000);

console.log('End');

```

# Asynchronous Programming with Promises
Promises: Objects representing the eventual success or failure of an asynchronous task.  
They have three states: pending, fulfilled, or rejected.  

## Demo
```js
console.log('Start');

// Creating a promise that resolves after 2 seconds
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Task Complete');
  }, 2000);
});

// Handling the promise once it resolves
myPromise.then((message) => {
  console.log(message);
});

console.log('End');

```

# Asynchronous Programming with Async/Await
Async/Await: A cleaner and more readable way to handle promises.   
async functions always return a promise, and await is used to pause the execution of a function until a promise is resolved.  

## Demo
```js
console.log('Start');

// Async function to handle promises
async function myAsyncFunction() {
  console.log('Fetching data...');
  let message = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task Complete');
    }, 2000);
  });
  console.log(message);
}

myAsyncFunction();

console.log('End');

```


## Async Recap
* Asynchronous JavaScript allows multiple tasks to run without blocking the main thread.  

* Callbacks: Functions passed as arguments to handle async results, but they can lead to "callback hell".  

* Promises: Cleaner way to handle async tasks, allowing us to chain .then() and .catch() for success and failure.  

* Async/Await: Syntactic sugar over promises, making async code look synchronous, improving readability and reducing complexity.  

<hr />

## Lab -  Simulating API Call with Asynchronous Code

### Objective
Learn how to perform tasks asynchronously and understand their non-blocking nature.

### Steps
1. Create a function simulateAPICall() that uses setTimeout() to simulate a 2-second delay before logging "API Call Complete".  
2. Log "Starting API Call" before calling the function and "API Call Started" immediately after.  
3. Notice the order of execution and understand how asynchronous functions don't block the code flow.  



## Lab - Handle Asynchronous File Reading with Callbacks   

## Objective
Learn how to use callbacks to handle asynchronous tasks like reading a file.   
## Steps
1. Create a callback function fileReadCallback() that logs "File Reading Complete" after the task.  
2. Use setTimeout() to simulate file reading for 3 seconds inside readFile(), and call fileReadCallback() afterward.  
3. Log "Reading File" before starting the file read operation, and "Waiting for File" after calling the read function.  

## Lab -  Fetching Data with Promises
## Objective  
Use promises to fetch data asynchronously and handle success and failure cases.  

## Steps
1. Create a promise fetchData() that resolves with "Data Fetched Successfully" after a 2-second delay.  
2. Use .then() to log the success message and .catch() to handle any errors.  
3. Simulate an error condition where the promise rejects with "Failed to Fetch Data" and handle it using .catch(). 

## Lab - Processing Multiple Async Tasks with Async/Await

## Objective
Understand how to manage multiple asynchronous tasks using async/await.

## Steps 
1. Create two async functions taskOne() and taskTwo().  
2. Each should return a promise that resolves after 2 and 3 seconds, respectively, with messages "Task One Complete" and "Task Two Complete".   
3. Write an async function processTasks() that waits for both tasks to finish using await and logs their results.   
4. Call processTasks() and observe the order of task completion.  


<hr color='red' />
