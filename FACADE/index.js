/**
 * @author feikaixin
 * @description 外观模式
 */

//  外观模式实现
function addEvent(dom, type, fn) {
  // 支持DOM2级事件处理程序的浏览器
  if(dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if(dom.attachEvent) {
    dom.attachEvent('on'+type, fn);
  } else {
    dom['on'+type] = fn;
  }
}

// 测试用例
var a = document.getElementById('wrap');
addEvent(a, 'click',function(){console.log('aaaa')});