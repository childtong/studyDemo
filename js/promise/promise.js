//封装promse
// const callback = function () {
//     console.log('callback')
// }
// function callbackFn(fn) {
//     setTimeout(fn, 3000)
// }
// callbackFn(callback)

// const promise = new Promise(function (resolve, reject) {
//     console.log('success')
//     resolve()
// })
// promise.then(
//     function () {
//         setTimeout(callback, 3000)
//     }
// )

//promise 规范
//reject()
// const promise1 = new Promise(function (resolve, reject) {
//     resolve()
// })
// promise1
//     .then(null, function () {
//         return 456;
//     })
//     .then(null, null)
//     .then(null, null)
//     .then(function () {
//         throw Error('e')
//     }, null)
//     .then(function () {
//         console.log('success promise')
//     }, function () {
//         console.log('error promise')
//     })

// //promise参数

//catch --promise all
Promise.all([request1(), request2()])
    .then(
        console.log('success')
    )
//在catch里面进行操作
Promise.all([request1().catch(err => err), request2()])
    .then(
        console.log('success')
    )