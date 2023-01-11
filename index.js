window.addEventListener('load', () => {
  const taskForm = document.querySelector('#task-form');
  const taskInput = document.querySelector('#task-input');
  const taskSubmit = document.querySelector('#task-submit');
  const taskList = document.querySelector('#task-list');

  const buttonAdd = (task) => {
    const listItem = document.createElement('div');
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = task;
  };

  // Add button
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = taskInput.value;
    buttonAdd(task);
    taskInput.value = '';

    if (!task) {
      alert('Please add the task.');
      return;
    }
  });
});
