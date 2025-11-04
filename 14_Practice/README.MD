
### A simple Node.js + Express + MongoDB authentication app using bcrypt for password hashing and JWT for session management. ###
---

Views are rendered with **EJS** and styled using **TailwindCSS**.

---

## ⚙️ Core Files & Purpose

| File | Purpose |
| --- | --- |
| **app.js** | Main server file — defines routes, logic, authentication, and cookie handling. |
| **models/user.js** | Mongoose schema and model for storing user data in MongoDB. |
| **views/index.ejs** | Frontend form for creating (registering) a user. |
| **views/login.ejs** | Frontend form for logging in an existing user. |

---

## 🧩 Technologies Used

- **Express.js** → Server framework for routing and middleware.
- **EJS** → Template engine for rendering HTML views.
- **Mongoose** → For MongoDB schema & data interaction.
- **Bcrypt** → Encrypts passwords before storing.
- **JWT (jsonwebtoken)** → Creates secure tokens for authentication.
- **cookie-parser** → Parses cookies for token storage.
- **TailwindCSS** → For responsive UI design.

---

## 📄 File-by-File Study Notes

### 🟢 `user.js` (Model)

```jsx
const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/authtestapp2`);

```

- Connects to local MongoDB database named **authtestapp2**.
- You must have MongoDB running locally.

```jsx
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  password: String,
});

```

- Defines what fields a user will have.
- Password will be **hashed** before saving.

```jsx
module.exports = mongoose.model("user", userSchema);

```

- Creates and exports the `user` model for use in routes.

---

### 🟢 `index.ejs` (User Creation Page)

- Displays a **Create User** form.
- Collects: `username`, `email`, `password`, and optional `age`.
- Submits form data to `/create` via `POST`.
- Uses Tailwind for modern design and input focus animations.

👉 **Key takeaway:** This page is for **user registration**.

---

### 🟢 `login.ejs` (Login Page)

- Collects user `email` and `password`.
- Sends data via POST to `/login`.
- On successful authentication, the server issues a **JWT token**.

👉 **Key takeaway:** This page is for **user authentication** (login).

---

### 🟢 `app.js` (Main Server Logic)

### 🔧 Setup

```jsx
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

```

- Sets **EJS** as the template engine.
- Enables reading of JSON/form data.
- Serves static files from `/public`.
- Parses cookies for login tokens.

---

### 🏠 Route: `/`

```jsx
app.get("/", (req, res) => {
  res.render("index");
});

```

- Renders the user registration form.

---

### ✳️ Route: `/create` → **User Registration**

```jsx
app.post("/create", (req, res) => {
  let { username, email, age, password } = req.body;

```

- Extracts form data from the request.

```jsx
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, async (err, hash) => {
    let createdUser = await userModel.create({
      username, email, age, password: hash,
    });

```

- Generates a salt (10 rounds) and hashes the password.
- Stores user with **hashed password** in MongoDB.

```jsx
let token = jwt.sign({ email }, "secretkey");
res.cookie("token", token);
res.send(createdUser);

```

- Signs a JWT using `email` as payload.
- Stores token in cookies for authentication.
- Responds with user data (for debugging or confirmation).

👉 **Key takeaway:** Never store raw passwords — always hash before saving.

---

### 🔐 Route: `/login` (GET)

```jsx
app.get("/login", (req, res) => {
  res.render("login");
});

```

- Renders the login form.

---

### 🧠 Route: `/login` (POST)

```jsx
let user = await userModel.findOne({ email: req.body.email });
if (!user) return res.send("Something went wrong");

```

- Finds user by email. If not found → error.

```jsx
bcrypt.compare(req.body.password, user.password, (err, result) => {
  if (result) {
    let token = jwt.sign({ email: user.email }, "secretkey");
    res.cookie("token", token);
    res.send("You can Login");
  } else return res.send("something went wrong");
});

```

- Compares entered password with hashed password in DB.
- If valid → generates JWT and stores in cookies.
- If invalid → error message.

👉 **Key takeaway:** `bcrypt.compare()` ensures passwords are matched securely without exposing plain text.

---

### 🚪 Route: `/logout`

```jsx
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

```

- Clears JWT cookie to log user out.
- Redirects back to home page.

---

### 🟢 Server Start

```jsx
app.listen(3000);

```

- Starts the server at `http://localhost:3000`.

---

## 🧠 Key Concepts to Remember

| Concept | Explanation |
| --- | --- |
| **bcrypt.genSalt() + hash()** | Adds randomness (salt) before hashing to make passwords harder to crack. |
| **jwt.sign(payload, secret)** | Creates a secure token used for authenticating users. |
| **res.cookie("token", value)** | Stores token in user’s browser cookies. |
| **bcrypt.compare()** | Verifies user login by checking if entered password matches stored hash. |
| **Middleware order matters** | `cookieParser`, `express.json`, and `urlencoded` must be initialized before routes. |
| **Async behavior** | Some bcrypt and Mongoose operations are asynchronous — must be awaited or handled in callbacks. |

---

## 🧱 Improvements I Will Add Later

1. Add **JWT verification middleware** to protect routes.
2. Store JWT secret in **environment variables**.
3. Show proper **error messages / success UI** instead of raw text.
4. Redirect users after login instead of sending plain messages.
5. Add **password validation rules**.
6. Implement **session expiry** for security.

---