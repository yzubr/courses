async function getTodosFromAPI() {
  const response = await fetch('https://dummyjson.com/todos?limit=3')
  const todos = await response.json()

  return todos.todos
}

const toDoList = document.querySelector('.todo-list')

async function updateToDos(event) {
  const toDoId = event.target.id.replace('checkbox-', '')
  const completedStatus = event.target.checked
  const response = await fetch(`https://dummyjson.com/todos/${toDoId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: completedStatus
    })
  })
  const updatedTodo = await response.json()
  console.log(updatedTodo)
  const localStorageToDoArray = JSON.parse(localStorage.getItem('todos'))
  localStorageToDoArray[updatedTodo.id - 1].completed = completedStatus
  localStorage.setItem('todos', JSON.stringify(localStorageToDoArray))
}

function makeToDoHTML(toDoArray) {
  toDoArray.forEach((toDoItem) => {
    const toDoBlock = document.createElement('div')
    if (toDoItem.completed) {
      toDoBlock.innerHTML = `
      <label for="checkbox-${toDoItem.id}">${toDoItem.todo}</label>
      <input type="checkbox" class="checkbox" id = "checkbox-${toDoItem.id}" checked name="todo-${toDoItem.id}">
     `
    } else {
      toDoBlock.innerHTML = `
      <label for="checkbox-${toDoItem.id}">${toDoItem.todo}</label> 
      <input type ="checkbox" class ="checkbox" id ="checkbox-${toDoItem.id}"name ="todo-${toDoItem.id}">
      `
    }
    toDoList.appendChild(toDoBlock)
    document.querySelector(`#checkbox-${toDoItem.id}`).addEventListener('change', updateToDos)
    console.log(document.querySelector(`#checkbox-${toDoItem.id}`))
  })
}

async function getToDos() {
  if (localStorage.getItem('todos')) {
    makeToDoHTML(JSON.parse(window.localStorage.getItem('todos')))
  } else {
    const toDoArray = await getTodosFromAPI()
    localStorage.setItem('todos', JSON.stringify(toDoArray))
    makeToDoHTML(toDoArray)
  }
}

await getToDos()

async function addNewToDo(toDo) {
  const response = await fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: toDo,
      completed: false,
      userId: 29
    })
  })

  return response.json()
}

const addNewToDoForm = document.querySelector('.addNewToDo-form')
addNewToDoForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const newToDo = await addNewToDo(document.querySelector('#addNewToDo-field').value)
  console.log(newToDo)
  // сейчас идет костыль для записи в localStorage, потому что у нас не API, а его эмуляция
  const localStorageToDoArray = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : []
  newToDo.id = localStorageToDoArray.length + 1
  localStorageToDoArray.push(newToDo)
  localStorage.setItem('todos', JSON.stringify(localStorageToDoArray))
  console.log(localStorage.getItem('todos'))
  // конец костыля
  const toDoBlock = document.createElement('div')
  toDoBlock.innerHTML = `
    <label for="checkbox-${newToDo.id}">${document.querySelector('#addNewToDo-field').value}</label>
    <input type = "checkbox" class = "checkbox" id ='checkbox-${newToDo.id}' name ="todo-${newToDo.id}">
    `
  toDoList.appendChild(toDoBlock)
  document.querySelector(`#checkbox-${newToDo.id}`).addEventListener('change', updateToDos)
})

// функционал очищающий localStorage и удаляющий задачи со страницы

document.querySelector('.delete-button').addEventListener('click', () => {
  window.localStorage.removeItem('todos')
  toDoList.innerHTML = `
  <p class='greeting-text'>Start creating your ToDO list</p>
  `
})
