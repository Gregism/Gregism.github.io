'use strict';

angular.module('mongoose')
  .controller('todoCtrl', function ($scope, Todos) {
    $scope.sectionInfo.title = 'Todo';

    $scope.refreshTodos = function(){
      $scope.todos = Todos.getTodos();
      //console.log($scope.todos);
    }
    
    $scope.addTodo = function(todo){
      Todos.createTodo(todo);
      $scope.todoInput = "";
      $scope.refreshTodos();
    }

    $scope.removeTodo = function(todo){
      Todos.deleteTodo(todo);
      $scope.refreshTodos();
    }

    $scope.refreshTodos();
  });