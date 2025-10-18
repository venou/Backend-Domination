// NPM Understanding
// npm - node package mangaer
// npm - random names

// Installing and uninstalling anything 
// installing -> npm i package name
// Uninstalling -> npm uninstall package name
// Installing Particular modules -> npm i package name @version

// Understanding Node Modules

// ## 🧩 **Node Modules – Short Notes**

// ### 🔹 What is a Module?

// A **module** in Node.js is a **file or package** that contains reusable code.

// You can use it in other files using `require()`.

// ---

// ### 🔹 Types of Modules

// 1. **Core Modules** → Built-in modules (no need to install)

//     Examples:

//     - `fs` → work with files
//     - `http` → create servers
//     - `path` → handle file paths

//     ```jsx
//     const fs = require("fs");
//     fs.writeFileSync("hello.txt", "Hello!");

//     ```

// 2. **Local Modules** → Your own custom files

//     ```jsx
//     // math.js
//     module.exports = function add(a, b) {
//       return a + b;
//     };
//     // app.js
//     const add = require("./math");
//     console.log(add(5, 10));

//     ```

// 3. **Third-Party Modules** → Installed using npm

//     ```bash
//     npm install chalk

//     ```

//     ```jsx
//     const chalk = require("chalk");
//     console.log(chalk.blue("Hello!"));

//     ```

// ---
import chalk from "chalk";

console.log(chalk.blue("Hello!"));
console.log(chalk.green("Node Modules Working ✅"));
console.log(chalk.red("Hello World!"));
