const path = require("path");
const userModel = require("./Models/user");
const express = require("express");
const user = require("./Models/user");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let allUsers = await userModel.find();
  res.render("read", { user: allUsers });
});

app.post("/create", async (req, res) => {
  console.log(req.body);
  let { name, email, image } = req.body;
  let userCreate = await userModel.create({
    name: name,
    email: email,
    image: image,
  });
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  let deleteuser = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.listen(3000);
