/**
 * @description 建造者模式
 * @author feikaixin
 */
// 创建一位人类
var Human = function(param) {
  // 技能
  this.skill = param && param.skill || '保密';
  // 兴趣爱好
  this.hobby = param && param.hobby || '保密';
}
// 类人原型方法
Human.prototype = {
  getSkill: function() {
    return this.skill;
  },
  getHobby: function() {
    return this.hobby;
  }
}
// 实例化姓名类
var Named = function(name) {
  var that = this;
  // 构造器
  // 构造函数解析姓名的姓与名
}
// 实例化职位类
var Work = function(work) {
  var that = this;
  // 构造器
  // 构造函数中通过传入的职位特这设置相应的职位以及描述
}

/**
 * 应聘者建造者
 * @param {String} name 应聘者姓名
 * @param {String} work 期望职位
 */
var Person = function(name, work) {
  // 创建应聘者缓存对象
  var _person = new Human();
  _person.name = new Named(name);
  _person.work = new Work(work);
  return _person;
}
// 测试
var person = new Person('feikaixin', 'code')