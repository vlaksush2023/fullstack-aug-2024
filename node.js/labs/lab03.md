## Lab - Stream Processing with Compression
### Objective
In this lab, you will learn how to use Node.js streams to read a file, compress it using gzip, and write the compressed data to a new file. You will utilize the pipeline method for efficient error handling and data flow.

### Steps

* Ensure you have Node.js installed on your machine.  
* Create a new directory for the lab and navigate into it.  
* Create a text file named `input.txt` with some sample content.  
* Create a new JavaScript file named `compress.js`.  

    * Import the necessary modules: fs, zlib, and stream and pipeline.  
    * Use fs.createReadStream to read from input.txt.  
    * Use zlib.createGzip() to create a gzip compression stream.  
    * Use fs.createWriteStream to write to output.gz.  
    * Use the pipeline method to connect the readable stream, the gzip stream, and the writable stream.  
    * Add error handling to log any issues that occur during the process.  