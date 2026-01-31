// I/O heavy operations

// I/O (Input/Output) heavy operations** refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.

// Examples of I/O Heavy Operations:

// 1. Reading a file
// 2. Starting a clock
// 3. HTTP Requests

const fs = require("fs")
// doing async tack syncronously
const content = fs.readFileSync("a.txt","utf-8");
console.log(content)



// I/O bound task VS CPU bound task


// ## CPU bound tasks
// CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.

// I/O bound tasks
// I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O operations to complete.