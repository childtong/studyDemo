var proxyObj = new Proxy({a:'1'},{
    get(target,key,receiver){
        console.log(key)
    },
    set(target,key,value,receiver){
        console.log(key)
    }
});

var b=proxyObj.a
proxyObj.c='222'

//可撤销对象！！！会清除掉get和set，慎用啊
var {proxy, revoke} = Proxy.revocable({}, {
    get(target, key, receiver) {
        console.log('key:', key);
    },

    set(target, key, value, receiver) {
        console.log('key:', key, value);
    }
});
revoke();