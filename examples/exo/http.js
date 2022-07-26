const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.url);
    if (req.url === '/voiture') {
        res.end("voiture");
    }
    res.end("hello world");
});

server.listen(3666, "localhost", () => {
    console.log(`server listening on http://localhost:3666`);
});