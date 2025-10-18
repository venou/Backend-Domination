---

## ⚙️ **What is Express.js?**

- **Express.js** is a **Node.js framework** used to build **web servers and APIs** easily.
- It simplifies handling **HTTP requests and responses**.
- Instead of writing long boilerplate code with Node’s core `http` module, Express gives **ready-made methods** to make coding faster and cleaner.

📦 **Installed via:**

```bash
npm i express

```

---

## 🧰 **What is a Framework?**

A **framework** is like a **ready-made structure** that helps you build applications faster and in a more organized way.

- It **manages routing, middleware, and request handling** for you.
- It provides a **set pattern and tools** to follow best practices.

🧱 **Simple Definition:**

> A framework controls the flow of your application and provides structure — you just fill in the logic.

---

## ⚖️ **Difference Between Library and Framework**

| Concept | Library                                    | Framework                                        |
| ------- | ------------------------------------------ | ------------------------------------------------ |
| Control | You call the library functions when needed | Framework calls your code (Inversion of Control) |
| Analogy | 🧰 Toolbox – you pick tools when you want  | 🏗️ Workshop – it tells you where and how to work |
| Example | Lodash, Moment.js                          | Express.js, React, Angular                       |

💡 **In short:**

> Library = You’re in control
>
> Framework = Framework is in control

---

## 🚀 **Setting Up a Basic Express Application**

1. **Install Express**

   ```bash
   npm i express

   ```

2. **Create a script (e.g., `script.js`)**

   ```jsx
   import express from "express";

   const app = express();

   app.get("/", (req, res) => {
     res.send("Hello Shiva!");
   });

   app.get("/profile", (req, res) => {
     res.send("Hello Youtube!");
   });

   app.listen(3000, () => console.log("Server running on port 3000"));
   ```

3. **Run the Server**

   ```bash
   node script.js

   ```

   or use **nodemon** for auto-restart:

   ```bash
   npx nodemon script.js

   ```

🧩 **Explanation:**

- `app.get()` – defines a route for GET requests.
- `'/'` – home route.
- `res.send()` – sends a response to the client.
- `app.listen(3000)` – starts the server on port 3000.

---

## ⚡ **What is Middleware?**

Middleware is a **function that sits between the client’s request and the server’s response**.

It can **modify requests, log data, check authentication, or handle errors** before the request reaches the final route.

🧠 **Think of it as:**

> Security guard 🛡️ checking requests before they enter your app.

### ✅ **Example:**

```jsx
import express from "express";
const app = express();

// First middleware
app.use((req, res, next) => {
  console.log("Middleware 1 Running");
  next(); // passes control to the next middleware or route
});

// Second middleware
app.use((req, res, next) => {
  console.log("Middleware 2 Running");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);
```

### 🧩 **Key Points:**

- `app.use()` – used to apply middleware.
- `next()` – moves to the next middleware or route.
- Middleware runs **in order** they are defined.
- You can use middleware for:
  - Logging
  - Authentication
  - Parsing data (`express.json()`, `express.urlencoded()`)

---

## 📩 **Request and Response Handling**

When a user sends a request:

- Express **receives it**.
- Your **route handler** processes it.
- You **send a response** back using `res`.

Common response methods:

```jsx
res.send("Text Response");
res.json({ message: "JSON Response" });
res.status(200).send("OK");
```

---

## 🧯 **Error Handling in Express**

Express provides a special middleware for handling errors.

### ⚠️ Example:

```jsx
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res, next) => {
  return next(new Error("Not Implemented"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### 🧩 **How It Works:**

- `next(new Error(...))` – passes an error to Express.
- Express automatically skips all other middleware and runs the **error handler**.
- `err.stack` – gives the error trace (helpful for debugging).
- Always define error middleware **at the bottom** of all routes.

---

## 🧾 **Quick Summary**

| Concept        | Meaning                                | Example                              |
| -------------- | -------------------------------------- | ------------------------------------ |
| Framework      | Predefined structure for building apps | Express.js                           |
| Library        | Collection of reusable functions       | Lodash                               |
| Middleware     | Function between request and response  | `app.use()`                          |
| Route          | Path where request is handled          | `app.get('/')`                       |
| Error Handling | Catches app errors                     | `app.use((err, req, res, next)=>{})` |

---
