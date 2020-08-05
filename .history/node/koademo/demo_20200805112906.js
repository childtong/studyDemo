const Koa=require('koa')
const KoaRouter=require('koa-router')

const app=new Koa()
const router=new KoaRouter()

function sleep(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time*1000)
    })
}

app
    .use(router.routes())
    .use(router.allowedMethods())

app.use(async function(ctx,next){
    console.log('start1-----',new Date().getTime())
    await sleep(1).then(next)
    console.log('end1-----',new Date().getTime())
})

app.use(async function(ctx,next){
    console.log('start2-----',new Date().getTime())
    await sleep(1).then(next)
    console.log('end2-----',new Date().getTime())
})

router.get('/',function(ctx,next){
    console.log('hello world')
    ctx.body='hello world'
})

app.listen(8888,function(){
    console.log('server start')
}) 