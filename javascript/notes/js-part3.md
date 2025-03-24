# DOM Events and Event Listeners
* The DOM is the structure of the webpage.   
* Event listeners respond to user actions like clicks or typing.  

## Demo: Implementing Event Listeners
Objective: Create a button and attach an event listener to display a message when clicked.

```html
<button id="myButton">Click Me!</button>
<p id="output"></p>

```

```js
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('output').innerText = "Button clicked!";
});

```

## Validation and Error Handling
* "Form validation ensures correct input before submission."  
* "Try-catch helps handle errors without crashing the app." 


## Demo: Form Validation and Error Handling
Objective: Validate a form and handle errors with try-catch.  

```html
<form id="myForm">
    Name: <input type="text" id="name" /><br/>
    Email: <input type="text" id="email" /><br/>
    <button type="submit">Submit</button>
    <p id="errorMessage"></p>
</form>

```

```js
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');
    
    try {
        if (!name || !email) {
            throw new Error('Both fields are required.');
        }
        
        if (!email.includes('@')) {
            throw new Error('Invalid email format.');
        }
        
        errorMessage.innerText = "Form submitted successfully!";
    } catch (error) {
        errorMessage.innerText = error.message; // Display error message
    }
});

```

