# Javascript Basics
## Overview of Javascript
### Notes
* JavaScript is a programming language used to make web pages interactive.  
* It adds behavior to website, allowing things like responding to clicks, updating content, or making animations.  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Demo</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <button onclick="showMessage()">Click Me!</button>

  <script>
    function showMessage() {
      alert('Hello! This is JavaScript in action.');
    }
  </script>
</body>
</html>

```
 Function : 
 Function: A function is a block of reusable code designed to perform a specific task. In the example, the addition() function retrieves values,calculates the sum, and updates the result on the webpage.


## Role of Javascript in Web Development
### Notes
* JavaScript enhances user interaction on web pages.  
* It can handle events like clicks, form submissions, and content updates without reloading the page.  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript in Action</title>
</head>
<body>
  <h1>Interactive Page</h1>
  <button onclick="changeText()">Change Text</button>
  <p id="text">This is a simple paragraph.</p>

  <script>
    function changeText() {
      document.getElementById('text').innerText = 'Text changed using JavaScript!';
    }
  </script>
</body>
</html>
```
```note
Document Object: The document object represents the entire HTML document and allows access to elements via methods like getElementById(). Here, the document.getElementById() method is used to retrieve user inputs and display the result.
```

## Basics of JavaScript Syntax
### Notes
* JavaScript syntax includes variables, functions, and statements.  
* Variables store data, functions perform actions, and statements control the flow of the program.  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Syntax</title>
</head>
<body>
  <h1>Using Variables and Functions</h1>
  <button onclick="greetUser()">Greet</button>
  <p id="greeting"></p>

  <script>
    function greetUser() {
      let name = 'John';
      document.getElementById('greeting').innerText = 'Hello, ' + name + '!';
    }
  </script>
</body>
</html>
```


## Types of Variables
* There are 3 types of variables.  
* `var` , `let` and `const`.  

### Notes
`var` : Used to declare variables in older JavaScript; it's function-scoped.  

`let` : A modern way to declare variables that are block-scoped (within curly braces {}).  

`const` : Declares variables that cannot be reassigned (also block-scoped).  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>Types of Variables</title>
</head>
<body>
  <h1>Check the Console</h1>

  <script>
    var oldVar = 'I can be redeclared and reassigned';
    let newLet = 'I can be reassigned but not redeclared';
    const constantValue = 'I cannot be changed';

    console.log(oldVar);
    console.log(newLet);
    console.log(constantValue);

    // Reassigning variables
    oldVar = 'Old var updated';
    newLet = 'Let updated';

    console.log(oldVar);
    console.log(newLet);
    
    // Uncommenting this line will cause an error:
    // constantValue = 'Attempting to update const will cause an error';
  </script>
</body>
</html>

```

## Dynamic Typing in JavaScript
### Notes
* JavaScript variables do not require a specific data type.  
* The data type is determined automatically based on the assigned value.  
* You can use the `typeof` function to check the data type of a variable.  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>Dynamic Typing and typeof</title>
</head>
<body>
  <h1>Check the Console for Data Types</h1>

  <script>
    let name = "Suresh";  // String
    let age = 30;         // Number
    let isTrainer = true; // Boolean

    console.log(typeof name);    // "string"
    console.log(typeof age);     // "number"
    console.log(typeof isTrainer); // "boolean"
  </script>
</body>
</html>

```
```note
This script shows different types of data being assigned to variables and uses the typeof function to print the data types to the console.

How to use "typeof":
Simply use typeof followed by the variable or value you want to check:
Example: typeof variableName
It will return the type as a string, like "string", "number", "boolean", etc.
```


## Setting Up JavaScript in a Web Page

### Notes
* JavaScript is set up inside `<script>` tags, usually placed at the bottom of the HTML page or in the `<head>` section.  

* You can also include JavaScript from an external file by linking it via the `src` attribute.  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Setup</title>
</head>
<body>
  <h1>JavaScript in Action</h1>

  <p>Check out this interactive button below!</p>
  <button onclick="showMessage()">Click Me</button>

  <script>
    function showMessage() {
      alert('This is how we set up JavaScript in a webpage!');
    }
  </script>
</body>
</html>
```
## Lab - Working with Variables


# Control Statements
## Conditional Statements

### Notes
Conditional statements in JavaScript are used to perform different actions based on different conditions.

if: Executes a block of code if a specified condition is true.  
else: Executes a block of code if the condition in the if statement is false.  
else if: Specifies a new condition to test if the first condition is false.  
switch: Evaluates an expression and executes code based on the matched case.  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Conditional Statements and Interactivity Lab</title>
  <style>
    #result {
      font-size: 18px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>JavaScript Control Flow and Interactivity Lab</h1>

  <!-- Input Section for Numbers -->
  <label for="num1">Enter Number 1:</label>
  <input type="number" id="num1" placeholder="Enter first number" /><br/><br/>

  <label for="num2">Enter Number 2:</label>
  <input type="number" id="num2" placeholder="Enter second number" /><br/><br/>

  <!-- Dropdown for Operation Selection -->
  <label for="operation">Choose Operation:</label>
  <select id="operation">
    <option value="1">Addition</option>
    <option value="2">Subtraction</option>
    <option value="3">Multiplication</option>
    <option value="4">Division</option>
  </select><br/><br/>

  <!-- Button to Perform Operation -->
  <button onclick="performOperation()">Perform Operation</button><br/><br/>

  <!-- Checkboxes for Styling Options -->
  <label><input type="checkbox" id="bold"> Bold</label>
  <label><input type="checkbox" id="italic"> Italic</label>
  <label><input type="checkbox" id="underline"> Underline</label><br/><br/>

  <!-- Radio Buttons for Text Color Options -->
  <label><input type="radio" name="color" value="red"> Red</label>
  <label><input type="radio" name="color" value="green"> Green</label>
  <label><input type="radio" name="color" value="blue"> Blue</label><br/><br/>

  <!-- Div to Display Result -->
  <div id="result">Result will be displayed here.</div>

  <script>
    // Function to perform the operation based on user input
    function performOperation() {
      // Get the values from the input fields
      let num1 = parseFloat(document.getElementById('num1').value);
      let num2 = parseFloat(document.getElementById('num2').value);
      let operation = document.getElementById('operation').value;
      let result;

      // Use if-else statements to check the validity of input values
      if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";
      } else if (num1 === 0 && operation == "4") {
        result = "Division by zero is not allowed!";
      } else {
        // Switch case for selecting the operation
        switch (operation) {
          case "1": // Addition
            result = num1 + num2;
            break;
          case "2": // Subtraction
            result = num1 - num2;
            break;
          case "3": // Multiplication
            result = num1 * num2;
            break;
          case "4": // Division
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              result = "Cannot divide by zero!";
            }
            break;
          default:
            result = "Invalid operation selected.";
        }
      }

      // Apply styling options based on checkboxes
      let resultDiv = document.getElementById('result');
      let bold = document.getElementById('bold').checked;
      let italic = document.getElementById('italic').checked;
      let underline = document.getElementById('underline').checked;

      resultDiv.style.fontWeight = bold ? "bold" : "normal";
      resultDiv.style.fontStyle = italic ? "italic" : "normal";
      resultDiv.style.textDecoration = underline ? "underline" : "none";

      // Apply color based on selected radio button
      let colorOptions = document.getElementsByName('color');
      for (let i = 0; i < colorOptions.length; i++) {
        if (colorOptions[i].checked) {
          resultDiv.style.color = colorOptions[i].value;
          break;
        }
      }

      // Display the result
      resultDiv.innerHTML = "Result: " + result;
    }
  </script>
</body>
</html>

```
## Applying CSS via Javascript
### Notes
 You can apply or modify CSS styles dynamically using JavaScript by accessing an element's style property.

### Demo
```js
function addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = parseInt(a) + parseInt(b);

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Result is <b>" + c + "</b>";

    // Apply CSS dynamically
    if (c > 100) {
        resultDiv.style.backgroundColor = "lightgreen"; // If result > 100, set background to light green
    } else {
        resultDiv.style.backgroundColor = "lightcoral"; // Otherwise, set background to light coral
    }
}

```



# Other Demos
## Ways to display data
```js
    console.log("Welcome to Javascript");
    alert("Javascript is Easy to Learn");
    document.write("I like Javascript");
```

## Function , document object
```html
<table>
        <tr>
            <td>Number 1</td>
            <td><input type="text" id="t1"></td>
        </tr>
        <tr>
            <td>Number 2</td>
            <td><input type="text" id="t2"></td>
        </tr>
        <tr>
            <td>Result</td>
            <td><input type="text" id="t3"></td>
        </tr>
        <tr>
            <td>
                <input type="button" onclick="addition()" value="Submit">
            </td>
        </tr>
</table>

<div id="result">
        Waiting for Input...
</div>

<script>
    function addition() {
            var a = document.getElementById("t1").value;
            var b = document.getElementById("t2").value;
            var c = parseInt(a) + parseInt(b);
            document.getElementById("result").innerHTML = 
            "Result is <b>" +c + "</b>";
    }
</script>
```

## Control Statements - if and else if Dropdown
```html
<body>

    <table>
        <tr>
            <td>Number 1</td>
            <td><input type="text" id="t1"></td>
        </tr>
        <tr>
            <td>Number 2</td>
            <td><input type="text" id="t2"></td>
        </tr>
        <tr>
            <td>Choose Operation</td>
            <td>
                <select id="options">
                    <option value="add">Add</option>
                    <option value="sub">Subtraction</option>
                    <option value="mul">Multiplication</option>
                    <option value="div">Divition</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" onclick="arithmetic()" value="Submit">
            </td>
        </tr>

    </table>
    <div id="result">
        Waiting for Input...
    </div>

    <script>
        function arithmetic() {
            var c = 0;
            var a = document.getElementById("t1").value;
            var b = document.getElementById("t2").value;
            var option = document.getElementById("options").value;
    

            if(option == "add") {
                c = parseInt(a) + parseInt(b);
            }
            else if(option == "sub"){
                c = a - b;
            }

            document.getElementById("result").innerHTML = "Result is <b>" +c + "</b>";
        }
    </script>
</body>
```
