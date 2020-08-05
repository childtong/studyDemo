var name = 'window'
function foo(age, num) {
    console.log(this.name + age + num)
}
var fooName = {
    name: 'fooName'
}
//ES6
Function.prototype.myCall = function (context) {
    var context = context || window
    var args = [...arguments].slice(1)
    var fn = Symbol();
    context[fn] = this
    var result = context[fn](...args)
    delete context[fn]
    return result
}
Function.prototype.myBind = function (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var self = this
    var args1 = [...arguments].slice(1)
    var fn = function () { };
    var newContext = function () {
        var args2 = [...arguments]
        return self.myCall(this instanceof fn ? this : context, ...args1, ...args2);
    }
    if (this.prototype) {
        fn.prototype = this.prototype
    }
    newContext.prototype = new fn();
    return newContext;
}
foo.myBind(fooName)('12', '14')