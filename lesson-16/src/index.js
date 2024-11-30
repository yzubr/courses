const changeContent = document.querySelector('#change-content')
const changeElement = document.querySelector('#change-element')

console.log(document.querySelectorAll('article')[0].firstElementChild)

changeContent.addEventListener('click', () => {
  document.querySelector('.content-for-changing').innerHTML = `
 <p>Я содержимое которое <span>изменили</span></p>
 `
})

changeElement.addEventListener('click', () => {
  document.querySelector('#element-for-change').outerHTML = `
 <div>Я div<div>
 `
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

// 5
const resultOfFindingProducts = document.querySelector('.result-of-finding-products')
document.querySelector('.find-products').addEventListener('submit', async (event) => {
  event.preventDefault()
  const valueOfInput = document.querySelector('#find-product-input').value
  const response = await fetch(`https://dummyjson.com/products/search?q=${valueOfInput}`)
  const result = await response.json()
  result.products.forEach((product) => {
    const productHTML = document.createElement('li')
    productHTML.innerText = `наименование товара: ${product.title}`
    resultOfFindingProducts.appendChild(productHTML)
  })
})
