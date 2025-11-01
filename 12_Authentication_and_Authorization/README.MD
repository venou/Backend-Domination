**Authentication:**

- Process of verifying a user’s **identity**.
- Confirms **who the user is** (e.g., login with username & password, OTP, fingerprint).
- Happens **before** authorization.
- Example: Logging in to a website by entering valid credentials.

**Authorization:**

- Process of verifying **what an authenticated user is allowed to do**.
- Determines **access levels and permissions** (e.g., user vs. admin).
- Happens **after** authentication.
- Example: A normal user can view data, but only an admin can edit or delete it.

**In short:**

- **Authentication = Who are you?**
- **Authorization = What can you do?**

---

### **Cookies**

- Small pieces of **data stored in the browser** by the server.
- Used to **remember information** like login status, preferences, or tracking IDs.
- Sent with **every HTTP request** to the same domain.
- Can be **set to expire** after a time or when the browser closes.
- Example use: “Remember Me” feature on a login page.

⚠️ **Downside:** Can be **manipulated** or **stolen** if not secured (use `httpOnly` and `secure` flags).

---

### **Sessions**

- A **server-side storage mechanism** that keeps user data after login.
- When you log in, the server creates a **session object** and gives the browser a **session ID** (usually stored in a cookie).
- On every request, the browser sends this session ID — the server uses it to identify the user.
- Example: Shopping cart data, user authentication state.

⚠️ **Downside:** Takes **server memory**, and you lose data when the server restarts unless you use persistent storage (like Redis).

---

### **Cookie vs Session (Quick Comparison)**

| Feature | Cookies | Sessions |
| --- | --- | --- |
| Storage | Client-side (browser) | Server-side |
| Security | Less secure | More secure |
| Size Limit | ~4KB | Depends on server |
| Lifetime | Controlled by expiry | Controlled by server/session timeout |
| Usage | Storing small data, preferences | Storing user login state or sensitive data |

---

**In short:**

- **Cookies**: store data on the **client**.
- **Sessions**: store data on the **server**, identified using a **cookie**.

---

### ⚙️ 1. **Setup**

Install the cookie parser:

```bash
npm install express cookie-parser

```

Then import it:

```jsx
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

```

---

### 🍪 2. **Set a Cookie**

You can send a cookie from the server to the client using `res.cookie()`.

```jsx
app.get("/setcookie", (req, res) => {
  res.cookie("username", "Shiva", {
    maxAge: 1000 * 60 * 60, // expires in 1 hour
    httpOnly: true, // prevents client-side JS from accessing it
    secure: false,  // set true only for HTTPS
  });
  res.send("Cookie has been set!");
});

```

✅ When the client hits `/setcookie`, the browser stores the cookie.

---

### 📖 3. **Read a Cookie**

You can access cookies from incoming requests using `req.cookies`.

```jsx
app.get("/getcookie", (req, res) => {
  const username = req.cookies.username;
  res.send(`Hello ${username || "Guest"}!`);
});

```

✅ Now, if you visit `/getcookie` after `/setcookie`, it’ll display the stored username.

---

### ❌ 4. **Delete a Cookie**

To clear a cookie:

```jsx
app.get("/clearcookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie cleared!");
});

```

---

### 💡 5. **Important Tips**

- Always set `httpOnly: true` to protect cookies from being accessed by JavaScript (prevents XSS).
- Use `secure: true` in production (ensures cookie only sent over HTTPS).
- For signed cookies (to prevent tampering), use:
    
    ```jsx
    app.use(cookieParser("mySecretKey"));
    res.cookie("user", "Shiva", { signed: true });
    console.log(req.signedCookies);
    
    ```
    

---

### 🔐 **What is bcrypt?**

`bcrypt` is a **password hashing library** used to securely store passwords in the database.

It doesn’t just hash; it also **salts and stretches** passwords — meaning it protects even against brute-force and rainbow table attacks.

---

### 🧩 **Why You Need It**

If you store plain passwords (even temporarily), you’re basically inviting a data breach.

With bcrypt:

- Passwords are **irreversible** — you can’t “decrypt” them.
- Even if two users have the same password, bcrypt’s **salt** makes their hashes unique.
- It’s **slow by design**, which helps protect against automated cracking attempts.

---

### ⚙️ **Step 1: Install**

```bash
npm install bcryptjs

```

---

### 💾 **Step 2: Hash Password (Signup)**

```jsx
const bcrypt = require("bcryptjs");

async function signup(password) {
  const saltRounds = 10;                        // cost factor
  const salt = await bcrypt.genSalt(saltRounds); // generate unique salt
  const hashedPassword = await bcrypt.hash(password, salt); // hash + salt

  console.log("Original:", password);
  console.log("Hashed:", hashedPassword);

  // Save hashedPassword to your DB (never the plain password)
  return hashedPassword;
}

signup("mySecret123");

```

✅ What’s happening:

- `genSalt()` adds randomness (so two identical passwords get different hashes).
- `hash()` creates a secure, irreversible hash.
- You store the hash in your database, not the plain password.

---

### 🔐 **Step 3: Compare Password (Login)**

```jsx
async function login(enteredPassword, storedHash) {
  const isMatch = await bcrypt.compare(enteredPassword, storedHash);

  if (isMatch) {
    console.log("✅ Password is correct — login success");
  } else {
    console.log("❌ Wrong password — access denied");
  }
}

// Example usage
(async () => {
  const storedHash = await signup("mySecret123");
  await login("mySecret123", storedHash); // ✅ match
  await login("wrongPass", storedHash);   // ❌ no match
})();

```

✅ `bcrypt.compare()` automatically handles the salting — you just pass the plain password and stored hash.

---

### 🧠 **In Short**

| Step | Function | Purpose |
| --- | --- | --- |
| **genSalt()** | Adds randomness | Prevents rainbow-table attacks |
| **hash()** | Hashes password with salt | Produces unique, irreversible string |
| **compare()** | Verifies login password | Checks if it matches stored hash |

---

**Summary:**

- Never store plain passwords.
- Always hash with salt (bcrypt does both).
- Use at least `10` salt rounds (12 for higher security).

---

### 🔐 **What is JWT?**

**JWT** stands for **JSON Web Token** — it’s a **compact, digitally signed token** used to verify **who you are** and sometimes **what you’re allowed to do**.

It’s basically a **secure, encoded message** between a client and server — not encrypted (unless you add extra layers), but **signed**, meaning it can’t be tampered with.

---

### ⚙️ **Why JWT Exists**

In traditional session-based auth:

- The server keeps session data for every logged-in user.
- That’s fine for small apps, but it **doesn’t scale** and **requires server memory**.

JWT fixes this:

- No session storage on the server.
- The server just verifies the **token signature** — stateless and fast.

---

### 🧩 **JWT Structure**

A JWT has **three parts** separated by dots:

```
xxxxx.yyyyy.zzzzz

```

1. **Header** → info about algorithm and token type
    
    ```json
    { "alg": "HS256", "typ": "JWT" }
    
    ```
    
2. **Payload** → user data (claims)
    
    ```json
    { "id": 1, "username": "Shiva", "role": "admin" }
    
    ```
    
3. **Signature** → ensures token isn’t modified
    
    ```
    HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload), secret )
    
    ```
    

Together:

```
header.payload.signature

```

Example:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNoaXZhIn0.0F8Kq7Y...

```

---

### 🧠 **How JWT Works**

1. You **log in** with correct credentials.
2. Server verifies them and returns a **token** signed with a **secret key**.
3. You store that token on the client (localStorage or cookie).
4. For every next request, you send that token in the **Authorization header**:
    
    ```
    Authorization: Bearer <token>
    
    ```
    
5. Server verifies the token’s **signature** using the secret key.
6. If it’s valid, you’re allowed in — no need to log in again.

---

### 🔧 **Basic Example (Node.js + Express + JWT)**

Install:

```bash
npm install jsonwebtoken

```

Code:

```jsx
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const JWT_SECRET = "mySecretKey";

// login route -> generate token
app.post("/login", (req, res) => {
  const user = { id: 1, username: "Shiva" };
  const token = jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// middleware -> verify token
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}

// protected route
app.get("/profile", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}!` });
});

app.listen(3000, () => console.log("Server running on port 3000"));

```

---

### ⚔️ **JWT vs Session**

| Feature | JWT | Session |
| --- | --- | --- |
| Storage | Client-side | Server-side |
| Scalability | High | Limited |
| State | Stateless | Stateful |
| Expiry | Built-in | Manual |
| Security Risk | Token theft | Session hijacking |

---

### 🚨 **Common Mistakes**

- Storing JWT in `localStorage` without secure context (susceptible to XSS).
    
    → Better: use **HTTP-only cookies** for real security.
    
- Thinking JWT = encryption.
    
    → It’s not encrypted, only signed. Anyone can decode it, but can’t fake it.
    

---

**In short:**

> JWT is a signed token that lets the server trust who you are without storing session data.
> 
> 
> It’s how modern APIs handle authentication — fast, stateless, and scalable.
> 

---