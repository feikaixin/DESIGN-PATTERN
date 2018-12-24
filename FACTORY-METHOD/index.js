// 安全模式创建的工厂类
/**
 * 这个模式的难点在于理解这个工厂类，可以说设计的很灵性
 */
let Factory = function(type, content) {
  if(this instanceof Factory) {
    var s = new this[type](content);
    return s;
  }else {
    return new Factory(type, content);
  } 
}
// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
  Java: function(content) {
    console.log(content);
    // ...
  },
  JavaScript: function(content) {
    // ...
  },
  UI: function(content) {
    // ...
  },
  php: function(content) {
    // ...
  }
}