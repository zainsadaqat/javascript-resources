# Functions

## 📌 What is a Function in JavaScript

A function is a block of code designed to perform a specific task. Instead of writing the same code multiple times, we put it inside a function and reuse it whenever needed.

### 💡 Real-World Example

Think of a function like a coffee machine. ☕

🔹 You press a button (call the function)
🔹 The machine makes coffee (executes the code)
🔹 You get a cup of coffee (returns a value)

Similarly, a JavaScript function runs code and can return a result.

## 📌 Declaring (Creating) a Function

```js
function greet() {
  console.log("Hello, welcome to JavaScript!");
}
```

### How to call (execute) the function

```js
greet(); // Output: Hello, welcome to JavaScript!
```

### 💡 Real-World Example

Imagine a "Welcome" system in a website:

```js
function welcomeUser(name) {
  console.log("Welcome, " + name + "!");
}
welcomeUser("John"); // Output: Welcome, John!
```

## 📌 Function Parameters & Arguments

Functions can take inputs (parameters) to work with.

```js
function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(5, 3); // Output: 8
```

### 📝 Explanation

- a and b are parameters (like placeholders).
- 5 and 3 are arguments (actual values).
- The function adds the numbers and prints the result.

## 📌 Return Statement

Sometimes, we want a function to return a value instead of just printing it.

```js
function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 5);
console.log(result); // Output: 20
```

### 📝 Why Use return?

return sends the result back to where the function was called.
Now, we can store the result in a variable and use it later.

## 📌 Function Expressions (Anonymous Functions)

```js
In JavaScript, functions can also be stored in variables.

const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(10, 4)); // Output: 6
```

### 📝 Difference from Function Declaration:

- Function doesn’t have a name (it’s anonymous).
- Stored inside a variable, so we call it using subtract(10,4);.

## 📌 Arrow Functions (Modern & Shorter)

Introduced in ES6, arrow functions make code shorter and cleaner.

```js
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // Output: 5
```

### 📝 How It Works?

- Removes function keyword.
- Uses => (arrow) instead.
- If there’s only one line, {} and return can be omitted.
