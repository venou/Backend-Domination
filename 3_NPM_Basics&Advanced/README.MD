# NPM - Node Package Manager

## What is NPM?

**NPM** stands for **Node Package Manager**

- Default package manager for Node.js
- Largest software registry in the world
- Used to install, share, and manage JavaScript packages/libraries

## Basic Commands

### Installing Packages

**Install a package:**
```bash
npm i package-name
# OR
npm install package-name
```

**Example:**
```bash
npm i express
npm i react
npm i lodash
```

### Uninstalling Packages

**Remove a package:**
```bash
npm uninstall package-name
```

**Example:**
```bash
npm uninstall express
npm uninstall react
```

## How It Works

1. **Find packages**: Search on [npmjs.com](https://www.npmjs.com)
2. **Install**: Use `npm i package-name` command
3. **Use**: Import and use in your code
4. **Remove**: Use `npm uninstall package-name` when not needed

## Important Files

**package.json** - Lists all dependencies for your project
**node_modules/** - Folder where packages are stored

## Quick Reference

| Task | Command |
|------|---------|
| Install package | `npm i package-name` |
| Uninstall package | `npm uninstall package-name` |
| Install all dependencies | `npm install` |
| Check npm version | `npm --version` |

## Why Use NPM?

✅ Reuse code written by others  
✅ Save development time  
✅ Easy to manage dependencies  
✅ Automatic updates available  

## 🧩 **Node Modules – Short Notes**

### 🔹 What is a Module?

A **module** in Node.js is a **file or package** that contains reusable code.

You can use it in other files using `require()`.

---

### 🔹 Types of Modules

1. **Core Modules** → Built-in modules (no need to install)
    
    Examples:
    
    - `fs` → work with files
    - `http` → create servers
    - `path` → handle file paths
    
    ```jsx
    const fs = require("fs");
    fs.writeFileSync("hello.txt", "Hello!");
    
    ```
    
2. **Local Modules** → Your own custom files
    
    ```jsx
    // math.js
    module.exports = function add(a, b) {
      return a + b;
    };
    // app.js
    const add = require("./math");
    console.log(add(5, 10));
    
    ```
    
3. **Third-Party Modules** → Installed using npm
    
    ```bash
    npm install chalk
    
    ```
    
    ```jsx
    const chalk = require("chalk");
    console.log(chalk.blue("Hello!"));
    
    ```
    

---

### 🔹 node_modules Folder

- Created automatically when you install packages.
- Stores all npm-installed modules and their dependencies.
- Do **not** upload it to GitHub.

---

### 🔹 package.json

- Keeps track of your project’s modules and versions.
- Helps reinstall everything using `npm install`.

---

### ✅ Summary

| Term | Meaning |
| --- | --- |
| Module | Reusable piece of code |
| Core Module | Built-in (like fs, path) |
| Local Module | Your own file |
| Third-Party | Installed via npm |
| node_modules | Stores all installed packages |
| package.json | Records project dependencies |

---