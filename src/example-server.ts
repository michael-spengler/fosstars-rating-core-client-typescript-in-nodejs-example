const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello Worlds");
});

const port = 3000

app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`);
});