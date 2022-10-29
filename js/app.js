let todos;

const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    { title: 'task 1', dueDate: '2022-10-30', id: 'id1' },
    { title: 'task 2', dueDate: '2022-10-29', id: 'id2' },
    { title: 'task 3', dueDate: '2022-10-28', id: 'id3' },
  ];
}

render();

// create todo
function createTodo(title, dueDate) {
  const id = new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });
  saveTodos();
}
// Delete todo
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    if (todo.id == idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  saveTodos();
}
// to save your task so that you can see it later
function saveTodos() {
  // local storage can only stor strings so we have to convirt the array to string
  localStorage.setItem('todos', JSON.stringify(todos));
}

//add a new todo

function addTodo() {
  const textbox = document.getElementById('typeYourTodo');
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;
  //cool way to get an id in javascript
  createTodo(title, dueDate);
  render();
}
function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
  removeTodo(idToDelete);
  render();
}

function render() {
  document.getElementById('todo_List').innerHTML = '';

  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left:15px';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    const todoList = document.getElementById('todo_List');
    todoList.appendChild(element);
  });
}
