/**
 * @desc 抽象工厂模式
 * @param {Function} subType 
 * @param {String} superType 
 */
var VehicleFactory = function(subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if(typeof VehicleFactory[superType] === 'function') {
    // 缓存类
    function F() {};
    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]();
    // 将子类constructor指向子类
    subType.constructor = subType;
    // 子类原型继承'父类'
    subType.prototype = new F();
  } else {
    throw new Error('未创建该抽象类');
  }
}
// 小汽车抽象类
VehicleFactory.Car = function() {
  this.type = 'car';
};
VehicleFactory.Car.prototype = {
  getPrice: function(){
    return new Error('抽象方法不能调用');
  },
  getSpeed: function() {
    return new Error('抽象方法不能调用');
  }
}
// 公交车抽象类
VehicleFactory.Bus = function() {
  this.type = 'bus';
};
VehicleFactory.Bus.prototype = {
  getPrice: function(){
    return new Error('抽象方法不能调用');
  },
  getSpeed: function() {
    return new Error('抽象方法不能调用');
  }
}
// 抽象与实现
// 宝马汽车子类
var BMW = function (price, speed) { 
  this.price = price;
  this.speed = speed;
}
// 抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function() {
  return this.price;
}
BMW.prototype.getSpeed = function() {
  return this.speed;
}













// 复习一下es6的继承  静态方法静态属性和super关键字
class A {
  constructor(){
    this.a = 1;
  }
  // 定义静态方法b
  static b(){
    console.log('aaa');
  }
  d() {
    console.log(this.a);
  }
}
A.aa = 1; 
class B extends A {
  constructor(...args) {
    // super作为函数时，只能存在于子类的构造函数中，且用来指向父类的构造函数，实例化父类的this，但是返回的this指向子类的实例化对象
    super(...args);
    console.log(B.aa);
    console.log(this);
  }
  method() {
    // 在普通方法中，super关键字用作对象，指向父类的原型对象，且调用方法内部的this指向子类实例
    super.d();
  }
  static handle() {
    // 在静态方法中，super关键字用作对象，指向父类。且调用方法内部的this指向当前的子类
    super.b();
  }
}


// es6中Class 内部只有静态方法， 没有静态属性。es7题按Class中可以敌营静态属性
class AA {
  static a = 1;  // 静态属性
  b = 2;   // 实例属性
}