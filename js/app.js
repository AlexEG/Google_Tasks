let myTasks = ['task 1', 'task 2', 'task 3'];

myTasks.forEach(function (todoName) {
  let elem = document.createElement('div');
  elem.innerText = todoName;
  document.body.appendChild(elem);
});

// make a add todo button

function addTodo() {
  let textbox = document.getElementById('typeYourTodo');
  let title = textbox.value;
  myTasks.push(title);
}
