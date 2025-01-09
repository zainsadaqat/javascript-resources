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

- document.getElementById() // Finds an element by its id.
- document.querySelector() // Finds the first element matching a CSS selector.
- document.querySelectorAll() // Finds all elements matching a CSS selector.

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
