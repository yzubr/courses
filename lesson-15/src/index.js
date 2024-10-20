(async () => {
  async function getCategories() {
    const response = await fetch('https://dummyjson.com/products/categories')
    const categories = await response.json()
    return categories
  }

  console.log(await getCategories())

  const listOfCategories = await getCategories()

  console.log(listOfCategories.length)

  function findCategoryByName(arrayOfCategories, nameOfCategory) {
    return arrayOfCategories.find((category) => category.name === nameOfCategory)
  }

  console.log(findCategoryByName(listOfCategories, 'Groceries'))
  console.log(findCategoryByName(listOfCategories, 'Electronics'))

  // 4
  async function getCategoryProducts(arrayOfCategories, nameOfCategory) {
    const category = arrayOfCategories.find((categoryItem) => categoryItem.name === nameOfCategory)
    if (category !== undefined) {
      const response = await fetch(category.url)
      const listOfProducts = await response.json()
      return listOfProducts.products.map((product) => ({
        id: product.id,
        title: product.title
      }))
    } return `категория ${nameOfCategory} не найдена`
  }

  getCategoryProducts(listOfCategories, 'Electronics').then((result) => {
    console.log(result)
  })

  getCategoryProducts(listOfCategories, 'Groceries').then((result) => {
    console.log(result)
  })

  // 5
  async function fetchProductsNamesAndPrises(arrayOfCategories, nameOfCategory) {
    const category = arrayOfCategories.find((categoryItem) => categoryItem.name === nameOfCategory)
    if (category !== undefined) {
      const response = await fetch(category.url)
      const listOfProducts = await response.json()
      return Object.fromEntries(listOfProducts.products.map((product) => [product.title, product.price]))
    } return `категория ${nameOfCategory} не найдена`
  }

  fetchProductsNamesAndPrises(listOfCategories, 'Electronics').then((result) => {
    console.log(result)
  })

  fetchProductsNamesAndPrises(listOfCategories, 'Groceries').then((result) => {
    console.log(result)
  })

  // 6

  async function getAndGroupsProductByCategory() {
    const response = await fetch('https://dummyjson.com/products?limit=20&select=id,title,category')
    const data = await response.json()
    const groupedByCategory = data.products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push({
        id: product.id,
        title: product.title
      })
      return acc
    }, {})
    console.log(groupedByCategory)
  }
  getAndGroupsProductByCategory()

  // 7
  async function fetchListOFProductsCountByCategories(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const listOfProducts = await response.json()
    return listOfProducts.products.length
  }

  async function getAarrayOfCategories() {
    const response = await fetch('https://dummyjson.com/products?limit=20&select=title,category')
    const data = await response.json()
    const arrayOfCategories = data.products.reduce((acc, product) => {
      if (acc.includes(product.category)) {
        return acc
      } return [...acc, product.category]
    }, [])
    return arrayOfCategories
  }

  async function getProductByCategoryAndRerurnQuantity() {
    const arrayOfCategories = await getAarrayOfCategories()
    console.log(arrayOfCategories)
    const productGroupsCountFetchArray = arrayOfCategories.map((category) => fetchListOFProductsCountByCategories(category))
    console.log(productGroupsCountFetchArray)
    const productsInSameGropsCount = await Promise.all(productGroupsCountFetchArray)
    console.log('same products categories count', productsInSameGropsCount)
    console.log(Object.fromEntries(
      arrayOfCategories.map((tag, index) => [tag, productsInSameGropsCount[index]])
    ))
  }
  getProductByCategoryAndRerurnQuantity()

  // 8
  async function getProductsByGroup(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const listOfProducts = await response.json()
    return listOfProducts.products
  }

  async function fetchListOfProductsAndReturnPricesInGroup() {
    const arrayOfCategories = await getAarrayOfCategories()
    console.log(arrayOfCategories)
    const productGroupsCountFetchArray = arrayOfCategories.map((category) => getProductsByGroup(category))
    console.log(productGroupsCountFetchArray)
    const productsInSameGrops = await Promise.all(productGroupsCountFetchArray)
    // console.log('products sort by categories', productsInSameGrops)
    const tileofproductsAndPrices = productsInSameGrops.map((arrayOfProducts) => {
      const arrayOfTitles = arrayOfProducts.map((product) => product.title)
      const arrayOfPrices = arrayOfProducts.map((product) => product.price)
      return {
        products: arrayOfTitles,
        cheapestPrice: Math.min(...arrayOfPrices),
        mostExpensivePrice: Math.max(...arrayOfPrices),
        averagePrice: +(arrayOfPrices.reduce((acc, price) => acc + price, 0) / arrayOfPrices.length).toFixed(2)
      }
    })
    console.log(tileofproductsAndPrices)
    console.log(Object.fromEntries(
      arrayOfCategories.map((category, index) => [category, tileofproductsAndPrices[index]])
    ))
  }
  fetchListOfProductsAndReturnPricesInGroup()
})()
