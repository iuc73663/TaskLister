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

    view.displayTodos();
  },

  deleteTodo : function(pos){
    console.log(this.todos[pos].todoText + " has been removed.");
    this.todos.splice(pos,1);
    view.displayTodos();
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
    //todosUl.innerHTML = '';
    var data;

    for(var i = 0; i < todoList.todos.length; i++){
      data += '<li><div class="panel panel-default">';
      data += '<div class="panel-heading">';
      data += '<h3 class="panel-title">';
      data += 'Task ';
      data += (i+1) + " of " + todoList.todos.length;
      data += " : " + todoList.todos[i].todoText;
      data += '</h3>';
      data += '</div>';
      data += '<div class="panel-body panelCustomBody">';
      data += '    <table>';
      data +=        '<tr>';
      data +=        '<th>Status: </th>';
      data +=        '<th>Toggle Complete: </th>';
      data +=        '<th>Remove Task: </th>';
      data +=        '</tr>';
      data +=        '<tr>';
      if(todoList.todos[i].completed){
        data += '<td style="background-color:green;" ></td>';
        data += '<td><button type="button" class="btn btn-success align="center" onclick="todoList.toggleCompleted(' + i + ')">Complete</button></td>';
      }
      else {
        data += '<td style="background-color:red;" ></td>';
        data += '<td><button type="button" class="btn btn-danger align="center" onclick="todoList.toggleCompleted(' + i + ')">incomplete</button></td>';
      }
      data +=        '<td><button type="button" class="btn btn-danger align="center" onclick="todoList.deleteTodo(' + i + ')">Delete</button></td>';
      data +=        '</tr>';
      data +=        '</table>';
      data += '</div>';
      data += '</div></li>';

    }
    todosUl.innerHTML = data;
  }
};
