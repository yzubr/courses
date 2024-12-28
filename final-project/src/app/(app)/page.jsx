import Image from 'next/image'
import Link from 'next/link'
import BeachSpiderLily from '../../assets/images/BeachSpiderLily.png'
import style from './Page.module.css'

export default function Page() {
  return (
    <>
      <section className={style['greeting-section']}>
        <div className={style['greeting-section-text-block']}>
          <h2>Welcome to GreenShop</h2>
          <h1>
            Let’s Make a
            Better
            <span> Planet</span>
          </h1>
          <p>
            We are an online plant shop offering a wide range of cheap and trendy plants.
            Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <Link href="/shop" className={style.button}>Shop now</Link>
        </div>
        <Image src={BeachSpiderLily} alt="Beach Spider Lily" placeholder="blur" width={507} height={550} />
      </section>
      <section className={style['products-section']}>
        {/* <aside>
          <Category />
        </aside> */}
        <article>
          <ul>
            <button type="button">All Plants</button>
            <button type="button">New Arrivals</button>
            <button type="button">Sale</button>
            <form>
              <label htmlFor="sort-select">Sort by: </label>
              <select name="sort" id="sort-select">
                <option value="Default sorting">Default sorting</option>
                <option value="Price (lowest first)">Price (Lowest first)</option>
                <option value="Price (highest first)">Price (highest first)</option>
              </select>
            </form>
          </ul>
        </article>
      </section>
    </>
  )
}
