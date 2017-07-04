var todoList = {

  todos : [],
  addTodo : function(todoText) {
    this.todos.push({
      todoText : todoText,
      completed: false
    });
  },

  changeTodo : function (position, todoText){
    var item = this.todos[position].todoText;
    this.todos[position].todoText = todoText;
    console.log("\nItem " + position + " has been changed from " + item + " to " + todoText);
  },

  toggleCompleted : function (position){
    var todo = this.todos[position].completed;
    this.todos[position].completed = !todo;
    if(todo){
      console.log("\nItem " + position + " is incomplete.");
    }
    else
      console.log("\nItem " + position + " has been completed.\n");
  },

  deleteTodo : function(pos){
    console.log(this.todos[pos].todoText + " has been removed.");
    this.todos.splice(pos,1);
  },

  toggleAll : function() {
    var completedCount = 0;
    var totalTodos = this.todos.length;
    for(var i = 0 ; i < totalTodos; i++){
      if(this.todos[i].completed){
        completedCount++;
      }
    }

    if(completedCount === totalTodos){
      for(var j = 0; j < totalTodos; j++){
        this.todos[j].completed = false;
      }
    }
    else {
      for(var k = 0; k < totalTodos; k++){
        this.todos[k].completed = true;
      }
    }
  }
};

var handlers = {
  addTodo : function (){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo : function (){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value ='';
    changeTodoTextInput.value ='';
    view.displayTodos();
  },
  deleteTodo : function (){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value ='';
    view.displayTodos();
  },
  toggleCompleted : function (){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value ='';
    view.displayTodos();
  },
  toggleAll : function() {
    todoList.toggleAll();
    view.displayTodos();
  }

};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i = 0; i < todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if(todo.completed){
        todoTextWithCompletion = "(X) " + todo.todoText;
      }
      else
      {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
