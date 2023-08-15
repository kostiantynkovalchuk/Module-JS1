const fs = require("fs");

const stats = fs.statSync(`./add-row.js`);
console.log(`File size is ${stats} KB`);

const moreStats = fs.statSync("./test-file-2.txt");
console.log(`File size is ${moreStats} KB`);

// Phillipa is trying to implement a function that can calculate the size of any file in KiloBytes
// Implement a function getFileSize that takes a path as an input and then returns a string with the file size in KB
// Think about how you can check your answer
