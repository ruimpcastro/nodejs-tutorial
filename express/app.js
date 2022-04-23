const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  //home
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log("user hit the server ");
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    //styles
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyles);
    res.end();
    //image
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 page</h1>");
    res.end();
  }
});

server.listen(3000);
