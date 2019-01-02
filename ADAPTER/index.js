/**
 * @author feikaixin
 * @description 适配器模式
 */

//  参数适配器
// 数据适配
// 服务端数据适配
function ajaxAdapter(data) {
  // 处理数据并返回新数据
  return [data['key1'],data['key2']];
}
$.ajax({
  type: "method",
  url: "url",
  data: "data",
  dataType: "dataType",
  success: function (response) {
    doSomething(ajaxAdapter(response));
  }
});