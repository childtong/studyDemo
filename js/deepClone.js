let obj = {
    name: 'tong',
    book: { title: 'You Don\'t Know JS', price: '45' },
    a1: undefined,
    a2: null,
    a3: 123
}

function shallowClone(obj) {
    let result = Array.isArray(obj) ? [] : {}
    Object.keys(obj).forEach(element => {
        result[element] = obj[element]
    });
    return result;
}
//ES6
function isObject(obj) { //判断obj是不是一个对象，且当obj为null时原样返回而不是返回｛｝
    return typeof obj === 'object' && obj != null;
}
function deepClone(obj, hash = new WeakMap()) {  //hash用于解决循环引用
    if (!isObject(obj)) return obj;
    if (hash.has(obj)) return hash.get(obj); // 查hash，如果当前obj已经存在则直接取拷贝过的值
    let result = Array.isArray(obj) ? [] : {} //对数组和对象进行区分
    hash.set(obj, result) //obj不存在时存入hash
    Object.keys(obj).forEach(element => { //遍历obj的key进行拷贝
            if (isObject(obj[element])) {
                result[element] = deepClone(obj[element], hash) //当key对应值仍为对象时，递归拷贝
            } else {
                result[element] = obj[element] //为基本数据类型则直接拷贝
            }
    });
    return result;
}
//for..in Reflect.ownKeys() 这种方式的问题在于不能深拷贝原型链上的数据，因为返回的是目标对象自身的属性键组成的数组。
// 方法一：Object.getOwnPropertySymbols(...)
// 方法二：Reflect.ownKeys(...)==>Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))
// Reflect.ownKeys(obj).forEach(key => { // 改动 Symbol()
//     if (isObject(obj[key])) {
//         target[key] = cloneDeep4(obj[key], hash); 
//     } else {
//         target[key] = source[key];
//     }  
// });
//ES5
function cloneDeep3(source, uniqueList) {

    if (!isObject(source)) return source;
    if (!uniqueList) uniqueList = []; // 新增代码，初始化数组

    var target = Array.isArray(source) ? [] : {};

    // ============= 新增代码
    // 数据已经存在，返回保存的数据
    var uniqueData = find(uniqueList, source);
    if (uniqueData) {
        return uniqueData.target;
    };

    // 数据不存在，保存源数据，以及对应的引用
    uniqueList.push({
        source: source,
        target: target
    });
    // =============

    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = cloneDeep3(source[key], uniqueList); // 新增代码，传入数组
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

// 新增方法，用于查找
function find(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
            return arr[i];
        }
        // console.log(arr[i])
    }
    return null;
}
let result = deepClone(obj)
obj.book.title = 'aaa'
console.log(result)