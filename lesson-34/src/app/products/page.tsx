import Image from 'next/image'
import Link from 'next/link'
import imageComingSoon from '@/assets/images/image.png'
import AddToCartButton from '@/components/AddToCartButton'
import AddToFavouriteButton from '@/components/AddToFavouriteButton'
import getProducts from '@/queries/get-products'
import styles from '@/styles/components.module.css'
import generateImageUrl from '@/utilities/generate-image-url'

export default async function Page() {
  const products = await getProducts()

  return (
    <>
      <header className={styles.header}>
        <h1>Products List</h1>
        <Link href="/products/create">Create product</Link>
      </header>
      <ul className={styles.products}>
        {products.map((product) => (
          <li key={product.id} className={styles.product}>
            <article>
              <div className={styles.imageContainer}>
                {product.path === null
                  ? (
                      <Image
                        src={imageComingSoon}
                        alt="Image coming soon"
                        priority
                        unoptimized
                      />
                    )
                  : (
                      <Image
                        src={generateImageUrl(product.path)}
                        alt={product.name}
                        width={product.width}
                        height={product.height}
                        priority
                        unoptimized
                      />
                    )}
                <AddToFavouriteButton productId={product.id} />
              </div>
              <h2>{product.name}</h2>
              <div>
                <Link href={`/products/${product.id}/edite`} className={styles.button}>Edite product</Link>
                <AddToCartButton productId={product.id} />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>

  )
}
