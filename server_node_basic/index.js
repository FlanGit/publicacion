const http = require('http')
const port = 3000
http.createServer((request, response)=>{
    let htmlResponse = `
        <h1> 
            El servidor node de Francisco dice "Hola Mundo" 
        </h1>
    `
    response.writeHead(200, {'Content-type': 'text/html'} )
    response.end(htmlResponse)
}).listen(port)
console.log('Servidor ejecutandose en http://localhost:' + port)