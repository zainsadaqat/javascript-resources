# Web Storage

Local Storage is like a small notebook in your browser. It allows you to store data as key-value pairs, so even if the user refreshes or closes the browser, the data remains available until it is manually deleted. Unlike cookies, local storage doesn’t get sent to the server.

a) localStorage.setItem(key, value)
b) localStorage.getItem(key)
c) localStorage.removeItem(key)

## For Example

Imagine a website where users can type their name into a text field, and the website will greet them personally whenever they visit.

```html
<div>
  <h1 id="greeting">Welcome!</h1>
  <input type="text" id="nameInput" placeholder="Enter your name" />
  <button id="saveName">Save Name</button>
</div>
```

```js
const nameInput = document.getElementById("nameInput");
const saveButton = document.getElementById("saveName");

saveButton.addEventListener("click", () => {
  const name = nameInput.value;
  localStorage.setItem("userName", name); // Save the name
  updateGreeting(); // Update the greeting
});
```

```js
const greeting = document.getElementById("greeting");

function updateGreeting() {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    greeting.textContent = `Welcome, ${savedName}!`;
  }
}

// Run this when the page loads
updateGreeting();
```

```html
<button id="resetName">Reset Name</button>
```

```js
const resetButton = document.getElementById("resetName");

resetButton.addEventListener("click", () => {
  localStorage.removeItem("userName"); // Clear the saved name
  greeting.textContent = "Welcome!";
  nameInput.value = ""; // Clear the input field
});
```

#### Local storage saves everything as strings. Use JSON.stringify and JSON.parse for objects.

```js
const user = { name: "Zain", age: 25 };
localStorage.setItem("userInfo", JSON.stringify(user)); // Save object
const retrievedUser = JSON.parse(localStorage.getItem("userInfo")); // Retrieve object
console.log(retrievedUser.name); // Output: Zain
```
