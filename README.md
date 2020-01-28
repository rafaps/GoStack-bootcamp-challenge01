<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge 01 - NodeJS
</h3>


## :rocket: About the Challenge:

Create an application from zero, using [Express](https://expressjs.com/) to store projects and its tasks.

### Routes


- `GET /projects`: List all the projects and tasks;

- `POST /projects`: Create a new project inside a array, it is given the params `id`(request query) and `title`(request body) and then store following this pattern: `{ id: "1", title: 'New Project', tasks: [] }`; Make sure to store both ID and Title as strings and wrapped with double quotation marks.

- `PUT /projects/:id`: Update projects's title according with the `id` given in the route params;

- `DELETE /projects/:id`: Delete the project which `id` is given in the route params;

- `POST /projects/:id/tasks`: Create a new task inside an existing project which is given its `id`. That tasks has to contain `title` field;


### Case

If `POST /projects` is called and it is given `{ id: 1, title: 'New Project' }` and route `POST /projects/1/tasks` with `{ title: 'New Task' }`, the array should be like this: 

```js
[
  {
    id: "1",
    title: "New Project",
    tasks: ["New Task"]
  }
];
```

### Middlewares

- Create a middleware that will be applied for all the routes that get an ID as URL params and then check if that ID is already existent. If it does not exist, should return a error otherwise it allows the request to keep going.

- Create a global middleware that will be applied for all the routes and it logs (`console.log`) how many requests were made.

### How to test


- Clone this repository or download the files
- Must use a software to make HTTP requests, like [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/)
- Use the command "Yarn install" to install all the dependencies(Check package.json)
- Use the command "Yarn dev" to start the server

