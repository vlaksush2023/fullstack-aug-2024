# Step 1: Create the React Project with Minimal Template
```bash
npx create-react-app employee-management-client --template minimal
cd employee-management-client
```

# Step 2: Create the Employee.js Component
```js
import React, { useState, useEffect } from 'react';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  // Fetch employee data from the server API
  useEffect(() => {
    fetch('http://localhost:4000/api/employees')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data); // Set the employees state with the fetched data
      })
      .catch((err) => {
        setError(err.message); // Handle any errors that occur
      });
  }, []); // Empty array means it runs only once when the component is mounted

  return (
    <div>
      <h1>Employee List</h1>
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No employees available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
```

## Step 3: Update App.js
```js
import React from 'react';
import './App.css';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
      <Employee />
    </div>
  );
}

export default App;

```

## Step 4: Ensure the Server API Endpoint is Working
Make sure that your Express server (server.js) has the correct API endpoint to fetch employee data from the database.  
```bash
node server.js
```
```bash
http://localhost:4000/employees
```

## Step 5: Start the Client Project
```bash
npm start
```
```bash
http://localhost:3000
```

### Note:
To prevent CORS issues from the client side, you need to install and configure the cors middleware in the server application.  
In server side, 
```bash
npm install cors
```

```js
.....
const cors = require('cors');  // Import the cors module
.....

// Use CORS middleware to allow cross-origin requests
app.use(cors());

.....

```
