const express = require('express')
const nunjuckes = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.set("view engine","njk")

nunjuckes.configure("views",{
    express:server
})

server.get('/',function(req,res) {
    return res.render('about')          // pagina inicial
})
server.get('/courses',function(req,res){
    return res.render('courses')        // pagina cursos
})
server.use(function(req,res){
    res.status(404).render('not-found') //pagina não encontrada
})

server.listen(5000, function(){
    console.log('server is running')
})