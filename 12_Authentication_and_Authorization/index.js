// npm install express bcryptjs jsonwebtoken
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const users = []; // temporary "DB"
const SECRET = "mySecretKey"; // use env var in real apps

// 🧾 Signup — hash password with bcrypt
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  users.push({ username, password: hash });
  res.send("✅ User registered successfully");
});

// 🔐 Login — verify password + generate JWT
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send("Invalid password");

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

// ⚙️ Protected route — verify JWT
app.get("/profile", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("No token provided");

  try {
    const user = jwt.verify(token, SECRET);
    res.send(`Welcome ${user.username}!`);
  } catch {
    res.status(403).send("Invalid or expired token");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
