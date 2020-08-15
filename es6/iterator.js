let iteratorObj={
    cursor:0,
    next(){
        const actions =['吃饭','睡觉','打豆豆'];
        if(this.cursor>7){
            return{
                done:true
            };
        }
        return {
            done:false, 
            value:actions[this.cursor++ % actions.length]
        }
    },

    [Symbol.iterator]:function(){
        return this;
    }
}
for(let item of iteratorObj){
    console.log('item:',item)
}