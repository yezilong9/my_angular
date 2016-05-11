angular.module("my_angular",["module1"]);
angular.module("my_angular_another",["module2"]);

angular.element(document).ready(function(){
  angular.bootstrap(document.querySelector("#another"),["my_angular_another"])
})
