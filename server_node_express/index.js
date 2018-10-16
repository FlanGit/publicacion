

/* SERVIDOR ESTATICO A BASE DE NODE */


const express = require('express')
const path = require('path')
const app = express()

const port = 3000
const public = 'public'

 app.use((req,res, next)=>{
    console.log(`recibida peticion:${req.url}`)
    console.log(__dirname)
    next()
}) 

app.use(express.static(path.join(__dirname, public)))

/* app.get('/', (req, res)=>{
    res.send(`
        <h1> 
            El servidor EXPRESS de Francisco dice "Hola Express" 
        </h1>`)
})

app.get('/pepe', (req, res)=>{
    res.send(`
        <h1> 
            "Hola pepe" 
        </h1>`)
}) */


app.listen(port, ()=>{
    console.log('Servidor ejecutandose en http://localhost:' + port)
})