import http from 'http';

let server = http.createServer((req, resp) => {
    resp.end("Hello! Good Morning To All");
});

server.listen(8000, '127.0.0.1', (err) => {
    if (err) throw err;
    console.log("Server Running..........");
});
