const { resolve } = require("path");

//1
new Promise((resolve)=>{
    console.log('promise')
    setTimeout(()=>{
        console.log('setTimeout')
        resolve()
    },0)
}).then(()=>{
    console.log('then')
})