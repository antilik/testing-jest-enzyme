# Nodejs with Express and authentication

The project was built with NodeJS, Express, Mongoose, Morgan, body-parser, bcryptjs, passport-jwt, jwt-simple.

It is possible to use it as boilerplate for future projects.

## Official documentation

https://expressjs.com/en/4x/api.html
https://mongoosejs.com/docs/guide.html
https://www.npmjs.com/package/jwt-simple
https://www.npmjs.com/package/bcryptjs
http://www.passportjs.org/packages/passport-jwt/
http://www.passportjs.org/packages/passport-local/

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3090](http://localhost:3090) to use it for get/post requests.

### 3 Routes are available

- "/" needs 'authorization' token in header
- "/signin" needs email and password, return "token"
- "/signup" needs email and password, return "token"

The page will reload if you make edits. Nodemon is used for development.
You will also see any lint errors in the console.
