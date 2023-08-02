[![N|Solid](https://iili.io/Hi9giog.png)](https://www.enverx.com/)

EnverX offers a simple and convenient platform to fund early-stage projects
and trade future carbon credits.

# enverx Project Documentation

## Setting up the project

- Clone the repo.
- Switch to the development branch.
- Run `npm i` to install all the required dependencies.
- Create an`.env` file at the root of the project and add variables below.

```
DATABASE_URL="postgresql://postgres:h7EfL79jlEsCs7GNSxkK@containers-us-west-42.railway.app:6253/railway?schema=EnverX-Assignment"
ENVIRONMENT = "DEVELOPMENT"
PORT = 3000
```

## Running the project

- **Development mode**: run `npm run dev` to start the project in development mode.
- **Production mode**: run `npm start` to create and run the build version of the project.
- Refer to `package.json` to view custom scripts.

## API Routes

- http://localhost:3000
  - `/api` (this is the root path for all APIs, as APIs should contain a prefix called `api/` )
    - [GET] `/posts`: returns posts in sorted order of creation date
    - [GET] `/posts/:id`: returns post with the specified `id`; otherwise, it will return error 404.
    - [POST] `/post`: takes `name`, `body` and `category` in the request body and returns the created post.
      ```jsx
      // Example request body
      {
          "title": "Title of Blog",
          "body": "Description for Title",
      }
      ```
    - [PUT] `/post/:id`: takes post `id` in params and data to be updated in the body of the request and returns the updated post.
      ```jsx
      //request URL
      http://localhost:3000/api/posts/:id

      //Example request body
      {
          "title": "Updated Title of Blog",
      }
      ```
    - [DELETE] `post/:id`: takes post id in request parameter and returns deleted post object.

## Additional Features and Improvements

- Added type safety on the route level using `generics` on each route’s path.
- Created an error handler combining the `http-errors` module and error handler middleware to handle custom-generated errors and unexpected exceptions such as error 500.
