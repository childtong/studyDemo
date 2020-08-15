const path = require('path')
const fs = require('fs')
const express = require('express')
//const bodyParser = require('body-parser')
const app = express()
//app.use(bodyParser.json())

app.use(function(req,res,next){
    console.log('la--------')
    req.text='hello la'
    //res.send('hello app.use')
    next()
    console.log('end--------')
})

app.get('/',function(req,res){
    res.send('hello world')
    //const filepath = path.resolve(__dirname,'./index.html')
    //1.流式处理，性能更高 res.sendFile(filepath)
    //2.可能会对其他操作产生阻塞 const content = fs.readFileSync(filepath,'utf-8')
    //res.send(content)
    //3.模版字符串 const text = `hello ${new Date().getTime()}`
    // res.send(text)

    //console.log(req.query,req.headers)
})

app.listen(8888,function(){
    console.log('server start')
}) 