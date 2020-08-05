function objectFactory() {
    //var obj = {}  // 创建一个空对象
    var obj = new Object(),//从Object.prototype上克隆一个对象

    Constructor = [].shift.call(arguments);//取得外部传入的构造器

    obj.__proto__ = Constructor.prototype;

    // var F = function () { };
    // F.prototype = Constructor.prototype;
    // obj = new F();//指向正确的原型

    var ret = Constructor.apply(obj, arguments);//借用外部传入的构造器给obj设置属性

    return typeof ret === 'object' ? ret||obj : obj;//确保构造器总是返回一个对象

};