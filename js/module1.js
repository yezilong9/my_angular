angular.module("module1",[])
  .controller("my_controller_1",function($scope){
      $scope.myobject={text:"abc"};
  })
  .controller("my_controller_1_1",function($scope){
      // $scope.myobject="hello";
  });
