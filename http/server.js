const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(req.url);

  switch (url) {
    case "/": {
      responseHTML(res, path.resolve("./index.html"));
      break;
    }
    default: {
      responseHTML(res, path.resolve("./404.html"));
      break;
    }
  }
});

const PORT = 8001;

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function responseHTML(res, htmlFilePath) {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.write(fs.readFileSync(htmlFilePath));
  res.end();
}
