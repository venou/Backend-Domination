const path = require("path");
const express = require("express");
const app = express();
const userModel = require("./Models/users");
app.set("view engine", "ejs");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", (req, res) => {
  res.render("read");
});

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name: name,
    email: email,
    image: image,
  });
  res.send(createdUser);
});

app.listen(3000);
