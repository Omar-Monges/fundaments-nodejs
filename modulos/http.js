const route = (req, res) => {
    console.log(`New petition!`)
    console.log(req.url)
    switch (req.url) {
        case '/home':
            res.writeHead(201, {
                'content-type' : 'text/plain'
            })
            res.write(`Welcome at ${req.url}`)
            res.end()
            break;
        default:
            res.writeHead(201, {
                'content' : 'HelloTest'
            })
            res.write(`Hi you are at the ${req.url}`)
            res.end()
            break;
    }
}

const http = require('http')
console.log("Create Server...")
http.createServer(route).listen(3000)