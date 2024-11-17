import CardItem from '../CardRendering/CardRendering.jsx'
import Greeting from '../Greeting/Greeting.jsx'
import UserStatus from '../UserStatus/UserStatus.jsx'
import styles from './App.module.css'
import products from '/src/data/products.js'

export default function App() {
  return (
    <>
      <div className={styles.separator}>
        <p>Task 1</p>
      </div>
      <Greeting name = {'Robert'}/>
      <div className={styles.separator}>
        <p>Task 2</p>
      </div>
      <UserStatus isOnline = {true}/>
      <div className={styles.separator}>
        <p>Task 3</p>
      </div>
      <h1>List of products</h1>
      <ul>
        {products.map((product) => (
          <CardItem key={product.id} product = {product}/>
        ))}
      </ul>
    </>
  )
}
