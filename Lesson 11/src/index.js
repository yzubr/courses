// string length

const string10 = 'agdjgfkshv'

console.log(string10.length)

// string reverce

function reverseStr(string) {
  return string.split('').reverse().join('')
}

console.log(reverseStr(string10))

// substr

function findSubStr(string, substring) {
  if (string.indexOf(substring) !== -1) {
    console.log(true)
  } else {
    console.log(false)
  }
}

findSubStr('мама мыла раму', 'ла')

// array

const array = ['str', 15]
console.log(array.length)
array.push('str1', {})
array.unshift(10, [])
console.log(array.length)
array.splice(2)
console.log(array)

// fuction array-reverse

function reverceArray(array1) {
  console.log(array1.reverse())
}

reverceArray([1, 2, 3, 4, 5])
