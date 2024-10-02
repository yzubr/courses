const product = {
  name: 'apple',
  price: 10,
  quantity: 3
}
console.log(product)

if (product.quantity === 0) {
  console.log('нет товара');
} else if (product.quantity > 10) {
  console.log('много товара');
} else if (product.quantity > 0 && product.quantity <= 10) {
  console.log('мало товара');
}

function arg(a) {
  console.log(`${a.name} стоит ${a.price} $`);
}

arg(product);

let sum = 0;
for (let index = 0; index <= 10; index++) {
  sum = sum + index;
}
console.log(`сумма от 1 до 10 равна ${sum}`)
