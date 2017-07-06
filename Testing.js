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
    todosUl.innerHTML = '';
    for(var i = 0; i < todoList.todos.length; i++){
      var todoLi = document.createElement('li');


      //mess starts here
      /*
      <li>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">My Task 1</h3>
            <button type="button" class="btn btn-danger">Danger</button>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
      </li>
      */

      //create elements
      var outerDiv = document.createElement('div');
      var innerDiv1 = document.createElement('div');
      var innerDivTitle = document.createElement('h3');
      var innerDiv2 = document.createElement('div');
      var deleteButton = document.createElement('button');

      //nest elements within each other
      outerDiv.appendChild(innerDiv1);
      outerDiv.appendChild(innerDiv2);
      innerDiv1.appendChild(innerDivTitle);
      innerDiv1.appendChild(deleteButton);

      //add classes to Elements
      outerDiv.className = "panel panel-default";
      innerDiv1.className = "panel-heading";
      innerDivTitle.className = "panel-title";
      innerDiv2.className = "panel-body";
      deleteButton.className = "btn btn-danger buttonDelete";
      deleteButton.id = i;


      deleteButton.addEventListener('click', function() {
        console.log(this.deleteButton.id);
        todoList.deleteTodo(this.deleteButton.id);
      }, false);
      todoLi.appendChild(outerDiv);
      //ends



      var todo = todoList.todos[i];

      //add todo title to h3 tag
      innerDivTitle.textContent = todo.todoText;

      var todoTextCompletion = 'Status of Completion: ';

      if(todo.completed){
        todoTextCompletion += "(X)";
      }
      else
      {
        todoTextCompletion += "( )";
      }

      deleteButton.textContent = "delete";
      innerDiv2.textContent = todoTextCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};

function myFunction(){
  console.log("hello");
}
