const titleEle = document.querySelector('.title');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');
const listEle = document.getElementById('list');
const toggleSwitchEle = document.getElementById('toggle-switch');
const taskEle = document.querySelector('.task-ele');
const completedEle = document.getElementById('checkbox-Ele');

// Functions
const deleteTask = () => {
  const deleteBtn = document.querySelector('.deleteTask-btn');
  const taskEle = document.querySelector('.task-ele');
  deleteBtn.addEventListener('click', () => taskEle.remove());
};

const newTask = (task) => {
  let html;
  if (toggleSwitchEle.checked) {
    html = `
  <li class='task-ele li-theme-2'>
    <input type="checkbox" id='checkbox-Ele'/>
    ${task}
    <button class='deleteTask-btn'><img src="./assets/img/delete.png" alt="trash can"/></button>
  </li>
`;
  } else {
    html = `
    <li class='task-ele li-theme-1'>
      <input type="checkbox" id='checkbox-Ele'/>
      ${task}
      <button class='deleteTask-btn'><img src="./assets/img/delete.png" alt="trash can"/></button>
    </li>
  `;
  }
  listEle.insertAdjacentHTML('afterbegin', html);
  deleteTask();
  checkboxHandler();
};

/*
NOTES:
THIS FUNCTION FOCUSES MORE ABOUT THE STATUS OF THE CHECKBOX TO HANDLE THE COMPLETED-THEME, BUT IT DO EVALUETES THE TOGGLE SWITCH AS WELL

- when a task is created:
if toggle is ON and checkbox is checked it will add complete-theme-2 styling, and remove compelete-theme-1
else
if toggle is ON and checkbox is UNchecked it will remove complete-theme-2


if toggle is OFF and checkbox is checked it will add complete-theme-1 styling and remove complete-theme-2
else 
if toggle is OFF and checkbox is unchecked it will remove complete-theme-2

- if we toggle the SWITCH then the styling will be handled by the toggleHandler function
*/
const checkboxHandler = () => {
  const taskEle = document.querySelector('.task-ele');
  const completedEle = document.getElementById('checkbox-Ele');
  completedEle.addEventListener('change', () => {
    if (toggleSwitchEle.checked && completedEle.checked) {
      taskEle.classList.add(`completed-theme-2`);
      taskEle.classList.remove(`completed-theme-1`);
    } else if (toggleSwitchEle.checked && !completedEle.checked) {
      taskEle.classList.remove(`completed-theme-2`);
    }

    if (!toggleSwitchEle.checked && completedEle.checked) {
      taskEle.classList.add(`completed-theme-1`);
      taskEle.classList.remove(`completed-theme-2`);
    } else if (!toggleSwitchEle.checked && !completedEle.checked) {
      taskEle.classList.remove(`completed-theme-1`);
    }
  });
};

/*
NOTES:
THIS FUNCTION FOCUSES IF THE TOGGLE  IS ON OR OFF

H1, submitbtn, clearbtn styling was added directly into the elements or by adding a class. Remember that css has hierarchy so ids have a higher hierachy rather than classes.
Toggle was used in this elements since the theme1 was added directly and with toggle we were adding a new class with the theme-2 that overwrittes theme-1.

*/
const toggleHandler = () => {
  // IF TOGGLE IS ON ADD THEME-2 AND REMOVE THEME-1
  if (toggleSwitchEle.checked) {
    // console.log('switch is working');
    document.body.style.backgroundColor = '#f8f6f4';
    titleEle.classList.toggle('h1-theme-2');
    submitBtn.classList.toggle('btn-theme-2');
    clearBtn.classList.toggle('btn-theme-2');
    document
      .querySelectorAll('.li-theme-1')
      .forEach((element) => element.classList.add('li-theme-2'));
    document
      .querySelectorAll('.li-theme-2')
      .forEach((element) => element.classList.remove('li-theme-1'));
    document
      .querySelectorAll('.completed-theme-1')
      .forEach((element) => element.classList.add('completed-theme-2'));
    document
      .querySelectorAll('.completed-theme-2')
      .forEach((element) => element.classList.remove('completed-theme-1'));
  } else {
    // IF TOGGLE IS OFF ADD THEME-1 AND REMOVE THEME-2
    document.body.style.backgroundColor = '#373a40';
    titleEle.classList.toggle('h1-theme-2');
    submitBtn.classList.toggle('btn-theme-2');
    clearBtn.classList.toggle('btn-theme-2');
    document
      .querySelectorAll('.li-theme-2')
      .forEach((element) => element.classList.add('li-theme-1'));
    document
      .querySelectorAll('.li-theme-1')
      .forEach((element) => element.classList.remove('li-theme-2'));
    document
      .querySelectorAll('.completed-theme-2')
      .forEach((element) => element.classList.add('completed-theme-1'));
    document
      .querySelectorAll('.completed-theme-1')
      .forEach((element) => element.classList.remove('completed-theme-2'));
  }
};

// Event listeners
toggleSwitchEle.addEventListener('click', toggleHandler);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const taskEle = document.querySelector('.new-task');
  const task = taskEle.value;
  if (task === '') return;
  newTask(task);
  taskEle.value = '';
});

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  listEle.innerHTML = '';
});
