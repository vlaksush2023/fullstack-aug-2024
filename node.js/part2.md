# HTTP
## Note
* The HTTP module in Node.js allows creating web servers and making HTTP requests as a client.  

* It's widely used to handle both server-side and client-side HTTP communication. 

## Common Functions

http.createServer(): Creates an HTTP server.
server.listen(): Listens on a specified port.
request.on(): Handles incoming data.
response.write(): Sends data to the client.
response.end(): Signals the end of the response.

## Demos
### http client demo
```js
const http = require('http');

const options = {
    hostname:'www.google.co.in',
    path:'/',
    method:'GET'
}
const client = http.request(options,(res) => {
    
    let data = '';

    res.on('data',(chunk) => {
        data += chunk;
    })

    res.on ('end', () => {
        try{
        console.log(data);
        }
        catch(e){
            console.log('error parsing response '+e.message);
        }
    })


})

client.end();
```

### http server demo
```js
const http = require('http');

const server = http.createServer( (req,res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});

    res.end("Hello Node.js")

    res.end();
})

server.listen('4000',() => {
    console.log('server started')
})
```

### http client server demo
```js
const http = require('http');

const options = {
    hostname: 'www.google.co.in',
    path: '/',
    method: 'GET'
}
const client = http.request(options, (res) => {

    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    })

    res.on('end', () => {

        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })

        server.listen('4000', () => {
            console.log('server started')
        })
    })

})

client.end();
```

<hr />


# Express.js

## Note
* Express.js is a fast and minimalist web framework for Node.js, helping to build web applications and APIs easily.  
* It simplifies the process of routing, handling HTTP requests, middleware management, and templating.

## Installation of Express 
```bash

npm init 

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
//to verify => Get-ExecutionPolicy -Scope CurrentUser



npm install express

npm install nodemon

npm install body-parser


```

## Demos
### Basic App
```js
// Import Express
const express = require('express');
const app = express();

// Define a simple route for the home page
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define a route for the about page
app.get('/about', (req, res) => {
  res.send('About Express.js');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

```

### Demo Express Middleware and API
```js
const express = require('express');
const app = express();

// Middleware example: logging request details
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();  // Pass control to the next middleware or route handler
});

// Route to serve a JSON response for the root
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express.js API!' });
});

// Route to return a specific item
app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  res.json({ itemId, name: `Item ${itemId}` });
});

// Start the server
app.listen(3000, () => {
  console.log('API server running on http://localhost:3000');
});

```

## Demo - CRUD
```
employee-crud/
├── index.js         # Main file
├── controllers/
│   └── employeeController.js
├── routes/
│   └── employeeRoutes.js
└── data/
    └── employeeData.js
```

### data/employeeData.js
```js
// data/employeeData.js

const employeeDetails = [
    { id: 101, name: 'Ram', salary: 1000 },
    { id: 102, name: 'Shyam', salary: 1200 },
    { id: 103, name: 'Mohan', salary: 1100 },
    { id: 104, name: 'Sita', salary: 1500 }
];

module.exports = employeeDetails;
```

### controllers/employeeController.js
```js
// controllers/employeeController.js

const employeeDetails = require('../data/employeeData');

// Get all employees
exports.getEmployees = (req, res) => {
    res.json(employeeDetails);
};

// Get employee by ID
exports.getEmployeeById = (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employeeDetails.find(emp => emp.id === id);
    
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
};

// Add a new employee
exports.addEmployee = (req, res) => {
    const newEmployee = {
        id: employeeDetails.length + 101,  // Simple ID generation
        name: req.body.name,
        salary: req.body.salary
    };

    employeeDetails.push(newEmployee);
    res.status(201).json(newEmployee);  // Return the added employee
};

```

### routes/employeeRoutes.js
```js
// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Route to get all employees
router.get('/employees', employeeController.getEmployees);

// Route to get an employee by ID
router.get('/employees/:id', employeeController.getEmployeeById);

// Route to add a new employee
router.post('/employees', employeeController.addEmployee);

module.exports = router;

```


### index.js
```js
// app.js

const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());  // To parse JSON request bodies

// Employee Routes
app.use('/api', employeeRoutes);

// Server start
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

```


