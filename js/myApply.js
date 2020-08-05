var name='window'
function foo(age,num){
    console.log(this.name+age+num)
}
var fooName={
    name:'fooName'
}
//ES6
Function.prototype.myApply=function(context){
    context=context || window
    var args=arguments[1]||[]
    var fn = Symbol();
    context[fn]=this
    var result=context[fn](...args)
    delete context[fn]
    return result
}
//ES3
// Function.prototype.myApply=function(context){
//     var context=context || window
//     var args=arguments[1]||[]
//     context.fn=this
//     var result=eval('context.fn('+args+')')
//     delete context.fn
//     return result
// }
foo.myApply(fooName)