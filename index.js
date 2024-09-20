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
    else if (method === 'POST' && parsedUrl.pathname === '/api/items') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newItem = JSON.parse(body);
            res.statusCode = 201;   
            res.end(JSON.stringify({ message: `POST request -- Adding new item`, data: newItem }));
        });

    }
      // PUT Request
      else if (method === 'PUT' && parsedUrl.pathname.startsWith('/api/items/')) {
        let body = '';
        const itemId = parsedUrl.pathname.split('/').pop();
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            res.statusCode = 200;
            res.end(JSON.stringify({ message: `PUT request -- Updating item ${itemId}`, data: updatedItem }));
        });

    // DELETE Request
    }
})

server.listen(3000, ()=>{
    console.log("server run on 3000 port")
})