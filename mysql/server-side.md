
# Nodejs Installer
[Node 18](https://nodejs.org/en/blog/release/v18.20.2)

![image](https://github.com/user-attachments/assets/a601f384-ecb0-43d3-ac27-e480087ada30)

# Steps to start server project

## Step 1:  Set Up Node.js Project
* First, create a new folder where you want to store your project. For example, let's name it employee-management  

* Open a terminal/command prompt and navigate to the project folder. Run the following command to initialize a new Node.js project.   
```bash
npm init -y
```
* This creates a package.json file in your project.  

## Step 2: Install Dependencies
* Install Express and MySQL Connector: You need to install Express (for the server) and MySQL (to interact with the database).   
```bash
npm install express mysql2
```

## Step 3: Create a Simple Express Server
* Create the Server File (server.js): In the root of your project, create a file called server.js. This will be your main entry point for the application.
* Add the Following Code to server.js ,
```js
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', // Change to your host (localhost for local MySQL server)
  user: 'root', // Default MySQL username
  password: 'root123', // Replace with your root password
  database: 'suresh' // The name of the database you created earlier
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + db.threadId);
});

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route to fetch all employees
app.get('/employees', (req, res) => {
  const sql = 'SELECT * FROM employee';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving employees');
    }
    res.json(results);
  });
});

// Route to add a new employee
app.post('/employees', (req, res) => {
  const { name, salary } = req.body;
  const sql = 'INSERT INTO employee (name, salary) VALUES (?, ?)';
  db.query(sql, [name, salary], (err, results) => {
    if (err) {
      return res.status(500).send('Error adding employee');
    }
    res.status(201).send('Employee added');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

```

## Step 4: Run Your Project

### SQL Setup (Incase there is an issue when we start `node server.js`
* Open Mysql in command prompt  
* SELECT user, host, plugin FROM mysql.user WHERE user = 'root';
```
+------+-----------+-----------------------+
| user | host      | plugin                |
+------+-----------+-----------------------+
| root | localhost | caching_sha2_password |
+------+-----------+-----------------------+
```
* ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'root';

### Start the server
```bash
node server.js
```
![image](https://github.com/user-attachments/assets/60cab52e-aeb6-4fb8-a905-8345a0fcbe2f)


### Test the endpoints
```bash
http://localhost:4000/employees
```


## Step 5: Error Handling and Cleanup
You can improve this setup by adding better error handling, validation (for incoming data), and closing the MySQL connection after your server stops.

For example, to close the connection when the server shuts down:
```js
// Close the MySQL connection gracefully when the server is stopped
process.on('SIGINT', () => {
  db.end((err) => {
    if (err) {
      console.error('Error while closing the connection:', err);
    } else {
      console.log('MySQL connection closed.');
    }
    process.exit();
  });
});

```

