## Data Storage: The Basics

Data storage is where digital information is kept safely and retrieved when needed.

### Types of data storage

- Primary storage (temporary)
    - Example: RAM (Random Access Memory)
    - Very fast, but data is lost when power is off
    - Analogy: A whiteboard you erase after use
- Secondary storage (permanent)
    - Examples: HDDs, SSDs, USB drives
    - Keeps data even when power is off
    - Analogy: A notebook that keeps your notes
- Cloud storage
    - Examples: Google Drive, iCloud, Dropbox
    - Stored on the internet, accessible from anywhere
    - Analogy: Saving files in a secure locker online

---

## Types of Databases

1. Relational Database (RDBMS)
    - Structure: Tables with rows and columns
    - Examples: MySQL, PostgreSQL, Oracle, SQL Server
    - Use cases: Banking, e‑commerce, employee management
    - Key feature: Uses SQL (Structured Query Language)
2. NoSQL Database
    - Structure: Flexible models
        - Document: MongoDB
        - Key‑value: Redis
        - Column: Cassandra
        - Graph: Neo4j
    - Use cases: Social media, big data, real‑time analytics
    - Key feature: Handles large and unstructured data efficiently
3. In‑Memory Database
    - Structure: Stores data in RAM for ultra‑fast access
    - Examples: Redis, Memcached
    - Use cases: Caching, real‑time analytics, gaming leaderboards
4. Cloud Database
    - Structure: Managed on cloud platforms, accessible over the internet
    - Examples: Amazon RDS, Google Firebase, Azure SQL
    - Use cases: Apps with global users, elastic scale needs
5. Graph Database
    - Structure: Nodes (entities) and edges (relationships)
    - Examples: Neo4j, Amazon Neptune
    - Use cases: Social networks, recommendation engines, fraud detection
6. Time‑Series Database
    - Structure: Optimized for time‑indexed data
    - Examples: InfluxDB, TimescaleDB
    - Use cases: Stock prices, IoT sensors, monitoring systems

### Quick memory hooks

- Relational: Tables
- NoSQL: Flexible and big data
- In‑Memory: Super fast
- Cloud: Online and scalable
- Graph: Connections
- Time‑Series: Timeline data

---

## SQL vs NoSQL

### 1) SQL Databases (Relational)

- Full form: Structured Query Language
- Structure: Tables with rows and columns
- Schema: Fixed and predefined
- Examples: MySQL, PostgreSQL, Oracle, SQL Server
- Best for: Structured data and complex joins
- Transactions: Strong ACID support (Atomicity, Consistency, Isolation, Durability)
- Querying: SQL
- Scaling: Typically vertical (scale up a single server)

**Pros**

- ✅ Strong data consistency
- ✅ Powerful complex queries and joins
- ✅ Mature tooling and ecosystem

**Cons**

- ❌ Less flexible for unstructured data
- ❌ Horizontal scaling is harder

### 2) NoSQL Databases (Non‑relational)

- Structure: Flexible models
    - Document, key‑value, column, or graph
- Schema: Dynamic and flexible
- Examples: MongoDB, Redis, Cassandra, Neo4j
- Best for: Large‑scale, fast‑changing, or unstructured data
- Transactions: Often eventual consistency (some engines offer ACID in scopes)
- Querying: Engine‑specific
- Scaling: Typically horizontal (scale out with more servers)

**Pros**

- ✅ Handles unstructured and massive data volumes
- ✅ Highly scalable and distributed
- ✅ Flexible schema

**Cons**

- ❌ Complex querying and joins can be harder
- ❌ Consistency trade‑offs in some models

### Analogy table

| Feature | SQL | NoSQL |
| --- | --- | --- |
| Data model | Structured (tables) | Flexible (document, key‑value, column, graph) |
| Schema | Fixed | Dynamic |
| Query language | SQL | Engine‑specific |
| Scaling | Vertical | Horizontal |
| Examples | MySQL, PostgreSQL | MongoDB, Redis, Cassandra |

---

## Practical tips

- Start with SQL if the data is well‑structured and you need complex joins or strong consistency
- Choose NoSQL for high write throughput, flexible schemas, or global scale
- Use Redis alongside either for caching and speed
- Prefer managed cloud databases to reduce ops overhead

### 🧠 **What is MongoDB?**

MongoDB stores data in **JSON-like documents** (called **BSON**) — this means you can save data in a format that looks like JavaScript objects.

Each document can have a **different structure**, which makes MongoDB very **flexible**.

---

### 📦 **Example of MongoDB Document**

```json
{
  "name": "Shiva",
  "age": 22,
  "skills": ["React", "Node.js", "MongoDB"],
  "isStudent": true}

```

Unlike SQL, you don’t need to predefine columns — you can directly insert data like this.

---

### ⚙️ **Key Features**

- **Schema-less:** You can store any kind of data, and fields can differ from document to document.
- **Scalable:** Designed for **horizontal scaling** (add more servers easily).
- **Fast & efficient:** Especially good for **large and unstructured data**.
- **Document-oriented:** Data is stored in **collections** (similar to tables in SQL).
- **Supports indexing, aggregation, and queries** similar to SQL but in a different syntax.

---

### 🏗️ **Basic MongoDB Structure**

```
Database → Collections → Documents → Fields

```

Example:

- **Database:** `school`
- **Collection:** `students`
- **Document:** `{ name: "Ravi", age: 16, grade: "10th" }`

---

### 💻 **Common Commands**

| Operation | MongoDB Command | SQL Equivalent |
| --- | --- | --- |
| Create DB | `use myDB` | `CREATE DATABASE myDB;` |
| Insert Data | `db.users.insertOne({...})` | `INSERT INTO users VALUES (...);` |
| Find Data | `db.users.find()` | `SELECT * FROM users;` |
| Update Data | `db.users.updateOne({...})` | `UPDATE users SET ...;` |
| Delete Data | `db.users.deleteOne({...})` | `DELETE FROM users WHERE ...;` |

---

### 🚀 **Use Cases**

- Real-time applications (chat apps, gaming)
- Content management systems
- E-commerce platforms
- Data analytics and IoT systems

## 🖥️ **What is a Server?**

A **server** is a **computer** (or system) that **provides services or data** to other computers — called **clients** — over a **network** (like the internet).

💡 **In simple words:**

A server is like a **restaurant kitchen**, and the client (your laptop/phone) is like the **customer**.

- You (the client) send an **order/request**.
- The kitchen (server) **prepares and sends** the **response** (your food/data).

## 🧠 **1. Application Server**

### **Definition:**

An **Application Server** runs your **backend code** — it handles **logic, calculations, authentication, and API requests**.

💬 **Simple example:**

When you log into Instagram, the **application server** checks your username and password, decides what to do, and then talks to the **database server** to get your profile data.

---

### ⚙️ **What it does:**

- Runs your **application logic** (Node.js, Java, Python, etc.)
- Handles **client requests** and sends responses
- Connects with **database servers**
- Often exposes **APIs (endpoints)**

---

### 🧩 **Examples:**

- **Node.js / Express.js**
- **Django (Python)**
- **Spring Boot (Java)**
- **.NET Core (C#)**
- **Ruby on Rails**

---

### 🧠 **In short:**

> The Application Server is the brain of your web app.
> 
> 
> It processes inputs and decides what data to send to the user.
> 

---

## 🗄️ **2. Database Server**

### **Definition:**

A **Database Server** is where **data is actually stored and managed** — it handles all the **CRUD** operations (Create, Read, Update, Delete).

💬 **Example:**

When you open your Instagram profile —

The **Application Server** says:

> “Hey Database Server, give me Shiva’s profile data.”
> 
> 
> And the **Database Server** replies with that info.
> 

---

### ⚙️ **What it does:**

- Stores and organizes data
- Handles data queries and transactions
- Ensures data security and consistency
- Responds to requests from the **application server**

---

### 🧩 **Examples:**

- **MongoDB**
- **MySQL**
- **PostgreSQL**
- **Oracle**
- **SQL Server**

---

## 🔄 **How They Work Together**

```
[ Client (Browser) ]
        ↓ Request
[ Application Server ]
   (Node.js, Express)
        ↓
  talks to
[ Database Server ]
   (MongoDB, MySQL)
        ↓
   Sends back data
        ↓
[ Client (Browser) ]

```

---

### 💡 **Easy Analogy**

| Role | Real-life Example |
| --- | --- |
| **Client** | Customer placing an order |
| **Application Server** | Waiter who takes your order & gives it to the chef |
| **Database Server** | Kitchen where the food (data) is prepared & stored |

## 🗂️ **What is a Collection (in MongoDB)?**

In **MongoDB**, a **collection** is like a **table** in SQL databases.

It’s a **group of documents** that share similar data.

💡 **Simple definition:**

A **collection** stores **multiple documents** (like rows in a table) — but unlike SQL tables, the documents **don’t need to have the same structure**.

---

### 📦 **Example**

Let’s say you have a database called **school**.

Inside it, you can have collections like:

```
school
 ├── students
 ├── teachers
 ├── classes

```

Each collection contains **documents** related to that topic.

---

### 🧾 **Example Documents inside a Collection**

**Collection:** `students`

```json
{
  "name": "Ravi",
  "age": 16,
  "grade": "10th"
}

```

```json
{
  "name": "Priya",
  "age": 15,
  "hobbies": ["reading", "sports"],
  "grade": "9th"
}

```

👉 Notice: both documents are inside the same collection (`students`),

but **they don’t have to follow the same structure** — that’s the flexibility of MongoDB!

---

### 🧱 **MongoDB Hierarchy**

```
Database → Collections → Documents → Fields

```

| Level | Example | Description |
| --- | --- | --- |
| **Database** | school | Container for all collections |
| **Collection** | students | Group of related documents |
| **Document** | { name: "Ravi", age: 16 } | Single data record |
| **Field** | "name", "age" | Key-value pairs inside a document |

---

### ⚙️ **Common Collection Commands**

| Action | MongoDB Command | Example |
| --- | --- | --- |
| Create a collection | `db.createCollection("students")` |  |
| Show all collections | `show collections` |  |
| Insert document | `db.students.insertOne({...})` |  |
| Find all documents | `db.students.find()` |  |
| Delete a collection | `db.students.drop()` |  |

---

### 💡 **Analogy**

Think of:

- **Database** = A library 📚
- **Collection** = A shelf (Science shelf, Math shelf, etc.)
- **Document** = A book on that shelf
- **Field** = Information inside that book

---