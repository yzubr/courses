const apple = {
  name: 'apple',
  price: 10,
  quantity: 3
}

console.log(apple)

if (apple.quantity === 0) {
  console.log('нет товара')
} else if (apple.quantity <= 10) {
  console.log('мало товара')
} else {
  console.log('много товара')
}

function showProductNamePrice(product) {
  console.log(`${product.name} стоит ${product.price} $`)
}

showProductNamePrice(apple)

let sum = 0

for (let index = 0; index <= 10; index += 1) {
  sum += index
}

console.log(`сумма от 1 до 10 равна ${sum}`)
