// Adding Elements to the page
const body = document.body;
// with .append we can append strings and html tags
// with .appendChild we can only append nodes i.e., html tags
body.append("Hello World!");

// Creating HTML Elements
const div = document.createElement("div");

// Modifying Element Text
div.innerText = "This is a div";
div.textContent = "This is a div tooo";
div.innerHTML = "<h1>Zain Sadaqt</h1>";

// At this point, we've created an element but we didn't adding it to the page.
// To add this, we need to perform the following step.
body.append(div);

// get and set html attributes
const heading = document.querySelector("#heading");
console.log("ID: ", heading.getAttribute("id"));

console.log(heading.setAttribute("title", "This is a heading"));
//Or
console.log((heading.id = "heading-changed"));
heading.removeAttribute("title");

// Add and remove css classes in HTML using javascript
heading.classList.add("new-practice-class");
heading.classList.remove("new-practice-class");
heading.classList.toggle("new-practice-class"); // add or hide

// Add CSS styles
heading.style.color = "red";
