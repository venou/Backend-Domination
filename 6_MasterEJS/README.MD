### 🚀 Express.js Notes — Parser, EJS, Static Files & Dynamic Routing ###
# 🔹 1. Setting up the Parser (for Form Handling)

---

### 💡 Concept

In Express, parsers are used to **read data sent from the frontend** — like form inputs or JSON data.

Basically, when the user submits a form, you can access it in the backend using `req.body`.

### ⚙️ Example Setup

```jsx
import express from "express";

const app = express();

// Parser setup
app.use(express.json()); // handles JSON data
app.use(express.urlencoded({ extended: true })); // handles HTML form data

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(3000, () => {
  console.log("It's running on port 3000");
});

```

### 🧩 Breakdown

| Middleware | Purpose |
| --- | --- |
| `express.json()` | Parses JSON data (for APIs) |
| `express.urlencoded({ extended: true })` | Parses form data (from HTML forms) |
| `extended: true` | Allows nested form objects to be parsed correctly |

---

## 🔹 2. Setting up **EJS** (for Dynamic HTML Pages)

### 💡 Concept

**EJS (Embedded JavaScript)** is a templating engine that lets you **write JavaScript code inside HTML**.

It’s used to render **dynamic content** — like showing usernames, posts, or any data coming from your backend.

### ⚙️ Steps to Setup

1. Install EJS
    
    ```bash
    npm i ejs
    
    ```
    
2. Tell Express to use EJS
    
    ```jsx
    app.set("view engine", "ejs");
    
    ```
    
3. Create a folder named `views` in your project root
4. Inside that, create a file `index.ejs`

### 🧱 Example: `views/index.ejs`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <h1>Hey <%= 2 + 2 %></h1>
</body>
</html>

```

🔸 `<%= %>` → used to **embed dynamic JavaScript code** inside HTML

Example:

`<%= user.name %>` → displays the username sent from the backend.

---

## 🔹 3. Setting up **Static Files** (CSS, JS, Images)

### 💡 Concept

Static files (like CSS, JavaScript, and images) are the files that don’t change dynamically.

To serve them publicly (so the browser can load them), Express provides the `express.static()` middleware.

### ⚙️ Folder Structure

```
project/
│
├── public/
│   ├── style.css
│   └── script.js
│
├── views/
│   └── index.ejs
│
└── server.js

```

### ⚙️ Example Code

```jsx
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // serve static files

// View Engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

```

---

## 🔹 4. **Dynamic Routing**

### 💡 Concept

**Dynamic routing** means creating routes that can handle variable parts of a URL —

for example, a route like `/user/:id` where `:id` changes depending on which user is being viewed.

### ⚙️ Example

```jsx
app.get("/profile/:username", (req, res) => {
  res.send(`Welcome, ${req.params.username}`);
});

app.get("/author/:username/:age", (req, res) => {
  res.send(`Welcome, ${req.params.username}, age ${req.params.age}`);
});

```

### 🧩 Explanation

| Term | Description |
| --- | --- |
| `:username` | Dynamic URL segment |
| `req.params` | Object that stores dynamic URL values |

🧠 Example:

- URL: `/profile/venou`
- Output: `Welcome, venou`
- `req.params` = `{ username: "venou" }`

---

## 🧾 Recap

| Concept | Description |
| --- | --- |
| `express.json()` & `express.urlencoded()` | Parse form and JSON data |
| EJS | Renders dynamic HTML pages |
| `express.static()` | Serves public files (CSS, JS, images) |
| Dynamic Routing | Handles variable URL parts using `:` |

---

## ⚡ Quick Flashcards (for Revision)

1. **Q:** What is `express.urlencoded()` used for?
    
    **A:** Parsing data from HTML forms.
    
2. **Q:** Where are EJS files stored by default?
    
    **A:** Inside the `views` folder.
    
3. **Q:** What does `<%= %>` do in EJS?
    
    **A:** Embeds JavaScript code dynamically inside HTML.
    
4. **Q:** Which middleware serves static files?
    
    **A:** `express.static()`
    
5. **Q:** What does `req.params` contain?
    
    **A:** The values of dynamic URL parameters.
    
6. **Q:** Why do we use `app.set("view engine", "ejs")`?
    
    **A:** To make EJS the default templating engine.
    
7. **Q:** What does `extended: true` mean?
    
    **A:** It allows parsing of nested form data.
    

---