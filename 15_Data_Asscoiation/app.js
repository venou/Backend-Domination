const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "Shiva Pandit",
    email: "shiva@gmail.com",
    age: 23,
  });
  res.send(user);
});

app.get("/create/post", async (req, res) => {
  let post = await postModel.create({
    postdata: "Hello Everyone",
    user: "690b0e5e7cd03e4004fe0ddf",
  });
  let user = await userModel.findOne({ _id: "690b0e5e7cd03e4004fe0ddf" });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000);
