window.addEventListener('load', () => {
  const taskForm = document.querySelector('#task-form');
  const taskInput = document.querySelector('#task-input');
  const taskList = document.querySelector('#task-list');

  // add button
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = taskInput.value;
    // alert
    if (!task) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please add a task.',
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

    // delete button
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-btn');
    buttonDelete.innerHTML = 'DONE';
    listItem.appendChild(buttonDelete);
    // function
    buttonDelete.addEventListener('click', (e) => {
      e.preventDefault();
      deleteTask(buttonDelete);
    });
  };
  // remove
  const deleteTask = (buttonDelete) => {
    const selectTask = buttonDelete.closest('li');
    taskList.removeChild(selectTask);
  };
});

// clear button
const clearClick = () => {
  const clearText = document.getElementById('task-input');
  clearText.value = '';
};
