const submitBtn = document.querySelector('#submit-btn');
const clearBtn = document.getElementById('clear-btn');
const listEle = document.getElementById('list');

// Functions
const deleteTask = () => {
  const deleteBtn = document.querySelector('.deleteTask-btn');
  const taskEle = document.querySelector('.task-ele');
  deleteBtn.addEventListener('click', () => taskEle.remove());
};

const addToList = (task) => {
  const html = `
  <li class='task-ele'>
    <input type="checkbox" class='completed'/>
    ${task}
    <button class='deleteTask-btn'>✖</button>
  </li>
`;
  listEle.insertAdjacentHTML('afterbegin', html);
  deleteTask();

  const taskEle = document.querySelector('.task-ele');
  const completedEle = document.querySelector('.completed');
  completedEle.addEventListener('change', () => {
    completedEle.checked
      ? taskEle.classList.toggle('completed')
      : taskEle.classList.toggle('completed');
  });
};

// Event listeners
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const taskEle = document.getElementById('new-task');
  const task = taskEle.value;
  if (task === '') return;
  addToList(task);
  taskEle.value = '';
});

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  listEle.innerHTML = '';
});
