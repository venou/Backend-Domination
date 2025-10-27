const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/create", async (req, res) => {
  let userCreated = await userModel.create({
    name: "Shivani",
    userName: "ShivaniKumari",
    email: "shivanikri1@gmail.com",
  });
  res.send(userCreated);
});

app.get("/update", async (req, res) => {
  let userUpdated = await userModel.findOneAndUpdate(
    { userName: "Shhivakr" },
    { name: "Shiva Pandit" },
    { new: true }
  );
  res.send(userUpdated);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});
app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ userName: "ShivaniKumari" });
  res.send(users);
});

app.listen(3000);
