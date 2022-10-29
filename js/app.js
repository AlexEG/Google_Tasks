// make a add todo button

let myTasks = ['task 1', 'task 2', 'task 3'];
letMeSeeMyTodo();
function addTodo() {
  let textbox = document.getElementById('typeYourTodo');
  let title = textbox.value;
  myTasks.push(title);

  letMeSeeMyTodo();
}

// so I can't see the new todo on the page
// so to fix that ...

function letMeSeeMyTodo() {
  document.getElementById('todo_List').innerHTML = '';

  myTasks.forEach(function (todoName) {
    let elem = document.createElement('div');
    elem.innerText = todoName;
    let todoList = document.getElementById('todo_List');
    todoList.appendChild(elem);
  });
}
