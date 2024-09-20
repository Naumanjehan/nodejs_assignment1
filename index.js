const http = require("http")

const server = http.createServer((req, res) =>{
    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);

    // Set response header to JSON
    res.setHeader('Content-Type', 'application/json');
    if (method === 'GET' && parsedUrl.pathname === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'GET request - Fetching on Home page' }));
    }else if(method === 'GET' && parsedUrl.pathname === '/about'){
        res.statusCode = 200;
        res.end(JSON.stringify({message : 'GET request - Fetching on Home page'}))
    }
     else if(method === 'GET' && parsedUrl.pathname === '/contact'){
        res.statusCode = 200;
        res.end(JSON.stringify({message : 'GET request - Fetching on Contact page'}))
    }
})

server.listen(3000, ()=>{
    console.log("server run on 3000 port")
})