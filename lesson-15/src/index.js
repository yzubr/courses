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

  // async function getCategoryProducts(arrayOfCategories, nameOfCategory) {
  //   if (findCategoryByName(arrayOfCategories, nameOfCategory) !== undefined) {

  //   }

  //   arrayOfCategories.map(async (category) => {
  //     if (category.name === nameOfCategory) {
  //       const response = await fetch('category.url')
  //       const listOfproducts = response.json().products
  //       return {id:listOfproducts.products}
  //     }
  //   })
  // }

  // 5

  

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

  // // 8
  // async function getProductsByGroup(category) {
  //   const response = await fetch(`https://dummyjson.com/products/category/${category}`)
  //   const listOfProducts = await response.json()
  //   return listOfProducts.products
  // }

  // async function fetchListOfProductsAndReturnPricesInGroup() {
  //   const arrayOfCategories = await getAarrayOfCategories()
  //   console.log(arrayOfCategories)
  //   const productGroupsCountFetchArray = arrayOfCategories.map((category) => getProductsByGroup(category))
  //   console.log(productGroupsCountFetchArray)
  //   const productsInSameGrops = await Promise.all(productGroupsCountFetchArray)
  //   console.log('same products categories count', productsInSameGrops)
  //   const tileofproductsAndPrices = productsInSameGrops.reduce((acc, product) => {

  //   }, [])

  //   const transformarrayOfCategories = (Object.fromEntries(
  //     arrayOfCategories.map((group, index) => [group, productsInSameGrops[index].at(2)])
  //   ))
  //   console.log(transformarrayOfCategories)
  // }

  // // const groupedByCategory = data.products.reduce((acc, product) => {
  // //   function makeArrayByKey(data, key) {
  // //     data.reduce((acc, product) => {
  // //       acc.push(product.key)
  // //     }, [])
  // //   }
  // //   if (!acc[product.category]) {
  // //     acc[product.category] = []
  // //   }
  // //   acc[product.category].push({
  // //     products: makeArrayByKey(data, 'title'),
  // //     title: product.title
  // //   })
  // //   return acc
  // // }, {})
  // // console.log(groupedByCategory)
  // fetchListOfProductsAndReturnPricesInGroup()
})()
