const http = require("http")

const server = http.createServer((req, res) =>{
    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);

    // Set response header to JSON
    res.setHeader('Content-Type', 'application/json');
})

server.listen(3000, ()=>{
    console.log("server run on 3000 port")
})