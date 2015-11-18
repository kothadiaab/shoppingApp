angular.module('todo',[]).controller('todoCtrl',todoCtrl)

function todoCtrl($scope){
          $scope.todos = [
                {item:'Milk', desc:'2 % organic clover'},
                {item:'Egg', desc:'white and brown organic eggs'}];

          $scope.addTodo = function(){
              $scope.todos.push({item:$scope.todoItem, desc:$scope.todoDesc});
              //console.log($scope.todoItem);
              $("#itemModal").modal('hide');
              $scope.todoItem = '';
              $scope.todoDesc = '';
          };

          $scope.showItem = function (todo) {

              $scope.selectedTodo = todo;
              //console.log(selectedTodo);
          }

}