const path=require('path')

//把路径转换为当前系统的合法路径,支持..（上层目录）等fs用法
const resolvePath=path.resolve('..','a','b','c') //*合法拼接成一个绝对路径,D:\std_demo\node\a\b\c
const joinPath=path.join('a','b','c','..') //直接合法拼接起来,a\b\c
console.log(resolvePath)
console.log(joinPath)
console.log(__dirname) //到文件夹层
console.log(__filename)//到文件层
console.log(path.extname(__filename)) //后缀名
console.log(path.dirname(__filename)) //文件夹名
console.log(path.basename(__filename)) //文件名