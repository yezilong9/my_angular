angular.module("my_angular",["module1"]);
angular.module("my_angular_another",["module2"]);

$(function(){
  angular.bootstrap($("#another"),["my_angular_another"])
})
