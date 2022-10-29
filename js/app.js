let myTasks = ['task 1', 'task 2', 'task 3'];

mymyTasks.forEach(function (todoName) {
  let elem = document.createElement('div');
  elem.innerText = todoName;
  document.body.appendChild(elem);
});

// make a add todo button

function addNew() {
  myTasks.push(' test');
}
