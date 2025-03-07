# JavaScript Concepts - Revise your JavaScript concepts  
 
> If you're already familiar with JavaScript and want to revise JavaScript concepts then this repository can be helpful for you. We're using modern javascript (ES6) syntax. Kindly open an Issue if you notice anything **wrong** or **Incorrect**.  

> If it helps you then don't forget to give it a **STAR** ⭐️ and **SHARE** it with your JavaScript friends. 

## The Three Dots (...) Difference between Spread and Rest Operator 

### Spread Operator

`const spreadOperator = (a, b, c) => a + b + c; // 2 + 4 + 6 = 12`

`const myArray = [2,4,6,1,9];`

`console.log(spreadOperator(...myArray));  // spreadOperator(2,4,6,1,9);`

<img width="429" alt="Screenshot 2022-11-20 at 12 33 56 AM" src="https://user-images.githubusercontent.com/83048208/202868283-f35e9dc2-471b-4400-be7d-a94ad3503a8e.png">




### Rest Operator

`const restOperator = (a, b, ...args) => {`

`// args [6,1,9]`

`let sum = 0;`

`args.forEach(arg => {`

 `  sum += arg; // 6 + 1 + 9 = 16`
   
`})`

`let product = a * b // 2 * 4 = 8`

`return [product, sum]; // [8, 16]`

`}`

`console.log(restOperator(2,4,6,1,9));`

## Asynchronous JavaScript

### Callbacks

```
setTimeout(() => {
 console.log("3");
 setTimeout(() => {
  console.log("2");
  setTimeout(() => {
   console.log("1");
  }, 1000)
 }, 1000)
}, 1000)
```

### Promises

```
const myPromise = new Promise((resolve, reject) => {
const randValue = Math.floor(Math.rand() * 2);
if(randValue === 0) resolve();
else reject();
})

myPromise.then(() => console.log("Success")).catch(() => console.log("Fail"));
```

### Async Await

```
const myFunction = async () => {
try {
 const response = await fetch();
 const data = await response.data;
} catch(error) {
 console.error(error);
 }
} 
```

## Syntax Parser
_Your code isn't magic. Someone else wrote a program to translate it for the computer_
> A program that reads your code and determines what it does and its grammar is valid.

## Lexical Environment
_where something sits physically in the code you write_
> `Lexical` means having to do with words or grammar. A lexical environment exists in programming language in which where you write something is important.

## Execution Context
_A wrapper to help manage the code that is running_ 
> There're a lot of lexical environments. Which one currently running is managed via execution contexts. It can contain things beyond what you've written in your code.

## Conceptual Aside
_Name/Value Pairs and Objects_
> **Name Value Pair:** A name which maps to a unique value.
The name may be defined more than once, but only can have one value in any given context. That value may be more name/value pairs.

> **Object:** A collection of name value pairs. 
