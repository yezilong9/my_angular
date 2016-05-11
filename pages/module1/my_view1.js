angular.module("module1")
.controller("my_controller_1",function($scope){
      $scope.myobject={text:"abc"};

      $scope.users = [
        {username:"user01",nickname:"nickname01",age:80,price:1000},
        {username:"user02",nickname:"nickname02",age:90,price:2000},
        {username:"user03",nickname:"nickname03",age:100,price:3000},
        {username:"user04",nickname:"nickname04",age:110,price:4000},
        {username:"user05",nickname:"nickname05",age:40,price:5000},
        {username:"user06",nickname:"nickname06",age:20,price:6000},
      ];

      $scope.new_form_visible = false;

      $scope.addItem = function(){
        $scope.new_form_visible = true;
        $scope.newItem={
          username:"",
          nickname:"",
          age:8,
          price:100
        };
      }

      $scope.saveItem = function(){
        if(!$scope.newItem.username){
          alert("username is null");
        }else{
          $scope.users.push[$scope.newItem];
          $scope.newItem = null;
          $scope.new_form_visible = false;
        }
      }

      $scope.deleteItem = function(item){
        if(confirm("真的要删除吗？")){
          $scope.users.splice($scope.users.indexOf(item),1);
        }
      }

      $scope.edit_form_visible = false;//这个是控制显示的变量
      $scope.current_user = null;//这个变量，来记录提交修改时，复制到原来的哪个对象中
      $scope.editUser = {};//这个是临时的修改对象，为了不影响现有的user
      $scope.editItem = function(item){
        $scope.edit_form_visible = true;
        $scope.current_user = item;
        angular.copy($scope.current_user,$scope.editUser);
        // $scope.editUser = item;
      }

      $scope.updateItem = function(item){
        if($scope.editUser.username == ""){
          alert("username is null");
        }else{
          angular.copy($scope.editUser,$scope.current_user);
          $scope.current_user = null;
          $scope.edit_form_visible = false;
        }
      }


  })
