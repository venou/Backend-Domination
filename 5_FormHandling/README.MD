## **1. Form Handling in Express.js**

Excellent — you're entering the **core of backend development** with Express.js 👏

Let’s go step-by-step through **form handling, sessions, and cookies** in a clear and practical way 👇

---

Forms allow users to send data (like login info, feedback, etc.) to your server.

### 💡 Key Idea:

When a form is submitted, the data is sent through the **request body**, and Express helps you handle it easily.

---

### 🔧 **Setup:**

To handle form data, you need middleware to **parse incoming data**.

### Install body-parser (optional in latest versions)

```bash
npm i body-parser

```

Or just use built-in Express middleware:

```jsx
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
```

---

### 🧩 **Example:**

```jsx
import express from "express";
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to show form
app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <input name="username" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to handle form submission
app.post("/submit", (req, res) => {
  const { username } = req.body;
  res.send(`Hello, ${username}!`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

📘 **Explanation:**

- `app.use(express.urlencoded(...))` → parses form data.
- `req.body` → contains the form input values.
- `method="POST"` → sends data securely to the server.

---

## 🍪 **2. Cookies in Express.js**

Cookies are small pieces of data stored in the **browser** to remember information (like login state or preferences).

### 📦 Install:

```bash
npm i cookie-parser

```

### ⚙️ **Setup:**

```jsx
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
```

---

### 🧩 **Example:**

```jsx
app.get("/setcookie", (req, res) => {
  res.cookie("username", "Shiva", { maxAge: 60000, httpOnly: true });
  res.send("Cookie has been set!");
});

app.get("/getcookie", (req, res) => {
  const user = req.cookies.username;
  res.send(`Welcome back, ${user || "Guest"}!`);
});

app.get("/clearcookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie cleared!");
});
```

🧠 **Explanation:**

- `res.cookie()` → creates a cookie.
- `req.cookies` → reads stored cookies.
- `res.clearCookie()` → deletes a cookie.
- `{ httpOnly: true }` → prevents client-side JS access (for security).

---

## 🧠 **3. Session Handling**

A **session** stores user data on the **server** instead of the browser.

It’s used for login systems, cart data, or anything that needs persistence between requests.

---

### 📦 Install:

```bash
npm i express-session

```

### ⚙️ **Setup:**

```jsx
import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, // 1 minute
  })
);
```

---

### 🧩 **Example:**

```jsx
app.get("/login", (req, res) => {
  req.session.user = "Shiva";
  res.send("User logged in!");
});

app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user}, to your dashboard!`);
  } else {
    res.send("Please log in first.");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("User logged out.");
});
```

🧠 **Explanation:**

- `req.session` → stores user data server-side.
- `req.session.destroy()` → ends the session.
- Sessions automatically use **cookies** to identify users securely.

---

## ⚖️ **Summary Table**

| Concept       | Stored Where               | Purpose                        | Example Package        |
| ------------- | -------------------------- | ------------------------------ | ---------------------- |
| Form Handling | Server parses request body | Receive user input             | `express.urlencoded()` |
| Cookies       | Client-side (browser)      | Store small data like username | `cookie-parser`        |
| Sessions      | Server-side                | Track login/cart data          | `express-session`      |

---

Would you like me to make an **infographic (like your Express one)** showing how request → form → cookie → session flow works together visually?
