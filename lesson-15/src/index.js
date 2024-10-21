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
    if (category) {
      const response = await fetch(category.url)
      const listOfProducts = await response.json()
      return listOfProducts.products.map((product) => ({
        id: product.id,
        title: product.title
      }))
    } return `категория ${nameOfCategory} не найдена`
  }

  console.log(await getCategoryProducts(listOfCategories, 'Electronics'))
  console.log(await getCategoryProducts(listOfCategories, 'Groceries'))

  // 5
  async function fetchProductsNamesAndPrices(categories, categoryName) {
    const category = categories.find(({ name }) => name === categoryName)
    if (category) {
      const response = await fetch(category.url)
      const { products } = await response.json()
      return Object.fromEntries(products.map(({ price, title }) => [title, price]))
    }
    return `категория ${categoryName} не найдена`
  }

  console.log(await fetchProductsNamesAndPrices(listOfCategories, 'Electronics'))
  console.log(await fetchProductsNamesAndPrices(listOfCategories, 'Groceries'))

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
    return groupedByCategory
  }
  console.log(await getAndGroupsProductByCategory())

  // 7
  async function getCategoryProductsCount(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const { products } = await response.json()
    return products.length
  }

  async function getProductCategories() {
    const response = await fetch('https://dummyjson.com/products?limit=20&select=title,category')
    const { products } = await response.json()
    return products.reduce((acc, { category }) => (
      acc.includes(category) ? acc : [...acc, category]
    ), [])
  }

  async function getProductCategoriesProductsCount() {
    const categories = await getProductCategories()
    console.log(categories)
    const productsInSameGroupsCount = await Promise.all(categories.map((category) => (
      getCategoryProductsCount(category)
    )))
    console.log('same products categories count', productsInSameGroupsCount)

    return Object.fromEntries(
      categories.map((category, index) => [category, productsInSameGroupsCount[index]])
    )
  }

  console.log(await getProductCategoriesProductsCount())

  // 8
  async function getProductsByCategory(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const { products } = await response.json()
    return products
  }

  async function getCategoriesProductsInformation() {
    const categories = await getProductCategories()
    const productsByCategories = await Promise.all(categories.map((category) => (
      getProductsByCategory(category)
    )))

    return Object.fromEntries(
      categories.map((category, index) => {
        const products = productsByCategories[index]
        const prices = products.map(({ price }) => price)

        return [category, {
          products: products.map(({ title }) => title),
          cheapestPrice: Math.min(...prices),
          mostExpensivePrice: Math.max(...prices),
          averagePrice: (prices.reduce((acc, price) => acc + price, 0) / products.length).toFixed(2)
        }]
      })
    )
  }

  console.log(await getCategoriesProductsInformation())
})()
