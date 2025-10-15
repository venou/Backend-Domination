// const { log } = require("node:console");
// Write File
// const { log } = require("node:console");
// const fs = require("node:fs");
// fs.writeFile("hey.txt", "Hello Kaise ho", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// Append File

// const { log } = require("node:console");
// const fs = require("node:fs");
// fs.appendFile("hey.txt", " , Mai Thik Hoon", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// Rename File
// const fs = require("node:fs");
// fs.rename("hey.txt", "hello.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// CopyFile
// const fs = require("node:fs");
// fs.copyFile("hello.txt", "./copy/helloWorld.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// UnLink
// const { error } = require("node:console");
// const fs = require("node:fs");
// fs.unlink("hello.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// Rmdir

// const fs = require("fs");
// fs.rm("./copy", { recursive: true }, (err) => {
//   if (err) console.error(err);
//   else console.log("Removed");
// });


// http

const http = require('http')

const server = http.createServer(function(req, res){
  res.end("Hello World!")
})

server.listen(3000) 