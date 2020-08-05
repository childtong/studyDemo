class Promise{
    constructor(handleFunc){
        this.status ="pending"
        this.value = undefined
        this.fulfilledList=[]
        this.rejectedList=[]

        handleFunc(this.triggerResolve.bind(this),this.triggerReject.bind(this))
    }

    triggerResolve(val){
        //当前pending变为resolved，继续执行
        setTimeout(()=>{
            if(this.status!='pending') return
            
            if(val instanceof Promise){
                val.then(
                    value=>{},
                    err=>{}
                )
            }else{
                //普通值
                this.status='fulfilled'
                this.value=val
                this.tiggerFulfilled(val)
            }
        },0)
    }
    tiggerFulfilled(val){
        this.fulfilledList.forEach(item=>item(val))
        this.fulfilledList=[]
    }

    triggerReject(){
        
    }
    then(onFulfilled,onRejected){
        const {value,status} =this
        return new Promise((onNextFulfilled,onNextRejected)=>{
            function onFinalFulfilled(val){
                if(typeof onFulfilled!='function'){
                    onNextFulfilled(val)
                }
                else{
                    const res=onFulfilled(val)
                    if(res instanceof Promise){
                        res.then(onNextFulfilled, onNextRejected)
                    }else{
                        onNextFulfilled(res)
                    }
            }
            }
            switch(status){
                case 'pending':{
                    this.fulfilledList.push(onFinalFulfilled)
                    this.rejectedList.push(onRejected)
                    break
                }
                case 'fulfilled':{
                    onFinalFulfilled(value)
                    break
                }
                    
            }
        
        })
    }
    catch(){}

    static resolve(value){
        if(value instanceof Promise) return value
        return new Promise(resolve=>resolve(value))
    }
    static reject(error){
        if(value instanceof Promise) return error
        return new Promise(reject=>reject(error))
    }
    static all(list){
        return new Promise((resolve,reject)=>{
            let count=0
            const values=[]
            list.forEach((promiseInstance,i)=>{
                promiseInstance.then(res=>{
                    values[i]=res
                    count++
                    if(count==list.length) resolve(values)
                },err=>{
                    reject(err)
                })
            })
            // for(const[i,promiseInstance] of list.entries()){
            //     this.resolve(promiseInstance).then(res=>{
            //         values[i]=res
            //         count++
            //         if(count==list.length) resolve(values)
            //     },err=>{
            //         reject(err)
            //     })
            // }
        })
    }
    static race(list){
        return new Promise((resolve,reject)=>{
            list.forEach((promiseInstance)=>{
                promiseInstance.then(res=>{resolve(res)},err=>{reject(err)})
            })
            
        }) 
    }
}
// const promise=new Promise(function(resolve,reject){
//     resolve('hello')
// })
// promise.then(function(){
//     console.log('promise')
// }).then(function(){
//     console.log('promise next')
// })
const promise=function(time){
    return new Promise(function(resolve,reject){
            return setTimeout(resolve, time);
        })
}
// Promise.all([promise(1000),promise(2000)]).then(function(){
//     console.log('all')
// })
Promise.race([promise(3000),promise(5000)]).then(function(){
    console.log('all')
})