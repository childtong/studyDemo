function* gen() { 
    yield 1;
    yield 2;
    yield 3;
  }
  
let g = gen(); //返回一个句柄(handler)

function* demoGenerators() {
    console.log('和面之前');
    var a = yield '和面';
    console.log('和完面了',a);
    var b = yield '蒸';
    console.log('蒸完了');
    var c = yield '切';
}

var handler = demoGenerators();
console.log('handler', handler);
handler.next();
console.log('和面完成');
handler.next();