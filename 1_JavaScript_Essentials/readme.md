An **array** is a **list of values stored under a single name**, where each value has an **index** starting from 0.

**Example (JavaScript):**

```jsx
let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); // Output: banana
```

✅ Use it to store and access multiple items easily.

---

`forEach` is a way to **loop through an array** and do something with each item.

### Example:

```jsx
let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
```

**Output:**

```
apple
banana
mango

```

✅ Easy way to **go through each element** without writing a `for` loop.

---

`map` is used to **create a new array** by transforming each element of an existing array.

### Example:

```jsx
let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2);
console.log(doubled);
```

**Output:**

```
[2, 4, 6]
```

---

### **`filter()`**

- **Purpose:** Creates a **new array** with elements that **pass a test** (condition) you define.
- **Does not change** the original array.

**Syntax:**

```jsx
array.filter(callback(element, index, array));
```

- **callback:** Function that returns `true` (keep the element) or `false` (remove it).
- **element:** Current item in the array.
- **index:** (Optional) Current item’s index.
- **array:** (Optional) The original array.

**Example:**

```jsx
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
console.log(numbers); // [1, 2, 3, 4, 5] (original array unchanged)
```

**Key Points:**

- Always returns a **new array**.
- Only keeps elements where the callback returns `true`.
- Can be chained with `map` or `sort`.

---

### **`find()`**

- **Purpose:** Returns the **first element** in an array that **passes a test** (condition).
- **Stops searching once it finds a match.**
- **Does not change** the original array.

**Syntax:**

```jsx
array.find(callback(element, index, array));
```

- **callback:** Function that returns `true` (match found) or `false`.
- **element:** Current item in the array.
- **index:** (Optional) Current item’s index.
- **array:** (Optional) The original array.

**Example:**

```jsx
const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find((num) => num % 2 === 0);

console.log(firstEven); // 2
console.log(numbers); // [1, 2, 3, 4, 5] (original array unchanged)
```

**Key Points:**

- Returns **only one element** (the first that matches).
- If no element matches, returns **undefined**.
- Good for **searching** a single item instead of filtering all.

---

### **`indexOf()`**

- **Purpose:** Finds the **index (position)** of a specific element in an array or string.
- **Returns `1`** if the element is **not found**.

**Syntax (Array):**

```jsx
array.indexOf(element, startIndex);
```

- **element:** The value you are searching for.
- **startIndex:** (Optional) The position to start searching from (default is 0).

**Syntax (String):**

```jsx
string.indexOf(substring, startIndex);
```

**Example (Array):**

```jsx
const fruits = ["apple", "banana", "mango"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("orange")); // -1
```

**Example (String):**

```jsx
const text = "hello world";
console.log(text.indexOf("world")); // 6
console.log(text.indexOf("java")); // -1
```

**Key Points:**

- Works with **arrays** and **strings**.
- Returns the **first occurrence** only.
- Useful for **checking existence**:

```jsx
if (fruits.indexOf("mango") !== -1) {
  console.log("Found mango!");
}
```

---

### **JavaScript Object**

- **Purpose:** Store **key-value pairs** (like a real-world object’s properties).
- Keys are **strings** (or symbols), values can be **any data type**.
- Objects are **unordered**.

**Syntax:**

```jsx
const obj = {
  key1: value1,
  key2: value2,
  key3: value3,
};
```

**Example:**

```jsx
const person = {
  name: "Shiva",
  age: 25,
  isStudent: true,
};

console.log(person.name); // Shiva
console.log(person["age"]); // 25
```

**Adding or Updating a Property:**

```jsx
person.city = "Delhi"; // add
person.age = 26; // update
```

**Deleting a Property:**

```jsx
delete person.isStudent;
```

**Common Object Methods:**

- `Object.keys(obj)` → returns array of keys
- `Object.values(obj)` → returns array of values
- `Object.entries(obj)` → returns array of `[key, value]` pairs

**Example:**

```jsx
console.log(Object.keys(person)); // ["name", "age", "city"]
console.log(Object.values(person)); // ["Shiva", 26, "Delhi"]
console.log(Object.entries(person)); // [["name","Shiva"],["age",26],["city","Delhi"]]
```

**Key Points:**

- Very flexible for storing **structured data**.
- Use **dot notation** (`obj.key`) or **bracket notation** (`obj["key"]`).
- Can be nested (objects inside objects).

---

**Function Returns in JavaScript**

---

### **Function Returns**

- **Purpose:** A function can **send back a value** after execution using `return`.
- Once `return` runs, the function **stops immediately**.

**Syntax:**

```jsx
function functionName(parameters) {
  // code
  return value; // sends value back
}
```

**Example 1: Returning a number**

```jsx
function add(a, b) {
  return a + b;
}

const sum = add(3, 5);
console.log(sum); // 8
```

**Example 2: Returning a string**

```jsx
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Shiva")); // Hello Shiva
```

**Example 3: No return**

```jsx
function sayHi() {
  console.log("Hi");
}

const result = sayHi();
console.log(result); // undefined
```

**Key Points:**

- `return` sends the value back to where the function was called.
- Without `return`, the function returns `undefined`.
- Can return **any data type**: numbers, strings, booleans, arrays, objects, functions, etc.
- Stops function execution immediately.

---

### **JavaScript Async/Await Example: Fetch API**

### **Code**

```jsx
async function abcd() {
  let blob = await fetch("https://randomuser.me/api/");
  let data = await blob.json();
  console.log(data);
}

abcd();
```

### **Explanation**

1. **`async function abcd()`**
   - Declares an **asynchronous function**.
   - Allows using `await` inside to pause until a Promise resolves.
2. **`let blob = await fetch('https://randomuser.me/api/')`**
   - `fetch()` sends a network request → returns a **Promise**.
   - `await` **waits for the response** and stores it in `blob`.
3. **`let data = await blob.json()`**
   - `.json()` reads the response body as JSON → returns a **Promise**.
   - `await` **waits for the JSON data** and stores it in `data`.
4. **`console.log(data)`**
   - Prints the fetched JSON data to the console.
5. **`abcd()`**
   - Calls the async function to run the code.

---

### **Key Points**

- **`async`** → function always returns a Promise.
- **`await`** → pauses execution until Promise resolves.
- **`fetch()`** → modern way to make network requests.
- **`.json()`** → converts response into a usable JS object.
- Async/Await makes **asynchronous code look synchronous** → easier to read and maintain.

---
