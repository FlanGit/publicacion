
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

const port = 3000
const public = 'public'

app.use(cors())

 app.use((req,res, next)=>{
    console.log(`recibida peticion:${req.url}`)
    next()
}) 

app.use(express.static(path.join(__dirname, public)))

 app.get('/api/users', (req, res)=>{
     let aDatos= {results:[]}
     console.log(aDatos)
    res.json(aDatos)
})

app.listen(port, ()=>{
    console.log('Servidor ejecutandose en http://localhost:' + port)
})