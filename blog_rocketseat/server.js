const express = require('express')
const nunjuckes = require('nunjucks')
const blog = require('./data')

const server = express()

server.use(express.static('public'))
server.set("view engine","njk")

nunjuckes.configure("views",{
    express:server,
    autoescape:false
})

server.get('/',function(req,res) {
    const about ={
        avatar_url:"https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg",
        name:"RocketSeat",
        title:"O que é Rocketseat?",
        description:"O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500",
        technologys:[{
                name:"JavaScript"
            },{
                name:"NodeJS"
            },{
                name:"ReactJS"
            },{
                name:"React Native"
            },{
                name:"ES6"
            }
        ]}
    return res.render('about',{about})          // pagina inicial
})
server.get('/courses',function(req,res){
    return res.render('courses',{posts:blog})        // pagina cursos
})
server.use(function(req,res){
    res.status(404).render('not-found') //pagina não encontrada
})

server.listen(5000, function(){
    console.log('server is running')
})