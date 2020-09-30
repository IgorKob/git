// console.dir(document);
const form = document.querySelector('#newTaskForm');
const tasksList = document.querySelector('#tasksList');

//масив для зберігання елементів списку
let arr = [];

// витягуємо дані з localStorage
let taskJSON = localStorage.getItem('arr');

// якщо localStorage містить елементи
if (taskJSON) {
  arr = JSON.parse(taskJSON);
  // розбруковуємо їх
  arr.forEach((item) => {
    const taskHTML = `<li class="list-group-item d-flex justify-content-between">
      <span class="task-title">${item}</span>
      <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Видалити</button>
    </li>`;

    // добавляємо на сторінку
    tasksList.insertAdjacentHTML('afterbegin', taskHTML);
  });

}


//добавляємо новий елемент
form.addEventListener('submit', function(event) {
  event.preventDefault();    //відміняє стандартну поведінку

  const input = document.querySelector('#addNewTask');

  const taskText = input.value;

//добавляємо до масиву
  arr.push(taskText);
  // зберігаємо масив до localStorage
  localStorage.setItem('arr', JSON.stringify(arr));

//добавляємо до розмітки
  const taskHTML = `<li class="list-group-item d-flex justify-content-between">
    <span class="task-title">${taskText}</span>
    <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Видалити</button>
  </li>`;

//добавляємо на сторінку
//добавляє taskHTML на початок у tasksList
  tasksList.insertAdjacentHTML('afterbegin', taskHTML);

  input.value = '';
});

// видаляємо елемент
tasksList.addEventListener('click', function(event) {

  //провіряємо чи натискання було на кнопці
  if ( event.target.getAttribute('data-action') === 'delete-task' ) {

    const taskText = event.target.closest('li').querySelector('.task-title').textContent;

    const taskIndex = arr.indexOf(taskText);

    // видаляємо з масиву
    arr.splice(taskIndex, 1);

    // зберігаємо масив до localStorage
    localStorage.setItem('arr', JSON.stringify(arr));


    //шукаємо батьківський елемент і видаляємо його
    event.target.parentElement.remove();
  }

});

// //видаляє елемент name
// localStorage.removeItem('name');
// //видаляє всі елементи
// localStorage.clear();
