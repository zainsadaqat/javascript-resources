# DOM Manipulation

When your browser loads a web page, it creates a structured representation of that page in memory, called the DOM. This allows us to access, modify, or delete elements in the HTML document using JavaScript.

Think of the DOM as a bridge between your HTML and JavaScript.

Manipulating the DOM lets you make your website dynamic and interactive. Instead of a static webpage, users can:

Click a button to reveal hidden content.
Submit a form and see a live confirmation message.
Load data dynamically without refreshing the page (e.g., infinite scrolling).

## Key DOM Concepts

- Elements: The HTML tags (`<div>` `<button>` etc.) you see in your webpage.
- Nodes: Everything in the HTML document (elements, text, comments, etc.).
- Properties and Methods: Ways to read or modify the elements.

## Getting Started with DOM Manipulation

### Accessing Elements

Before you can manipulate an element, you need to access it. Here are some common methods:

Finds an element by its id

- `document.getElementById()`

Finds the first element matching a CSS selector

- `document.querySelector()`

Finds all elements matching a CSS selector.

- `document.querySelectorAll()`

### Modifying Elements

Once you have the element, you can modify it!

#### Change Text Content

`.textContent = 'Hello, World!';`

> For Example: Change the heading of a webpage dynamically when a user clicks a button.

#### Change HTML Content

`.innerHTML = '<p>New paragraph added!</p>';`

> For Example: Replace or add new sections to your website dynamically.

#### Change Styles

`.style.backgroundColor = 'blue';`

> For Example: Highlight a button when the user hovers over it or clicks it.

### Adding and Removing Classes

Add a class
`.classList.add('highlight');`

Remove a class
`.classList.remove('highlight');`

Toggle a class
`.classList.toggle('highlight');`

### Responding to User Actions

To make your webpage interactive, you need to respond to user actions using event listeners.

#### Add an Event Listener

`.addEventListener('click', () => {
    alert('Button clicked!');
});`

#### Remove an Event Listener

`.removeEventListener('click', logMessage);`

### For Example: To-do List

`html

<div>
   <input id="taskInput" type="text" placeholder="Enter a task" />
   <button id="addTaskButton">Add Task</button>
</div>

<ul id="taskList"></ul>
`

`js

<!-- Select the required elements -->

const inputField = document.querySelector('#taskInput');
const submitButton = document.querySelector('#addTaskButton');
const taskListContainer = document.querySelector('#taskList');

<!-- Apply Click Event Listener on Submit Button -->

submitButton.addEventListener("click", () => {
const listItem = document.createElement("li");
listItem.textContent = inputField.value;

    taskListContainer.append(listItem);

    inputField.value = "";

})
`

### Advance DOM Manipulation

#### Event Delegation

When building a dynamic webpage, you may need to handle events for multiple elements, even ones that don't exist when the page loads. For this, we use event delegation.

Event delegation is a technique where you add an event listener to a parent element instead of multiple child elements. This works because events in the DOM bubble up from the target element to its ancestors.

For Example: Let’s say you have a list of items, and clicking on any item should log its text. New items might also be added dynamically.

`html

<ul id="itemList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<button id="addItem">Add Item</button>
`

`js
// Access parent element
const itemList = document.getElementById('itemList');

// Add event listener to the parent
itemList.addEventListener('click', (event) => {
if (event.target.tagName === 'LI') { // Check if the clicked element is a list item
console.log(`You clicked: ${event.target.textContent}`);
}
});

// Add new items dynamically
const addItemButton = document.getElementById('addItem');
let itemCount = 3;
addItemButton.addEventListener('click', () => {
itemCount++;
const newItem = document.createElement('li');
newItem.textContent = `Item ${itemCount}`;
itemList.appendChild(newItem);
});
`
