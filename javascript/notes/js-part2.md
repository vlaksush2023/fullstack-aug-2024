# ECMAScript Overview
ECMAScript is the official standard that JavaScript follows, and every new version of JavaScript—whether it's ES5, ES6, or beyond—comes with new features and improvements based on this standard. These updates help us write more powerful and cleaner code, so it's always good to be aware of which version of ECMAScript you're using.




# Primary Data Types and Objects: 
## Note
* JavaScript has three core data types: 
    Numbers, Strings, and Booleans.  
    These types are the foundation for every operation in JavaScript.  
* In addition to the core data types, Objects allow us to group related data and functions together, making our code more structured and organized.

## Demo

```js
// Core Data Types
let age = 25; // Number
let name = "Ram"; // String
let isStudent = true; // Boolean

// Object
let person = {
  name: "Ram",
  age: 25,
  isStudent: true,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// Accessing Object Properties and Method
console.log(person.name); // Outputs "John Doe"
person.greet(); // Outputs "Hello, my name is John Doe"

```

# Undefined and Null: 

## Note
* `undefined` means a variable has been declared but not yet assigned a value.
* `null` is an intentional absence of any object value, meaning it's explicitly set to "nothing"


## Demo
```js
let unassignedVariable; // This is undefined because no value has been assigned
let emptyValue = null; // This is null because it's intentionally set to nothing

console.log(unassignedVariable); // Outputs: undefined
console.log(emptyValue); // Outputs: null
```

# Type Coercion and Conversion

## Note
* Type coercion is JavaScript's automatic conversion of one data type to another, like turning a number into a string when needed.  

* Type conversion is the explicit way of changing a value’s type, using functions like Number(), String(), or Boolean().
## Demo

```js
// Type Coercion
let result = "5" + 10; // JavaScript converts 10 to a string
console.log(result); // Outputs: "510" (string)

// Type Conversion
let strNumber = "123";
let convertedNumber = Number(strNumber); // Converts string to number
console.log(convertedNumber + 1); // Outputs: 124 (number)

```

# Date and Math Objects: 
## Note
* The Date object helps us work with dates and times, including creating, modifying, and formatting them.  
* The Math object provides built-in methods for common mathematical operations like rounding, generating random numbers, like that.

## Demo
```js
// Date Object Example
let today = new Date(); // Gets the current date and time
console.log(today); // Outputs the current date and time

let specificDate = new Date('2024-09-08'); // Create a date for a specific day
console.log(specificDate); // Outputs: Sun Sep 08 2024

// Math Object Example
let randomNum = Math.random(); // Generates a random number between 0 and 1
console.log(randomNum); // Outputs a random number

let roundedNum = Math.round(4.7); // Rounds the number to the nearest integer
console.log(roundedNum); // Outputs: 5
```


# Array

## Note
* Arrays are used to store collections of data, making it easier to manage lists of values like course names, user information, or products.

* Arrays are versatile and come with built-in methods for adding, removing, and manipulating data efficiently.

## Demo
### index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Course Management</title>
</head>
<body>
    <h1>Available Courses</h1>
    <ul id="courseList"></ul>

    <h2>Add New Course</h2>
    <input type="text" id="courseName" placeholder="Course Name">
    <button onclick="addCourse()">Add Course</button>

    <h2>Remove Last Course</h2>
    <button onclick="removeCourse()">Remove Last Course</button>

    <script src="script.js"></script>
</body>
</html>

```

### scripts.js
```js
// Array of Courses
let courses = ['Front-End', 'Back-End', 'Full-Stack'];

// Function to display the courses in the HTML
function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = ''; // Clear the list
    courses.forEach((course) => {
        let li = document.createElement('li');
        li.textContent = course;
        courseList.appendChild(li);
    });
}

// Function to add a new course
function addCourse() {
    const courseName = document.getElementById('courseName').value;
    if (courseName) {
        courses.push(courseName); // Add the course to the array
        displayCourses(); // Update the display
        document.getElementById('courseName').value = ''; // Clear input field
    }
}

// Function to remove the last course
function removeCourse() {
    courses.pop(); // Remove the last course from the array
    displayCourses(); // Update the display
}

// Initial display of courses
displayCourses();

```

## Additional Notes on Arrays.  
## Properties: 
The most important property of an array is its length, which tells us how many elements are in the array.
## Methods:
push() - Adds an element to the end of the array.  
pop() - Removes the last element from the array.  
shift() - Removes the first element from the array.  
unshift() - Adds an element to the beginning of the array.  
map() - Transforms each element in the array based on a function and returns a new array.  
filter() - Filters elements that meet certain criteria and returns a new array.  
reduce() - Reduces the array to a single value based on a function.  
forEach() - Executes a function on each array element.  
find() - Returns the first element that meets certain criteria.  

### When to use Arrays and Object Together
```box
In real-world applications, we often need to work with arrays of objects. For example, instead of just having an array of course names, we might store each course as an object with properties like title, instructor, and duration. This allows us to represent complex data structures and perform operations based on specific attributes. Arrays are perfect for handling lists of data, and when combined with objects, they become very powerful for handling real-world information.
```

# Arrays and Object
### Note
* Arrays in JavaScript are indeed a special type of object.

* Arrays are actually a specialized kind of object in JavaScript. While objects store data in key-value pairs, arrays store data in an ordered list with indexed keys.  
* Objects allow us to group related data and functions together, such as all the properties of a course (title, instructor, duration), making them essential for more complex data handling.


**Remember, arrays are objects, but they're a more specific kind that uses numbers (indexes) as their keys. In contrast, regular objects use names as their keys, making them useful for modeling more complex structures like students, instructors, or entire course systems.**

## Demo
### scripts.js
```js
// Array of Course Objects
let courses = [
    { title: 'Front-End', instructor: 'Alice', duration: '4 weeks' },
    { title: 'Back-End', instructor: 'Bob', duration: '6 weeks' },
    { title: 'Full-Stack', instructor: 'Charlie', duration: '8 weeks' }
];

// Function to display the courses in the HTML
function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = ''; // Clear the list
    courses.forEach((course) => {
        let li = document.createElement('li');
        li.textContent = `${course.title} by ${course.instructor} - ${course.duration}`;
        courseList.appendChild(li);
    });
}

// Function to add a new course
function addCourse() {
    const title = document.getElementById('courseName').value;
    const instructor = document.getElementById('courseInstructor').value;
    const duration = document.getElementById('courseDuration').value;
    
    if (title && instructor && duration) {
        courses.push({ title, instructor, duration }); // Add the course object to the array
        displayCourses(); // Update the display
        // Clear input fields
        document.getElementById('courseName').value = '';
        document.getElementById('courseInstructor').value = '';
        document.getElementById('courseDuration').value = '';
    }
}

// Function to remove the last course
function removeCourse() {
    courses.pop(); // Remove the last course from the array
    displayCourses(); // Update the display
}

// Initial display of courses
displayCourses();

```

### index.html
```html
<h2>Add New Course</h2>
<input type="text" id="courseName" placeholder="Course Name">
<input type="text" id="courseInstructor" placeholder="Instructor">
<input type="text" id="courseDuration" placeholder="Duration (e.g., '4 weeks')">
<button onclick="addCourse()">Add Course</button>

<h2>Remove Last Course</h2>
<button onclick="removeCourse()">Remove Last Course</button>

```


### Additional Notes on Objects:
Objects in JavaScript can be thought of as containers for key-value pairs. The key is a string (or symbol), and the value can be any JavaScript data type, including numbers, strings, arrays, or even other objects.

Objects also allow for methods, which are functions defined within the object. For example, a course object could have a method that returns a string describing the course, or a method to change the course's duration.

### Key Properties and Methods for Arrays and Objects:
Array is an object: Arrays are technically objects, but they have special properties and methods for handling ordered collections of data.

Array methods: push(), pop(), map(), filter(), reduce(), forEach()—these help manipulate data within arrays.

Object methods: Objects don't have a built-in method like arrays do, but you can define your own methods within objects (e.g., a course object could have a method getCourseDetails()).


## Demo - More Interactive
### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Course Management</title>
</head>
<body>
    <h1>Available Courses</h1>
    <ul id="courseList"></ul>

    <h2>Add or Edit Course</h2>
    <input type="hidden" id="courseIndex">
    <input type="text" id="courseName" placeholder="Course Name">
    <input type="text" id="courseInstructor" placeholder="Instructor">
    <input type="text" id="courseDuration" placeholder="Duration (e.g., '10 weeks')">
    <button onclick="addOrUpdateCourse()">Save Course</button>
    
    <script src="script.js"></script>
</body>
</html>

```

### scripts.js
```js
// Array of Course Objects
let courses = [
    { title: 'Java', instructor: 'John', duration: '10 weeks' },
    { title: 'JavaScript', instructor: 'Jane', duration: '8 weeks' }
];

// Function to display the courses in the HTML
function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = ''; // Clear the list

    courses.forEach((course, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            ${course.title} by ${course.instructor} - ${course.duration}
            <button onclick="editCourse(${index})">Edit</button>
            <button onclick="deleteCourse(${index})">Delete</button>
        `;
        courseList.appendChild(li);
    });
}

// Function to add or update a course
function addOrUpdateCourse() {
    const title = document.getElementById('courseName').value;
    const instructor = document.getElementById('courseInstructor').value;
    const duration = document.getElementById('courseDuration').value;
    const index = document.getElementById('courseIndex').value;

    if (title && instructor && duration) {
        if (index === '') {
            // Add new course
            courses.push({ title, instructor, duration });
        } else {
            // Update existing course
            courses[index] = { title, instructor, duration };
        }
        displayCourses();
        clearForm();
    }
}

// Function to delete a course
function deleteCourse(index) {
    let confirm = window.confirm("Are you sure want to delete ?")

    if(confirm){
    courses.splice(index, 1); // Remove course at the specified index
    displayCourses();
    }
    else{
    displayCourses();
    }
}

// Function to edit a course
function editCourse(index) {
    const course = courses[index];
    document.getElementById('courseName').value = course.title;
    document.getElementById('courseInstructor').value = course.instructor;
    document.getElementById('courseDuration').value = course.duration;
    document.getElementById('courseIndex').value = index; // Store index for updating
}

// Function to clear the input form
function clearForm() {
    document.getElementById('courseName').value = '';
    document.getElementById('courseInstructor').value = '';
    document.getElementById('courseDuration').value = '';
    document.getElementById('courseIndex').value = ''; // Clear index for new entries
}

// Initial display of courses
displayCourses();

```

# Functions and Events

## Note
* Functions in JavaScript let us define reusable blocks of code that perform specific tasks.  

* Events are actions or occurrences that happen in the browser, like clicks or key presses, and we can write code to respond to these events.


### Intro to Event
* Now let’s talk about events. Events are actions like clicks, key presses, or mouse movements. 

* JavaScript can listen for these events and respond to them. This makes our web pages interactive

### Attaching Event Listeners:
We use something called `addEventListener` to respond to events. 

For example, if we have a button and want to run a function when it’s clicked, we write: button.

addEventListener('click', functionName);. 

This means whenever the button is clicked, the function functionName will run."


## Demo
### index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Functions and Events</title>
    <script defer src="script.js"></script>
</head>
<body>
    <h1>Welcome to ABC Technologies</h1>

    <h2>Function Demo</h2>
    <button id="greetButton">Click Me!</button>
    <p id="greeting"></p>

    <h2>Event Demo</h2>
    <button id="changeTextButton">Change Text</button>
    <p id="textParagraph">Original Text</p>
</body>
</html>

```

### scripts.js
```js
// Function to display a greeting message
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Hello, welcome to ABC Technologies!';
}

// Function to change the text of a paragraph
function changeText() {
    const textParagraph = document.getElementById('textParagraph');
    textParagraph.textContent = 'Text has been changed!';
}

// Event listener for the greet button
document.getElementById('greetButton').addEventListener('click', displayGreeting);

// Event listener for the change text button
document.getElementById('changeTextButton').addEventListener('click', changeText);

```
<hr />