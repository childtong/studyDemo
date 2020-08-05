const path = require('path')
const fs = require('fs')
const express = require('express')

const app = express()

app.use(function(req,res,next){
    console.log('la--------')
    req.text='hello la'
    //res.send('hello app.use')
    next()
    console.log('end--------')
})

app.get('/',function(req,res){
    res.send('hello world')
})

app.listen(8888,function(){
    console.log('server start')
}) 