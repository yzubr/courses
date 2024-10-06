// string length

let s = 'agdjgfkshv';
console.log(s.length)

// string reverce

function reverseStr(a) {
  return a.split('').reverse().join('');
}

console.log(reverseStr(s))

//substr

function findSubStr(str, substr) {
  if (str.indexOf(substr) !== -1) {
    console.log(`в строке ${str} есть подстрока ${substr}`)
  } else console.log(`в строке ${str} нет подстроки ${substr}`)  
}

findSubStr('мама мыла раму', 'ла')

// array

let arr = ['str', 15];
console.log(arr.length);
arr.push('str1', {});
arr.unshift(10, [])
console.log(arr.length);
arr.splice(2);
console.log(arr);

//fuction array-reverse

function reverceArray(arr) {
  console.log(arr.reverse())
}

reverceArray([1, 2, 3, 4, 5])