## 🧠 Project Overview

I’ve built a **simple authentication-based backend** using:

- **Express.js** for routing and server logic
- **MongoDB + Mongoose** for data modeling and persistence
- **bcrypt** for password hashing
- **jsonwebtoken (JWT)** for authentication
- **cookie-parser** for session tracking
- **EJS + TailwindCSS** for front-end templating and styling

The flow:

👉 User registers → password hashed → JWT generated → token stored in cookie → protected routes check that token → user stays logged in.

---

## ⚙️ `app.js` — Main Server Logic

### Key Concepts Used:

- **Routing** (handling HTTP GET/POST)
- **Middleware** (`express.json`, `cookieParser`, custom `isLoggedIn`)
- **Asynchronous code** (await, async)
- **JWT Authentication Flow**

---

### 1. Setup and Imports

```jsx
const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

```

- `express()` creates the app server.
- `userModel` and `postModel` are Mongoose models for interacting with MongoDB.
- `cookieParser` lets Express read cookies sent by the client (used for JWT storage).
- `bcrypt` is used to hash and verify passwords securely.
- `jwt` handles generating and verifying tokens.

---

### 2. Middleware Configuration

```jsx
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

```

- **EJS as template engine:** allows rendering `.ejs` files (HTML + JS mix).
- `express.json()` parses JSON data from API requests.
- `express.urlencoded()` parses form data (used in POST forms).
- `cookieParser()` reads and writes cookies.

---

### 3. Routes — GET Requests

```jsx
app.get("/", (req, res) => res.render("index"));
app.get("/login", (req, res) => res.render("login"));

```

- `/` → serves the signup page
- `/login` → serves the login page

Both are using **EJS templates** from your `views` folder.

---

### 4. Protected Route — `/profile`

```jsx
app.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.user);
  res.render("login");
});

```

- Uses **middleware `isLoggedIn`** to verify token before rendering.
- `req.user` comes from decoded JWT data.
- This is where you’d normally render the user’s profile page later.

---

### 5. Register User (POST `/register`)

```jsx
app.post("/register", async (req, res) => {
  let { email, username, age, name, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.status(500).send("User Already Registered");
})
```

- Reads data from form.
- Checks if email already exists.

### Password Hashing

```jsx
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, async (err, hash) => {
    let user = await userModel.create({
      username,
      name,
      age,
      email,
      password: hash,
    });
  })})
```

- Generates a **unique salt** (random string).
- Hashes password → replaces plain password with hashed version.

### Token Generation

```jsx
let token = jwt.sign({ email: email, userId: user._id }, "SecretKey");
res.cookie("token", token);
res.send("registered");

```

- Generates a JWT containing user data.
- Stores it in browser cookies for authentication persistence.

---

### 6. Login User (POST `/login`)

```jsx
app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.status(500).send("Something went Wrong");
  })
```

- Finds the user using email.

### Password Verification

```jsx
bcrypt.compare(password, user.password, (err, result) => {
  if (result) {
    let token = jwt.sign({ email: email, userId: user._id }, "SecretKey");
    res.cookie("token", token);
    res.status(200).send("you can login");
  } else res.redirect("/login");
});

```

- Compares hashed password in DB with entered password.
- If valid → issues new token.
- Otherwise → redirects to login page.

---

### 7. Logout

```jsx
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

```

- Clears JWT cookie to log the user out.

---

### 8. Authentication Middleware

```jsx
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") res.send("you must be logged in");
  else {
    let data = jwt.verify(req.cookies.token, "SecretKey");
    req.user = data;
    next();
  }
}

```

- Checks if cookie `token` exists.
- Verifies JWT and attaches decoded data to `req.user`.
- If not logged in → stops route access.

> ⚠️ Improvement Needed:
> 
> 
> Instead of `if (req.cookies.token === "")`, use `if (!req.cookies.token)` — because missing or expired cookies will throw an error otherwise.
> 

---

## 🧩 `user.js` — User Model

```jsx
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/miniproject");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId }],
});

```

- **Connects to MongoDB** local instance `miniproject`.
- Defines a `userSchema` with basic user info.
- `posts` array will later store references (ObjectIds) to `post` documents.

> 💡 You can add { ref: "post" } inside posts array to enable population (populate()).
> 

---

## 📝 `post.js` — Post Model

```jsx
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: String,
  Likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});

```

- Each post is linked to one **user**.
- Has default `date`, `content`, and `Likes` array.
- `Likes` can store multiple user IDs who liked the post.

---

## 💻 `index.ejs` — Register Page

A form with `action="/register"` and `method="POST"`.

Inputs: username, email, name, age, password.

TailwindCSS adds styling.

> The form data hits your /register route → Express parses it → req.body stores the input.
> 

---

## 💻 `login.ejs` — Login Page

A simple form with:

- `email`
- `password`
- Button to submit to `/login`

When successful, the backend sends the JWT cookie and a success message.

---

## 🔄 Overall Flow

1. **User visits `/`** → sees registration page.
2. **Fills form** → POST `/register`
    
    → password hashed → user created → token stored in cookie.
    
3. **User logs in** via `/login`
    
    → password verified → token refreshed.
    
4. **Access protected route** `/profile`
    
    → middleware checks JWT validity.
    
5. **Logout** → clears cookie.

---

## 💪 Suggested Improvements

- Use `.env` for secret keys & DB URI.
- Add error handling (`try/catch`).
- Use `res.redirect()` to dashboard after login instead of `res.send()`.
- In `userSchema`, add `{ ref: "post" }` for population.
- Validate inputs before saving (Joi, validator, etc.).
- Separate routes into different files (clean architecture).

---