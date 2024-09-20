const http = require("http")

const server = http.createServer((req, res) =>{
    res.end("helloo")
})

server.listen(3000, ()=>{
    console.log("server run on 3000 port")
})