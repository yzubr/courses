// 1

let number = 0

while (number <= 20) {
  console.log(number)
  if (number === 15) {
    break
  }
  number += 1
  // if (a === 10) {
  //   continue
  // }
}

// 2
function findEvenNumber(number1) {
  if (number1 % 2 === 0) {
    return true
  } return false
}
findEvenNumber(16)
findEvenNumber(7)

// 3

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]

users.forEach((element) => {
  console.log(`Имя пользователя: ${element.name}, Возраст: 
    ${element.age}`)
})

// 4

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
]

const productsWithNewPrice = products.map((element) => ({ ...element, price: element.price * 1.1 }))
console.log(productsWithNewPrice)

// 5

const tasks = [
  { title: 'Task 1', completed: true },
  { title: 'Task 2', completed: false },
  { title: 'Task 3', completed: true }
]

const newTasks = tasks.filter((element) => element.completed !== false)
console.log(newTasks)

// 6

const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 92 },
  { name: 'Alex', grade: 78 }
]

console.log(students.sort((a, b) => a.grade - b.grade))

// 7

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
]

console.log(books.find((e) => e.author === 'George Orwell'))

// 8

const cars = [
  { model: 'Tesla', color: 'red' },
  { model: 'BMW', color: 'blue' },
  { model: 'Audi', color: 'black' }
]

function contaisnColor(array, color) {
  let res
  array.forEach((e) => {
    if (e.color === color) res = true
    return res
  })
  console.log(res)
}

contaisnColor(cars, 'red')

// 9
const purchases = [
  { item: 'Book', date: '2023-09-10' },
  { item: 'Laptop', date: '2023-09-05' },
  { item: 'Phone', date: '2023-09-01' }
]

const newArray = purchases.toReversed()

console.log(newArray)
