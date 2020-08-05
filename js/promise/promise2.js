// var promise1 =new Promise(function(resolve,reject){
//     resolve('promise1')
// })
// var promise2 =new Promise(function(resolve,reject){
//     resolve('promise2')
// })
// promise1.then(function(val){
//     return val
// }).then(function(val){
//     console.log(val)
// })
//return val
//return promise2
// const promise = function (time) {
//     return new Promise(function (resolve, reject) {
//         return setTimeout(resolve(time), time);
//     })
// }
// Promise.race([promise(1000),promise(3000)]).then(function(value){
//     console.log('race',value)
// })
// Promise.all([promise(1000), promise(3000)]).then(function (values) {
//     console.log('all', values.toString()) // 三个都成功则成功  输出 all 1000,3000
// },function(e){
//     console.log(e) // 只要有失败，则失败 
// })
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('success')
//     }, 1000)
//   })
//   const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
//   })
  
//   console.log('promise1', promise1)
//   console.log('promise2', promise2)
  
//   setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
//   }, 2000)
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('once')
//       resolve('success')
//     }, 1000)
//   })
  
//   const start = Date.now()
//   promise.then((res) => {
//     console.log(res, Date.now() - start)
//   })
//   promise.then((res) => {
//     console.log(res, Date.now() - start)
//   })
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)