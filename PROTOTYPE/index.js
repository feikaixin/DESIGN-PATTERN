/**
 * @author feikaixin
 * @desc 原型模式
 */
// 原型式继承方法
function inherit(subType, superType) {
  let prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
//  图片轮播类
var LoopImages = function(imgArr, container) {
  this.imagesArray = imgArr;   // 轮播图片数组
  this.container = container;   // 轮播图片容器
}
LoopImages.prototype = {
  // 创建轮播图片
  createImage: function() {
    console.log('LoopImages createImage function');
  },
  // 切换下一张图片
  changeImage: function() {
    console.log('LoopImages changeImage function')
  },
  getImageLength: function() {
    console.log(this.imagesArray.length);
  }
}

// 上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
  // 构造函数继承图片轮播类
  LoopImages.call(this,imgArr,container);
}
inherit(SlideLoopImg, LoopImages);
// SlideLoopImg.prototype = new LoopImages();
// 重写继承的切换下一张图片方法
SlideLoopImg.prototype.changeImage = function() {
  console.log('SlideLoopImg changeImage function')
}

// 测试用例
let slideImg = new SlideLoopImg(['01.jpg','02.jpg'],'slide');
console.log(slideImg.container);
slideImg.changeImage();




























// 组合继承：借用构造函数继承和通过原型链继承
// 寄生继承(原型式继承)：就是不用实例化父类了，直接实例化一个临时副本实现了相同的原型链继承。（即子类的原型指向父类副本的实例从而实现原型共享）