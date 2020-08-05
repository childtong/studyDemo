function curry(fn,length) {
    var arity = length; // 函数需要的参数个数
    var argLength = 0;
    var sum=0
    return function pre(arg) {
        [...arguments].forEach(element => {
            argLength++
            sum=fn.call(this,sum,element)
        });
        if (argLength === arity) { // 检查当前函数是否已满足需要
            return sum
        } else {
            return pre;
        }
    }
}
function getSum(x, y) {
    return x + y
}

let add = curry(getSum, 4)
let result=add(6,4)(5)(9)
console.log(result)// 11


