// 1
const nestedArray = [[1, 2], [3, [4, 5]], 6]
const flatArray = nestedArray.flat(Infinity)

console.log(flatArray)

// 2

const products = [
  { id: 1, name: 'Телефон', inStock: true },
  { id: 2, name: 'Ноутбук', inStock: false },
  { id: 3, name: 'Часы', inStock: false }
]

function isproductInStock(productsArray) {
  return productsArray.some((product) => product.inStock)
}

console.log(isproductInStock(products))

// 3

const transactions = [
  { id: 1, type: 'income', amount: 500 },
  { id: 2, type: 'expense', amount: 100 },
  { id: 3, type: 'income', amount: 200 },
  { id: 4, type: 'expense', amount: 50 }
]

function calculateTotalBalance(transactionsArray) {
  console.log(transactionsArray.reduce((summary, currenTransaction) => {
    if (currenTransaction.type === 'income') {
      summary += currenTransaction.amount
    } else { summary -= currenTransaction.amount }
    return summary
  }, 0))
}

calculateTotalBalance(transactions)

// 4

const user = {
  name: 'John',
  email: 'john@example.com',
  age: 25
}

function showObjectKeysValues(object) {
  return Object.entries(object)
}

console.log(showObjectKeysValues(user))

// 5

const cart = {
  apple: 2,
  banana: 3,
  orange: 1
}

function showProductsInReceiptFormate(products) {
  Object.entries(products).forEach(([product, count]) => {
    console.log(`${product}: ${count} шт.`)
  })
}

showProductsInReceiptFormate(cart)

// 6

const defaultSettings = {
  theme: 'light',
  notifications: true,
  language: 'en'
}

const userPreferences = {
  language: 'ru',
  notifications: false
}

function returnCommonObject(object1, object2) {
  return { ...object1, ...object2 }
}

console.log(returnCommonObject(defaultSettings, userPreferences))

// 7

function checkAge(age) {
  if (age < 18) {
    throw new Error('Возраст должен быть 18 лет или больше.')
  }
  return 'Возраст больше 18 лет'
}

try {
  console.log(checkAge(16))
} catch (error) {
  console.log('Ошибка:', error.message)
}

// 8

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(console.log('Число больше 10'))
    } else {
      reject(new Error('Число 10 или меньше'))
    }
  })
}

checkNumber(12)

// 9

function delayedMessage(message, time) {
  setTimeout(() => {
    console.log(message)
  }, time)
}

delayedMessage('Hello world', 5000)

// 10

async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const result = await response.json()
    console.log(result.products[0])
  } catch (error) {
    console.error('Не удалось получить данные', error)
  }
}

console.log(fetchProducts())
