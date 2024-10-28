async function getTodos() {
  const response = await fetch('https://dummyjson.com/todos?limit=3')
  const todos = await response.json()

  return todos.todos
}

const toDoList = document.querySelector('.todo-list')

function makeToDoHTML(toDoArray) {
  toDoArray.forEach((toDoItem) => {
    const toDoBlock = document.createElement('div')
    if (toDoItem.completed === true) {
      toDoBlock.innerHTML = `
    <p>${toDoItem.todo}</p>
    <input type = "checkbox" class="checkbox" id = 'checkbox-${toDoItem.id}' checked name = "completed">
     <label for="checkbox-${toDoItem.id}">Completed</label>`
    } else {
      toDoBlock.innerHTML = `
    <p>${toDoItem.todo}</p>
    <input type = "checkbox" class = "checkbox" id = "checkbox-${toDoItem.id}" name = "noncompleted">
    <label for="checkbox-${toDoItem.id}">Noncompleted</label> `
    }
    toDoList.appendChild(toDoBlock)
  })
}

async function getToDos() {
  if (window.localStorage.length) {
    makeToDoHTML(JSON.parse(window.localStorage.getItem('todos')))
  } else {
    const toDoArray = await getTodos()
    toDoArray.forEach((toDoElement) => {
      localStorage.setItem(`todo-${toDoElement.id}`, JSON.stringify(toDoElement))
    })
    localStorage.setItem('todos', JSON.stringify(toDoArray))
    makeToDoHTML(toDoArray)
  }
}

await getToDos()

const checkbox = document.getElementsByClassName('checkbox')
function addListnerToCheckbox(checkbox) {
  Array.from(checkbox).forEach((element) => element.addEventListener('click', async (event) => await updateToDos(event.target)))
}

addListnerToCheckbox(checkbox)

async function fetchNewToDo(toDo) {
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
  const newToDo = await fetchNewToDo(document.querySelector('#NewToDo').value)
  localStorage.setItem(`todo-${newToDo.id}`, JSON.stringify(newToDo))
  const toDoBlock = document.createElement('div')
  toDoBlock.innerHTML = `
    <p>${document.querySelector('#NewToDo').value}</p>
    <input type = "checkbox" class = "checkbox" id = 'checkbox-${newToDo.id}' name = "noncompleted">
    <label for="checkbox-${newToDo.id}">Noncompleted</label>`
  toDoList.appendChild(toDoBlock)
  addListnerToCheckbox(checkbox)
})

async function updateToDos(event) {
  if (event.checked) {
    const response = await fetch(`https://dummyjson.com/todos/${event.id.replace('checkbox-', '')}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completed: true
      })
    })
    console.log(await response.json())
    localStorage.removeItem(`todo-${event.id.replace('checkbox-', '')}`)
    localStorage.setItem(`todo-${event.id.replace('checkbox-', '')}`, JSON.stringify(await response.json()))
  }
}

// функционал очищающий localStorage и удаляющий задачи со страницы

document.querySelector('.delete-button').addEventListener('click', () => {
  window.localStorage.clear()
  toDoList.innerHTML = ''
})
