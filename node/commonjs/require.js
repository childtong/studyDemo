const vm=require('vm')
const fs=require('fs')
const path=require('path')

// const pathToFile=path.resolve(__dirname,'./index.js')
// const content=fs.readFileSync(pathToFile,'utf-8')

// const wrapper =[
//     '(function(require,module,exports){',
//     '})'
// ]
// const wrapperContent =wrapper[0]+content+wrapper[1]
// const script=new vm.Script(wrapperContent,{
//     filename:'index.js'
// })
// const result=script.runInThisContext();//把字符串转换为可执行的代码
// //result()

function r(filename){
    const pathToFile=path.resolve(__dirname,filename)
    const content=fs.readFileSync(pathToFile,'utf-8')
    
    const wrapper =[
        '(function(require,module,exports){',
        '})'
    ]
    const wrapperContent =wrapper[0]+content+wrapper[1]
    const script=new vm.Script(wrapperContent,{
        filename:'index.js'
    })
    const module={
        exports:{}
    }
    const result=script.runInThisContext();
    result(r,module,module.exports)
    return module.exports
}
global.r=r