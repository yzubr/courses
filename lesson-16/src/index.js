const changeContent = document.querySelector('#change-content')
const changeElement = document.querySelector('#change-element')

console.log(document.querySelectorAll('article')[0].firstElementChild)

changeContent.addEventListener('click', () => {
  document.querySelectorAll('article')[0].firstElementChild.innerHTML = `
 <p>Я содержимое которое <span>изменили</span></p>`
})

changeElement.addEventListener('click', () => {
  document.querySelectorAll('article')[0].firstElementChild.outerHTML = `
 <p>Я <p> не обернутое в <a></p>`
})

// 3

document.querySelector('#accept-response').addEventListener('click', () => {
  const answer = prompt('Тeбе нравится JS?')
  alert(`${answer}`)
})

// 4

document.querySelector('#form-4').addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(document.getElementById('field-input').value)
})
