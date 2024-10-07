// string length

const string10 = 'agdjgfkshv'

console.log(string10.length)

// string reverse

function reverseString(string) {
  return string.split('').reverse().join('')
}

console.log(reverseString(string10))

// substr

function findSubstring(string, substring) {
  return (string.includes(substring))
}

findSubstring('мама мыла раму', 'ла')

// array

const array = ['str', 15]
console.log(array.length)
array.push('str1', {})
array.unshift(10, [])
console.log(array.length)
array.splice(2)
console.log(array)

// fuction array-reverse

function reverseArray(initialArray) {
  console.log(initialArray.reverse())
}

reverseArray([1, 2, 3, 4, 5])
