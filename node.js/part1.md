# Node.js and NPM Installation

## Installation 
### Way1 - Install node 18
```
 https://nodejs.org and download the LTS version (v18.x).
```

### Way2 - Install nvm then we can maintain any version of node


* Goto the link https://github.com/coreybutler/nvm-windows/releases  
* And look at and download the file  `nvm-setup.exe` 


* Open new command prompt / terminal and execute the following commands  

    * nvm list

    * nvm install v18

    * nvm list

    * nvm use 18

    * node -v

    * npm - v  (expected version 8.x.x) If its not / showing different version execute the below command to install npm 8

        * npm install -g npm@8

# Node.js Introduction

## Note
* Node.js is a platform that allows you to run JavaScript outside the browser.  
* NPM is a package manager used to install and manage libraries for Node.js projects.  

## Demo

* Once Node.js is installed, create a file called `app.js` and add the following code,
```js
console.log('Hello, Node.js!');
```

* Open your terminal, navigate to the folder where app.js is saved, and run the script.  

```bash
node app.js
```

## Who Created Node.js
* Node.js was created by Ryan Dahl in 2009, built on Google's V8 JavaScript engine. 
* It allows JavaScript to be used on the server side.

## Why Node.js
* Node.js was introduced to efficiently handle multiple connections with fewer resources, using a `non-blocking`, `single-threaded` model.  


    ```
    I/O Blocking: When a task (like reading a file or fetching data) makes the program wait until it's completed before moving to the next task, it's called blocking I/O.
    ```

    ```
    Single-Threaded: In a single-threaded model, the program runs all tasks on one thread, handling one task at a time but can use asynchronous operations to handle multiple tasks without waiting.
    ```

* It's great for fast, scalable web applications. 

## Features of Node.js

### JavaScript for Both Client and Server
* Node.js allows developers to use JavaScript for both frontend and backend, creating consistency and faster development with a single language.

### Ideal for I/O-Intensive Applications
* Node.js is excellent for real-time apps or I/O-heavy tasks like API calls, file handling, and streaming services by its asynchronous, event-driven architecture.  

### Fast Execution
* Powered by Google’s V8 engine, Node.js executes JavaScript quickly, enabling fast and responsive applications with low latency.  

### Node.js vs Traditional Servers
* Node.js uses a single thread with non-blocking I/O, making it faster and more efficient for handling many connections compared to Java’s multi-threading approach.  

<hr />

# Node.js Standard Libraries
## Standard Libraries - Intro
[nodejs doc](https://nodejs.org/docs/latest-v18.x/api/documentation.html)  

* Node.js provides several built-in libraries (standard libraries) that allow you to perform a wide range of tasks, like working with files, handling events, creating HTTP servers, and more.  
* These libraries are ready to use without installing additional packages.  

## List of few Standard Libraries
`fs (File System)` : Provides functions to work with the file system, like reading and writing files.  
`events` : Manages event-driven programming, allowing you to create and handle custom events.  
`streams` : Handles continuous data flows, like reading large files or streaming data.  
`http`: Enables creating web servers and making HTTP requests.  


# File System (fs) Module
* The fs module allows you to interact with the file system in a way that’s asynchronous and non-blocking by default. It provides functions to read, write, and manipulate files and directories.  

* We can use either callback-based methods or Promise-based methods with this module.  

* Callback-based fs: The original method where functions accept a callback to be executed after the operation completes.  

* Promise-based fs (fs.promises): Introduced to handle file system operations using Promises, allowing you to use async/await for more readable code.

## Demos

### fs.readdir with Callbacks
```js
const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) {
        console.error('Error reading directory', err);
    } else {
        console.log('Files:', files);
    }
});

```

### fs.readdir with Promises
```js
const fs = require('fs').promises;

fs.readdir('./')
    .then(files => console.log('Files:', files))
    .catch(err => console.error('Error reading directory', err));
```

### fs.readdir with async/await
```js
const fs = require('fs').promises;

async function readDirAsync() {
    try {
        const files = await fs.readdir('./');
        console.log('Files:', files);
    } catch (err) {
        console.error('Error reading directory', err);
    }
}

readDirAsync();

```

### fs.stat Example
```js
const fs = require('fs');

fs.stat('./test.txt', (err, stats) => {
    if (err) {
        console.error('Error fetching stats', err);
    } else {
        console.log(`File size: ${stats.size} bytes`);
        console.log(`Is file: ${stats.isFile()}`);
        console.log(`Is directory: ${stats.isDirectory()}`);
    }
});
```


# Events Module
* The events module allows creating and handling custom events, following an event-driven architecture.  
* It's useful for triggering and responding to specific actions in your application.  

## Demo
```js
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define the event handler
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Trigger the event
eventEmitter.emit('greet', 'PayPal');
```

## Demo - once with parameter
```js
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Using 'once' to handle the event only once
eventEmitter.once('login', (username) => {
    console.log(`Welcome, ${username}! You are now logged in.`);
});

// Trigger the event for the first time (this will work)
eventEmitter.emit('login', 'Suresh');

// Try to trigger the event again (this won't work, since it's a once listener)
eventEmitter.emit('login', 'John');
```