// 工厂模式
function createBook(name, time, type){
  var o = new Object();
  o.name = name;
  o.time = time;
  o.type = type;
  o.getName = function() {
    console.log(this.name);
  };
  return o;
}
var book1 = createBook('css book', '2014', 'css');
var book2 = createBook('js book', '2014', 'js');
book1.getName();
book2.getName();