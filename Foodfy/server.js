const express = require('express')
const nunjuckes = require('nunjucks')

const recipes = require('./public/data.js')

const server = express()

server.use(express.static('public'))
server.set("view engine","njk")

nunjuckes.configure("views",{
    express:server,
    noCache:true,
    autoescape:true,
    watch:true      //restarta quando altera arquivo njk
})

server.get('/', function(req,res){
    return res.render('index', {recipes})      //pagina home
})
server.get('/about', function(req,res){
    return res.render('about')      //pagina sobre
})
server.get('/recipe', function(req,res){
    return res.render('recipe',{recipes})     //pagina das receitas
})

server.listen(5000, function(){
    console.log("server is running")
})