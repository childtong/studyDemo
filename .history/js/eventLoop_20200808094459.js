const { resolve } = require("path");

//1
new Promise((resolve)=>{
    setTimeout(()=>{
        resolve()
    },0)
})