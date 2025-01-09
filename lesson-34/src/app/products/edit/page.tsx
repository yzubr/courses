import UpdateProductForm from '@/components/EditeProductForm'
import supabase from '@/modules/supabase'
import getCategories from '@/queries/get-categories'
import styles from '@/styles/components.module.css'

export default async function Page({ params }) {
  const categories = await getCategories()
  const productId = params.id

  // Получаем данные о продукте из базы данных
  const { data: existingProduct, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId)
    .single()

  if (error || !existingProduct) {
    // Обработка ошибки, если продукт не найден
    return <p>Ошибка: продукт не найден.</p>
  }

  return (
    <>
      <header className={styles.header}>
        <h1>Edit product</h1>
      </header>
      <UpdateProductForm
        categories={categories}
        currentProduct={existingProduct}
        hasImage={Boolean(existingProduct.imagePath)}
      />
    </>
  )
}
