const path = require('path')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

const { User } =require('./sequelize')

// app.use(function(req,res,next){
//     console.log('la--------')
//     req.text='hello la'
//     //res.send('hello app.use')
//     next()
//     console.log('end--------')
// })

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.listen(8888,function(){
    console.log('server start')
}) 