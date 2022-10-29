// make a add todo button

const todos = [
  { title: 'task 1', dueDate: '2022-10-30', id: 'id1' },
  { title: 'task 2', dueDate: '2022-10-29', id: 'id2' },
  { title: 'task 3', dueDate: '2022-10-28', id: 'id3' },
];

render();

function addTodo() {
  const textbox = document.getElementById('typeYourTodo');
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;
  //cool way to get an id in javascript
  const id = new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });

  render();
}
function deleteTodo() {}

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
