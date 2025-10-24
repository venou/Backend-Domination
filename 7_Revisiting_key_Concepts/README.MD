

### **🚀 Overview**

This is a **file-based note-taking web application** built using **Node.js**, **Express.js**, and **EJS**.

It allows users to **create**, **view**, and **rename** text-based notes directly through a browser interface.

Each note is stored as an individual `.txt` file in a local directory named `./files`.

> 💡 This project demonstrates how a simple CRUD (Create, Read, Update,) web app can be built without a database, relying solely on Node’s file system (fs module).
> 


### **🧠 Core Concepts Demonstrated**

- Server-side rendering with **EJS**
- Routing and middleware setup in **Express.js**
- CRUD operations using **Node.js File System (fs)**
- Handling form data with `express.urlencoded()`
- Using **ESM syntax** (`import`/`export`) in Node.js
- Dynamic URL parameters (`req.params`)
- Basic UI for creating, reading, and renaming notes

---

### **📁 Project Structure**

```bash
project/
│
├── index.js               # Main server file
├── package.json           # Dependencies & scripts
├── /views                 # EJS templates
│   ├── index.ejs          # Home page: create + list notes
│   ├── show.ejs           # Display a specific note
│   └── edit.ejs           # Rename a note
│
├── /files                 # Stores all note files as .txt
│   ├── note1.txt
│   ├── note2.txt
│   └── ...
│
└── /public                # Optional: static files (CSS, JS)

```

---

### **🧩 Technologies Used**

| Category | Tool / Library | Purpose |
| --- | --- | --- |
| Server Framework | **Express.js** | Routing and HTTP request handling |
| Template Engine | **EJS** | Rendering dynamic HTML content |
| Styling | **Tailwind CSS (CDN)** | Utility-first CSS for fast UI design |
| File Handling | **Node.js fs module** | Reading, writing, renaming note files |
| Syntax | **ECMAScript Modules (ESM)** | Modern JS import/export structure |

---

### **⚙️ Application Flow**

1. **User visits `/` (Home Page):**
    - Displays a form to create a new note.
    - Lists all existing note files from the `./files` directory.
2. **User creates a note:**
    - Form sends a `POST` request to `/create`.
    - The note is saved as a `.txt` file inside the `/files` directory.
3. **User views a note:**
    - Clicking "Read more" sends a `GET` request to `/file/:filename`.
    - Server reads the note content using `fs.readFile` and renders `show.ejs`.
4. **User edits (renames) a note:**
    - Navigates to `/edit/:filename`.
    - Submits a new name through a `POST` request to `/edit`, which uses `fs.rename`.

---

### **🛠️ API & Route Reference**

| HTTP Method | Route | Description | File Operation | Template |
| --- | --- | --- | --- | --- |
| `GET` | `/` | Display homepage with note list | `fs.readdir()` | `index.ejs` |
| `POST` | `/create` | Create new note file | `fs.writeFile()` | Redirects to `/` |
| `GET` | `/file/:filename` | Display note content | `fs.readFile()` | `show.ejs` |
| `GET` | `/edit/:filename` | Open rename form | None | `edit.ejs` |
| `POST` | `/edit` | Rename existing note file | `fs.rename()` | Redirects to `/` |

---

### **🧱 Template Details**

### **`index.ejs` (Home Page)**

- Displays:
    - A form for **adding new notes**.
    - A list of all saved notes from `/files`.
- Each note shows:
    - **Filename (title)**
    - Buttons: “Read more” and “Edit”
- If no files exist → shows: *“No notes yet.”*

### **`show.ejs` (Note Details Page)**

- Displays:
    - **Note title** (filename)
    - **Note content**
- Includes a **Back** link to return to the home page.

### **`edit.ejs` (Edit Page)**

- Displays:
    - The current filename.
    - A form to enter a new filename.
- Hidden field stores the **previous filename** to assist `fs.rename()`.

---

### **📦 Installation & Setup**

```bash
# Clone the repository
git clone github.com/venou/Backend-Domination/tree/main/7_Revisiting_key_Concepts

# Install dependencies
npm install

# Run the app
node index.js

```

Then open 👉 [**http://localhost:3000**](http://localhost:3000/) in your browser.

---

### **🧭 Learning Outcomes**

By building this app, you learn how to:

- Set up a basic Express.js server with routes.
- Work with EJS templates for dynamic content.
- Manipulate the file system for storage.
- Handle forms and POST data in Node.js.
- Style a web app quickly using TailwindCSS CDN.
- Structure a small but complete full-stack app.