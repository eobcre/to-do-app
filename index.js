window.addEventListener('load', () => {
  const taskForm = document.querySelector('#task-form');
  const taskInput = document.querySelector('#task-input');
  const taskList = document.querySelector('#task-list');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = taskInput.value;

    if (!task) {
      alert('Please add the task.');
      return;
    }

    addTask(task);
    taskInput.value = '';
  });

  // Add button
  const addTask = (task) => {
    const divItem = document.createElement('div');
    const showItem = taskList.appendChild(divItem);
    showItem.innerHTML = task;

    // Delete button
    const buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = 'Delete';
    divItem.appendChild(buttonDelete);

    buttonDelete.addEventListener('click', (e) => {
      e.preventDefault();
      deleteTask(buttonDelete);
    });
  };

  const deleteTask = (buttonDelete) => {
    const selectTask = buttonDelete.closest('div');
    taskList.removeChild(selectTask);
  };
});
