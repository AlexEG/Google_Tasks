// make a add todo button

let myTasks = ['task 1', 'task 2', 'task 3'];

letMeSeeMyTodo();

function addTodo() {
  const textbox = document.getElementById('typeYourTodo');
  const title = textbox.value;

  const date = document.getElementById('date');
  myTasks.push(title);
  const duDate = date.value;
  letMeSeeMyTodo();
}

function letMeSeeMyTodo() {
  document.getElementById('todo_List').innerHTML = '';

  myTasks.forEach(function (todoName) {
    let elem = document.createElement('div');
    elem.innerText = todoName;
    let todoList = document.getElementById('todo_List');
    todoList.appendChild(elem);
  });
}
