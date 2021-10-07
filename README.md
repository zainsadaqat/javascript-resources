# JavaScript Concepts ( Revise your JavaScript concepts )

> If you're already familiar with JavaScript and want to revise JavaScript concepts then this repository is for you. We're using modern javascript (ES6) syntax. Kindly open an Issue if you notice anything **wrong** or **Incorrect**. If it helps you then please don't forget to give it a **STAR** ⭐️ and **SHARE** it with your close friends. 

## The Three Dots (...) Difference between Spread and Rest Operator 

### Spread Operator

`const spreadOperator = (a, b, c) => a + b + c; // 2 + 4 + 6 = 12`

`const myArray = [2,4,6,1,9];`

`console.log(spreadOperator(...myArray));  // spreadOperator(2,4,6,1,9);`



### Rest Operator

`const restOperator = (...args) => {`

`// args [2,4,6,1,9]`

`let sum = 0;`

`args.forEach(arg => {`

 `  sum += arg; // 2 + 4 + 6 + 1 + 9 = 22`
   
`})`

`return sum; // 22`

`}`


`console.log(restOperator(2,4,6,1,9));`
