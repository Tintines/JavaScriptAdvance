/**
 * 自定义模块2
 */
/* 
闭包的应用2 : 定义JS模块
  * 具有特定功能的js文件
  * 将所有的数据和功能都封装在一个函数内部(私有的)
  * 只向外暴露一个包含n个方法的对象或函数
  * 模块的使用者, 只需要通过模块暴露的对象调用方法来实现对应的功能  */

// Module模块
(function myModule(w) {         // 形参
  var msg = 'mymodule1 msg';
  var num = 123;
  function doSomething() {
    console.log(msg);
  }
  
  function doOtherthing() {
    return msg;
  }
  
  
  w.myModuleObj2 = {            // 通过形参将方法或属性挂载在对应属性上
    doSomething:doSomething,
    doOtherthing: doOtherthing
  };
})(window)                      // 注入实参