const fs=require('fs')
const path=require('path')
const pathToFile=path.resolve(__dirname,'./text') //一定要用绝对路径
// //异步读取
// fs.readFile(pathToFile,'utf-8',function(err,result){
//     if(err){
//         console.log('error',err) //error first
//         return err
//     }
//     console.log('result',result)
// })
// //同步读取，阻塞
// const content=fs.readFileSync(pathToFile,'utf-8')
// console.log('content',content)

//promise 化一个函数
function promisify(func){
    return function(...args){
        return new Promise((resolve,reject)=>{
            args.push(function(err,result){
                if(err) return reject(err)
                return resolve(result)
            })
            return func.apply(func,args)
        })
    }
}
const readFileAsync = promisify(fs.readFile)
readFileAsync(pathToFile,'utf-8')
.then(content=>{
    console.log(content)
})
.catch(e=>{
    console.log('e',e)
})