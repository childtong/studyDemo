const net = require('net');
const fs = require('fs');
const path = require('path');

const server = net.createServer((socket) => {
  socket.on('data', (request) => {
    const req = request.toString('utf-8');
    // console.log(req);

    const lines = req.split('\r\n');
    const line = lines[0];
    const [method, uri, proto] = line.split(/\s+/);
    // console.log(method, uri, proto);

    switch (uri) {
      case '/': {
        responseHTML(socket, path.resolve('./index.html'));
      }
      default: {
        responseHTML(socket, path.resolve('./404.html'));
      }
    }
  })

  socket.on('error', (e) => {
    // console.error(e);
  })
});

const PORT = 8001;
server.listen(PORT, () => {
  console.log(`Socket server listening on ${PORT}`);
})


function responseHTML(socket, htmlFilePath) {
  const content = fs.readFileSync(htmlFilePath);
  socket.write('HTTP/1.1 200 OK\r\n' +
    'Content-Type: text/html\r\n' +
    `Content-Length: ${content.length}\r\n` +
    '\r\n' +
    content
  )
}
