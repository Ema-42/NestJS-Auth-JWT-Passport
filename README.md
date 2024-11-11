# NestJS Authentication Project

This project demonstrates a NestJS API with authentication using Passport.js and JSON Web Tokens (JWT).

se necesita: 
- npm i --save @nestjs/passport passport passport-local passport-jwt @nestjs/jwt

- npm install --save-dev @types/passport-jwt @types/passport-local

## Objectives
- Implement a secure authentication system for a NestJS API
- Use Passport.js to handle user authentication
- Generate and verify JWT tokens for authorized access
- Protect API routes based on user roles and permissions

## Libraries/Packages Used
- **NestJS**: a progressive Node.js framework for building efficient and scalable server-side applications.
- **Passport.js**: a popular authentication middleware for Node.js, providing a set of strategies support for authentication using a username and password, Facebook, Twitter, and more.
- **passport-jwt**: a Passport.js strategy for authenticating with a JSON Web Token (JWT).
- **bcrypt**: a library to help you hash passwords before storing them in your database.
- **jsonwebtoken**: a library for generating and verifying JSON Web Tokens (JWT).

## Installation
1. Clone the repository:
```
git clone https://github.com/your-username/nestjs-authentication.git
```
2. Install dependencies:
```
cd nestjs-authentication
npm install
```
3. Set up environment variables:
   - Create a `.env` file in the root of your project
   - Add the following variables:
     - `JWT_SECRET`: A secret key used to sign and verify JWT tokens
     - `JWT_EXPIRATION`: The expiration time for JWT tokens (e.g., `3600s` for 1 hour)

## Usage
1. Start the development server:
```
npm run start:dev
```
2. The API will be available at `http://localhost:3000/api`.
3. You can use the following endpoints:
   - `POST /auth/register`: Register a new user
   - `POST /auth/login`: Authenticate a user and obtain a JWT token
   - `GET /protected`: A protected route that requires a valid JWT token

## Documentation
For more detailed information on the implementation and usage of this project, please refer to the [Wiki](https://github.com/your-username/nestjs-authentication/wiki).