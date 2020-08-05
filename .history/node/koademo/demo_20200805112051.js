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

router.use(function(ctx,next){
    console.log('start-----')
    next()
    console.log('end-----')
})

router.get('/',function(ctx,next){
    console.log('hello world')
    ctx.body='hello world'
})

app.listen(8888,function(){
    console.log('server start')
}) 