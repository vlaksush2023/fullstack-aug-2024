## Lab - Multiple Events & Event Arguments  

### Objective
Create a script that handles multiple events, such as start and end, and passes arguments to these events. 

### Steps
1. Create a script named multiEvent.js.  
2. Create two custom events: one that logs a start message and another that logs an end message.  
3. Pass arguments to both events, such as a file name or task details.  


# Streams 
* Streams in Node.js process data in small chunks, making them efficient for tasks like reading/writing large files or handling HTTP requests.  

* They include Readable, Writable, Duplex, and Transform streams.  

## Common Streams
1. Readable Streams: For reading data, e.g., fs.createReadStream()  
2. Writable Streams: For writing data, e.g., fs.createWriteStream()  
3. Duplex Streams: Both readable and writable, e.g., net.Socket  
4. Transform Streams: Allows modification of data, e.g., zlib.createGzip() (compression)  


## Demos

### Demo 1: Writing Data Using Writable Stream
```js
const fs = require('fs');

// Create a writable stream to write data to 'output.txt'
const writableStream = fs.createWriteStream('output.txt');

// Write data to the stream
writableStream.write('Node.js stream demo!\n');
writableStream.write('This is a writable stream.\n');

// End the stream
writableStream.end();

writableStream.on('finish', () => {
    console.log('Writing completed.');
});

```


### Demo 2: Reading Data Using Readable Event
```js
const fs = require('fs');

// Create a readable stream to read data from 'input.txt'
const fs = require('fs');

// Create a readable stream to read data from 'input.txt'
const readableStream = fs.createReadStream('input.txt', { encoding: 'utf8' });

readableStream.on('readable', () => {
    const data = readableStream.read(); // Read the chunk of data

    if (!data) {
        return; // No data available, exit the function
    }
    
    console.log(`${data}`); // Log the chunk of data if available
});

readableStream.on('end', () => {
    console.log('File reading completed.');
});

```
### Demo 3: Reading Data Using the data Event
```js
const fs = require('fs');

// Create a readable stream to read data from 'input.txt'
const readableStream = fs.createReadStream('input.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
    if (!chunk) {
        return; // No data available, exit the function
    }
    console.log(`${chunk}`);
});

readableStream.on('end', () => {
    console.log('File reading completed.');
});

```

### Demo 4: Duplex Stream (Manual Copy without Pipe)
```js
const fs = require('fs');

// Create a readable stream from 'input.txt'
const readableStream = fs.createReadStream('input.txt');

// Create a writable stream to 'output.txt'
const writableStream = fs.createWriteStream('output.txt');

// Manually copy data from readable to writable
readableStream.on('data', (chunk) => {
    writableStream.write(chunk);
});

readableStream.on('end', () => {
    writableStream.end();
    console.log('File copied successfully without pipe.');
});

```

### Demo 5: Duplex Stream with pipe() (Automatic Copy)
```js
const fs = require('fs');

// Create a readable stream from 'input.txt'
const readableStream = fs.createReadStream('input.txt');

// Create a writable stream to 'output.txt'
const writableStream = fs.createWriteStream('output.txt');

// Use pipe to copy data automatically
readableStream.pipe(writableStream);

writableStream.on('finish', () => {
    console.log('File copied successfully using pipe.');
});

```

### Demo 6: Duplex Stream with pipeline() for Error Handling
```js
const fs = require('fs');
const { pipeline } = require('stream');

// Create readable and writable streams
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

// Use pipeline for error handling
pipeline(
    readableStream,
    writableStream,
    (err) => {
        if (err) {
            console.error('Pipeline failed:', err);
        } else {
            console.log('File copied successfully using pipeline.');
        }
    }
);

```
