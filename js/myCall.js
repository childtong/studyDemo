var name='window'
function foo(age){
    console.log(this.name+age)
}
var fooName={
    name:'fooName'
}
//ES6
Function.prototype.myCall=function(context){
    var context=context || window
    var args=[...arguments].slice(1)
    var fn = Symbol();
    context[fn]=this
    var result=context[fn](...args)
    delete context[fn]
    return result
}
//ES3
// Function.prototype.myCall=function(context){
//     var context=context || window
//     var args=[]
//     for(var i=1;i<arguments.length;i++){
//         args.push(arguments[i])
//     }
//     context.fn=this
//     var result=eval('context[fn]('+args+')')
//     delete context.fn
//     return result
// }
foo.myCall(fooName,'24')