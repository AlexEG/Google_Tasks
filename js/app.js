// make a add todo button

const todos = [
  { title: 'task 1', dueDate: '2022-10-30' },
  { title: 'task 2', dueDate: '2022-10-29' },
  { title: 'task 3', dueDate: '2022-10-28' },
];

render();

function addTodo() {
  const textbox = document.getElementById('typeYourTodo');
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  todos.push({
    title: title,
    dueDate: dueDate,
  });

  render();
}

function render() {
  document.getElementById('todo_List').innerHTML = '';

  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;
    const todoList = document.getElementById('todo_List');
    todoList.appendChild(element);
  });
}
