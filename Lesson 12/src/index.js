// 1

let number = 0

while (number <= 20) {
  if (number === 10 || number === 13) {
    number += 1
    continue
  }
  console.log(number)
  if (number === 15) {
    break
  }
  number += 1
}

// 2
function findEvenNumber(number1) {
  return number1 % 2 === 0
}

console.log(findEvenNumber(16))
console.log(findEvenNumber(7))

// 3

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]

users.forEach((user) => {
  console.log(`Имя пользователя: ${user.name}, Возраст: ${user.age}`)
})

// 4

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
]

const productsWithNewPrice = products.map((product) => ({ ...product, price: product.price * 1.1 }))
console.log(productsWithNewPrice)

// 5

const tasks = [
  { title: 'Task 1', completed: true },
  { title: 'Task 2', completed: false },
  { title: 'Task 3', completed: true }
]

const completedTasks = tasks.filter((task) => task.completed)
console.log(completedTasks)

// 6

const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 92 },
  { name: 'Alex', grade: 78 }
]

console.log(students.toSorted((a, b) => a.grade - b.grade))

// 7

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
]

console.log(books.find((book) => book.author === 'George Orwell'))

// 8

const cars = [
  { model: 'Tesla', color: 'red' },
  { model: 'BMW', color: 'blue' },
  { model: 'Audi', color: 'black' }
]

function containsColor(carsArray, color) {
  let carExists = false

  carsArray.forEach((car) => {
    if (car.color === color) {
      carExists = true
    }
  })

  return carExists
}

console.log(containsColor(cars, 'red'))

// 9
const purchases = [
  { item: 'Book', date: '2023-09-10' },
  { item: 'Laptop', date: '2023-09-05' },
  { item: 'Phone', date: '2023-09-01' }
]

const reversedPurchases = purchases.toReversed()

console.log(reversedPurchases)
