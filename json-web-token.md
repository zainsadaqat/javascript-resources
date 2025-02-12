# JSON Web Token (JWT)

## What is JWT?

A JSON Web Token is a compact, URL-safe means of representing claims to be transferred between two parties. It’s often used for authentication. After a successful login, the server issues a JWT, which the client then stores (for example, in localStorage) and sends with every subsequent request to prove that it’s authenticated.

## Structure of JWT

A JWT typically has three parts, separated by dots (.):
	1.	Header: Contains the token type (usually "JWT") and the signing algorithm.
	2.	Payload: Contains the claims, like user ID, roles, expiration time, etc.
	3.	Signature: Used to verify that the token hasn’t been altered.

An example JWT might look like this:
```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiZXhwIjoxNjE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## What Does “Bearer” Mean in the Authorization Header

When you see the term “Bearer” in the context of an HTTP Authorization header, it means that the client is presenting a token (in our case, usually a JWT) as proof of authentication.

The client sends the token in the Authorization header like this

```
Authorization: Bearer <token>
```

This header tells the server, “I am the bearer of this token, please use it to verify my identity.

## Communicating with an API Using a Bearer Token

When your student logs in or registers using the provided API endpoints, the API will likely return a JWT token. The typical flow is:

### Login/Register

The client sends credentials (username, password, etc.) to the API endpoint (e.g., /user-registration or /login).
The server validates the credentials.
On success, the server returns a JWT token in the response (often in JSON).

### Storing the Token
The client can store this token in a place like localStorage or a cookie.

```js
const getJWTToken = async () => {
const response = await fetch('https://api.example.com/login', {
method: "POST",
headers: { 'Content-Type' : 'application/json' },
body: JSON.stringify({ username, password })
});

const data = await response.json();
localStorage.setItem("token", data.token);
return data.token;
}
```

### Using the Token in Subsequent API Calls

When making API calls that require authentication, you include the token in the Authorization header.

```js
// Retrieve the token from localStorage
const token = localStorage.getItem('token');

fetch('https://api.example.com/create-post', {
method: "POST",
headers: { 
'Content-Type': 'application/json', 
'Authorization': `Bearer ${token}`
},
body: JSON.stringify({ title, content })
});
```

In the code above:
We retrieve the token from localStorage.
We then include it in the Authorization header with the word Bearer followed by a space and then the token.
The server will check this token to see if it is valid and determine if the request should be allowed.

