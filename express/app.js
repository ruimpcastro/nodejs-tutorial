const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("User hit the resource");
  res.status(200).send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
