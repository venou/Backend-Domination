### 🟩 **Node.js**

**1. What it is:**

Node.js is a **runtime environment** that lets you run **JavaScript outside the browser**, mainly on the **server**.

**2. Built on:**

It’s built on **Chrome’s V8 engine**, which makes it fast and efficient.

**3. Why use it:**

- You can use **JavaScript for backend** development.
- It’s **non-blocking** (doesn’t wait for one task to finish before starting another).
- Great for **real-time apps** like chat apps or streaming.

**4. Core Features:**

- **Single-threaded + Event-driven:** Handles many requests without creating multiple threads.
- **Asynchronous I/O:** Performs tasks in the background (e.g., reading files, DB calls).
- **npm (Node Package Manager):** Lets you install and use external packages easily.

**5. Example:**

```jsx
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**6. Common uses:**

- Backend for web apps
- REST APIs
- Real-time apps (chat, notifications)
- Command-line tools


# Node.js File System (fs) Module — Complete Guide

## Overview

The `fs` (File System) module in Node.js lets you work with files and folders on your computer. You can create, read, update, delete, and rename files and directories.

## Importing the fs Module

```jsx
const fs = require("node:fs");  // Using node: prefix (recommended)
// OR
const fs = require("fs");       // Traditional way

```

---

## 1. Write File — `fs.writeFile()`

### Purpose

Creates a new file or **overwrites** an existing file with new content.

### Syntax

```jsx
fs.writeFile(filepath, content, callback)

```

### Example

```jsx
const fs = require("node:fs");
fs.writeFile("hey.txt", "Hello Kaise ho", function (err) {
  if (err) console.error(err);
  else console.log("Done");
});

```

### Key Points

- Creates the file if it doesn't exist
- **Overwrites** the entire file if it already exists
- Runs asynchronously (non-blocking)
- Callback receives an error object if something fails

---

## 2. Append File — `fs.appendFile()`

### Purpose

Adds content to the end of a file without removing existing content.

### Syntax

```jsx
fs.appendFile(filepath, content, callback)

```

### Example

```jsx
const fs = require("node:fs");
fs.appendFile("hey.txt", " , Mai Thik Hoon", function (err) {
  if (err) console.error(err);
  else console.log("Done");
});

```

### Key Points

- Adds content to the **end** of the file
- Creates the file if it doesn't exist
- Does **not** overwrite existing content
- Perfect for logging or adding data over time

---

## 3. Rename File — `fs.rename()`

### Purpose

Changes the name or location of a file.

### Syntax

```jsx
fs.rename(oldPath, newPath, callback)

```

### Example

```jsx
const fs = require("node:fs");
fs.rename("hey.txt", "hello.txt", function (err) {
  if (err) console.error(err);
  else console.log("Done");
});

```

### Key Points

- Can rename files or move them to different directories
- Overwrites the destination if it already exists
- Can also move files between directories

---

## 4. Copy File — `fs.copyFile()`

### Purpose

Creates a copy of a file at a new location.

### Syntax

```jsx
fs.copyFile(source, destination, callback)

```

### Example

```jsx
const fs = require("node:fs");
fs.copyFile("hello.txt", "./copy/helloWorld.txt", (err) => {
  if (err) console.error(err);
  else console.log("Done");
});

```

### Key Points

- Creates a duplicate of the file
- Original file stays unchanged
- Destination directory must already exist
- Faster than reading and writing manually

---

## 5. Delete File — `fs.unlink()`

### Purpose

Deletes a file from the file system.

### Syntax

```jsx
fs.unlink(filepath, callback)

```

### Example

```jsx
const fs = require("node:fs");
fs.unlink("hello.txt", (err) => {
  if (err) console.error(err);
  else console.log("Done");
});

```

### Key Points

- Permanently deletes the file
- Cannot delete directories
- Throws an error if the file doesn't exist
- "Unlink" is a Unix term for deleting files

---

## 6. Remove Directory — `fs.rm()` / `fs.rmdir()`

### Purpose

Deletes directories (folders) from the file system.

### Modern Approach — `fs.rm()`

```jsx
const fs = require("fs");
fs.rm("./copy", { recursive: true }, (err) => {
  if (err) console.error(err);
  else console.log("Removed");
});

```

### Key Points

- `fs.rm()` is the modern method (Node.js v14.14.0+)
- `{ recursive: true }` lets you delete non-empty directories
- Without `recursive: true`, the directory must be empty
- `fs.rmdir()` is older and being phased out

---

## Synchronous vs Asynchronous

### Asynchronous (Used in examples above)

```jsx
fs.writeFile("file.txt", "content", (err) => {
  // Non-blocking - other code can run
});

```

### Synchronous Alternative

```jsx
try {
  fs.writeFileSync("file.txt", "content");
  // Blocking - waits until complete
} catch (err) {
  console.error(err);
}

```

---

## Common Patterns

### Error Handling

```jsx
fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log(data);
});

```

### Using Promises (Modern Approach)

```jsx
const fs = require("fs").promises;

async function writeData() {
  try {
    await fs.writeFile("file.txt", "content");
    console.log("Done");
  } catch (err) {
    console.error(err);
  }
}

```

---

## Quick Reference

| Operation | Method | Overwrites? | Creates File? |
| --- | --- | --- | --- |
| Write | `writeFile()` | Yes | Yes |
| Append | `appendFile()` | No | Yes |
| Rename | `rename()` | N/A | No |
| Copy | `copyFile()` | Yes (dest) | Yes |
| Delete File | `unlink()` | N/A | N/A |
| Delete Dir | `rm()` | N/A | N/A |

---

> **Documentation :- https://nodejs.org/api/fs.html#fsunlinkpath-callback**

## Important Notes

1. **Always handle errors** — File operations can fail for many reasons
2. **Paths matter** — Relative paths are based on where Node.js runs
3. **Asynchronous by default** — Use callbacks, promises, or async/await
4. **Check permissions** — Make sure your app has the right file system access
5. **Stay secure** — Never trust user input when building file paths


# HTTP & Node.js Server Notes

## Your Code Explained

```javascript
const http = require('http')

const server = http.createServer(function(req, res){
  res.end("Hello World!")
})

server.listen(3000)
```

### Line by Line Breakdown

**Line 1:** `const http = require('http')`
- Imports Node.js HTTP module
- `http` is a built-in module (no installation needed)

**Line 3:** `const server = http.createServer(function(req, res){`
- Creates a new HTTP server
- Takes a callback function with two parameters:
  - `req` - incoming request from client
  - `res` - response to send back

**Line 4:** `res.end("Hello World!")`
- Sends "Hello World!" as response
- Closes the connection

**Line 7:** `server.listen(3000)`
- Starts the server on port 3000
- Server waits for incoming requests at `http://localhost:3000`

## HTTP Basics

### What is HTTP?
- Protocol for communication between client and server
- Client sends request → Server sends response

### HTTP Request
When you visit `http://localhost:3000`, browser sends:
```
GET / HTTP/1.1
Host: localhost:3000
```

### HTTP Response
Your server sends back:
```
HTTP/1.1 200 OK
Hello World!
```

## Request Object (req)

```javascript
req.method    // HTTP method: "GET", "POST", "PUT", "DELETE"
req.url       // Requested path: "/", "/about"
req.headers   // Request headers object
```

## Response Object (res)

```javascript
res.statusCode = 200                        // Set status code
res.setHeader('Content-Type', 'text/html')  // Set response header
res.write("Hello")                          // Send partial response
res.end("World!")                           // Send final response and close
```

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Success |
| 404 | Not Found |
| 500 | Internal Server Error |

## HTTP Methods

| Method | Purpose |
|--------|---------|
| GET | Retrieve data |
| POST | Send data |
| PUT | Update data |
| DELETE | Delete data |

## Improving Your Code

### Add Status Code and Headers
```javascript
const http = require('http')

const server = http.createServer(function(req, res){
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end("Hello World!")
})

server.listen(3000)
```

### Add Console Log
```javascript
const http = require('http')

const server = http.createServer(function(req, res){
  console.log(`${req.method} ${req.url}`)
  res.end("Hello World!")
})

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
```

### Add Routing
```javascript
const http = require('http')

const server = http.createServer(function(req, res){
  if (req.url === '/') {
    res.end("Home Page")
  } else if (req.url === '/about') {
    res.end("About Page")
  } else {
    res.statusCode = 404
    res.end("Page Not Found")
  }
})

server.listen(3000)
```

## How to Run

1. Save code in file: `server.js`
2. Run: `node server.js`
3. Open browser: `http://localhost:3000`
4. See: "Hello World!"

## How to Stop Server

Press `Ctrl + C` in terminal