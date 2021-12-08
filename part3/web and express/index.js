const express = require("express");
const app = express();
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes); // In express we no longer have to transform data into JSON format with JSON.stringify because this transformation happens automatically.
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running  on port ${PORT}`);
});

// Ended lesson  at We can execute different operations on resources. The operation to be executed is defined by the HTTP verb: