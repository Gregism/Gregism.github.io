angular.module('mongoose')
    .factory('Todos', function(){
    return{
      getTodos: function (){
        if(localStorage.todos) return JSON.parse(localStorage.todos);
        return [];
      },
      createTodo: function(todo){
        var _todos = [];
            //todos = JSON.parse(localStorage.todos);

        if(localStorage.todos) {
          _todos = JSON.parse(localStorage.todos);
        }

        _todos.push(todo);
        localStorage.todos = JSON.stringify(_todos);
        return localStorage.todos;
      },
      deleteTodo: function(todo){
        var _todos = JSON.parse(localStorage.todos);
        _todos.splice(_todos.indexOf(todo),1);

        localStorage.todos = JSON.stringify(_todos);

        return localStorage.todos;
      }
    };
  });