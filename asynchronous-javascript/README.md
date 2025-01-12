# Asynchronous JavaScript

Asynchronous JavaScript allows you to do multiple tasks at the same time without blocking the main program.

For Example: Imagine you're at a coffee shop

- You order coffee (a task)
- The barista starts making your coffee, but instead of waiting for it, you move to a table and start reading a book (doing another task).
- When the coffee is ready, the barista calls you, and you collect it.

In this scenario:

- Ordering coffee is like making a request in your program.
- Reading a book while waiting is like running other code while the asynchronous task is being processed.
- Getting the coffee when ready is like handling the result of the asynchronous task.

In JavaScript, asynchronous programming is useful because:

It prevents the program from getting "stuck" while waiting for tasks like fetching data from a server or reading a file.
The browser stays responsive, which means the user can continue interacting with the webpage.

## Key Concepts in Asynchronous JavaScript

- Callbacks
- Promises
- Async/Await

### Callbacks

A callback is a function passed as an argument to another function, to be executed later.

```js
const myOrder = (order, callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};

myOrder("Peri Peri Pizza", () => {
  console.log("Your order is ready!");
});
```
