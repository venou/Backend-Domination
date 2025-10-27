### 🧩 **ORM (Object-Relational Mapping)**

**Used for:** SQL / Relational Databases (like MySQL, PostgreSQL, SQLite)

### 🔍 Definition:

**ORM** is a technique (and the tools/libraries built around it) that allows you to interact with a **relational database** using **objects and methods in your programming language** instead of writing raw SQL queries.

### ⚙️ How it works:

- It maps **classes** → **tables**
- It maps **objects** → **rows**
- It maps **class properties** → **columns**

### 🧠 Example (with Sequelize in Node.js):

```jsx
// Define a model
const User = sequelize.define("User", {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

// Create a record
await User.create({ name: "Shiva", age: 21 });

// Query data
const users = await User.findAll();

```

👉 This automatically runs SQL under the hood like:

```sql
SELECT * FROM users;

```

### 🧰 Common ORMs:

- Sequelize (Node.js)
- TypeORM (Node.js)
- Hibernate (Java)
- Django ORM (Python)
- SQLAlchemy (Python)

---

### 🌿 **ODM (Object-Document Mapping)**

**Used for:** NoSQL / Document Databases (like MongoDB)

### 🔍 Definition:

**ODM** is similar to ORM, but instead of mapping to **tables and rows**, it maps your **objects to documents** (usually JSON-like) stored in **collections**.

### ⚙️ How it works:

- It maps **classes** → **collections**
- It maps **objects** → **documents**
- It handles **schema**, **validation**, and **queries**

### 🧠 Example (with Mongoose for MongoDB):

```jsx
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// Create a document
await User.create({ name: "Shiva", age: 21 });

// Query documents
const users = await User.find();

```

👉 This runs MongoDB queries like:

```jsx
db.users.find();

```

### 🧰 Common ODMs:

- **Mongoose** (Node.js)
- **Doctrine MongoDB ODM** (PHP)
- **Morphia** (Java)

---

### ⚖️ **Summary Table**

| Feature | ORM | ODM |
| --- | --- | --- |
| Used with | SQL Databases | NoSQL Databases (MongoDB) |
| Data format | Tables & Rows | Collections & Documents |
| Query Language | SQL | BSON / JSON-like |
| Example Library | Sequelize, TypeORM | Mongoose |
| Example DB | MySQL, PostgreSQL | MongoDB |

# MongoDB CRUD Operations Notes

## 📝 Overview

- **Date**: Today
- **Topic**: MongoDB CRUD Operations with Express.js & Mongoose
- **CRUD**: Create, Read, Update, Delete

## 🏗️ Project Structure

```
Express App + Mongoose ODM + MongoDB

```

## 🔧 CRUD Operations Implementation

### CREATE Operation

```jsx
app.get("/create", async (req, res) => {
  let userCreated = await userModel.create({
    name: "Shivani",
    userName: "ShivaniKumari",
    email: "shivanikri1@gmail.com",
  });
  res.send(userCreated);
});

```

**Purpose**: Insert new document into users collection

**Method**: `userModel.create()`

**Returns**: The created user document

### READ Operation

```jsx
app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

```

**Purpose**: Fetch all documents from users collection

**Method**: `userModel.find()`

**Returns**: Array of all user documents

### UPDATE Operation

```jsx
app.get("/update", async (req, res) => {
  let userUpdated = await userModel.findOneAndUpdate(
    { userName: "Shhivakr" },           // Filter
    { name: "Shiva Pandit" },           // Update data
    { new: true }                       // Options
  );
  res.send(userUpdated);
});

```

**Purpose**: Find and update a specific document

**Method**: `userModel.findOneAndUpdate()`

**Parameters**:

- **Filter**: Criteria to find document `{userName: "Shhivakr"}`
- **Update**: Data to update `{name: "Shiva Pandit"}`
- **Options**: `{new: true}` returns updated document

### DELETE Operation

```jsx
app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({
    userName: "ShivaniKumari"
  });
  res.send(users);
});

```

**Purpose**: Find and delete a specific document

**Method**: `userModel.findOneAndDelete()`

**Returns**: The deleted document

## 📊 Mongoose Schema Definition

```jsx
const userSchema = mongoose.Schema({
  name: String,
  userName: String,
  email: String,
});
module.exports = mongoose.model("user", userSchema);

```

## 💡 Key Concepts Learned

### 1. **Mongoose ODM**

- Object Data Modeling library for MongoDB
- Provides schema validation, middleware, and type casting
- Converts objects between MongoDB and Node.js

### 2. **Async/Await Pattern**

- All database operations are asynchronous
- Use `async/await` for clean, readable code
- Handle promises returned by Mongoose methods

### 3. **Route Design**

- RESTful endpoints for each CRUD operation
- GET routes for simplicity (typically POST/PUT for create/update)
- Clear separation of concerns

### 4. **Mongoose Methods**

- `create()` - Insert new document
- `find()` - Retrieve multiple documents
- `findOneAndUpdate()` - Find and update single document
- `findOneAndDelete()` - Find and delete single document

## 🚀 Common Mongoose Methods & Syntax

### Create Methods

- `Model.create()` - Insert one or multiple documents
- `new Model().save()` - Create instance and save

### Read Methods

- `Model.find()` - Get all documents
- `Model.findOne()` - Get single document
- `Model.findById()` - Get by ID

### Update Methods

- `Model.findOneAndUpdate()` - Find and update
- `Model.updateOne()` - Update single document
- `Model.updateMany()` - Update multiple documents

### Delete Methods

- `Model.findOneAndDelete()` - Find and delete
- `Model.deleteOne()` - Delete single document
- `Model.deleteMany()` - Delete multiple documents

## ⚠️ Important Notes & Best Practices

### 1. **Connection Setup**

```jsx
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

```

- Always use localhost IP `127.0.0.1` instead of `localhost`
- Specify database name in connection string

### 2. **Update Options**

- `{new: true}` - Returns the updated document
- Without this option, returns the original document

### 3. **Error Handling**

- Add try-catch blocks for production code
- Handle database connection errors
- Validate data before operations

### 4. **Route Naming Convention**

For production apps, use proper HTTP methods:

- **POST** `/users` - Create
- **GET** `/users` - Read all
- **GET** `/users/:id` - Read one
- **PUT** `/users/:id` - Update
- **DELETE** `/users/:id` - Delete

##