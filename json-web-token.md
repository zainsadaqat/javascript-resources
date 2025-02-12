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

