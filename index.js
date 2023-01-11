const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskSubmit = document.querySelector('#task-submit');
const taskList = document.querySelector('#task-list');

// Stop refreshing the page
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
