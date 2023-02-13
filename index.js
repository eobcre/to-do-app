window.addEventListener('load', () => {
  const taskForm = document.querySelector('#task-form');
  const taskInput = document.querySelector('#task-input');
  const taskList = document.querySelector('#task-list');

  // Add button
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = taskInput.value;
    // Alert
    if (!task) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please add a task.',
        background: '#fff',
      });
    } else {
      addTask(task);
      taskInput.value = '';
    }
  });

  const addTask = (task) => {
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = task;

    // Delete button
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-btn');
    buttonDelete.innerHTML = 'DONE';
    listItem.appendChild(buttonDelete);
    // Function
    buttonDelete.addEventListener('click', (e) => {
      e.preventDefault();
      deleteTask(buttonDelete);
    });
  };
  // Remove
  const deleteTask = (buttonDelete) => {
    const selectTask = buttonDelete.closest('li');
    taskList.removeChild(selectTask);
  };
});

// Clear button
const clearClick = () => {
  const clearText = document.getElementById('task-input');
  clearText.value = '';
};
