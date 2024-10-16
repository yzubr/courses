const products = document.querySelectorAll('li')
const productsArray = [...products]

productsArray[1].style.color = 'yellow'
productsArray.forEach((element) => {
  element.style.textDecoration = 'underline'
})

const article = document.querySelector('aside')

function addButton(textInButton, eventForButton) {
  const newButton = document.createElement('button')
  newButton.innerText = textInButton
  newButton.onclick = eventForButton
  article.appendChild(newButton)
}

function changeFirstProduct() {
  productsArray[0].innerText = 'Смартфон'
}

function hiddenThirdProduct() {
  productsArray[2].classList.toggle('is-hidden')
}

function addNewProduct() {
  const newParagraph = document.createElement('li')
  newParagraph.innerText = 'Планшет'
  document.querySelector('ul').appendChild(newParagraph)
}

addButton('Изменить первый продукт', changeFirstProduct)
addButton('Скрыть третий продукт', hiddenThirdProduct)
addButton('Добавить четвертый продукт', addNewProduct)
