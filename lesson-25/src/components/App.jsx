import { BrowserRouter, Route, Routes } from 'react-router'
import styles from './App.module.css'
import Layout from './layout.jsx'
import Category from './pages/Category.jsx'
import Contacts from './pages/Contacts.jsx'
import Home from './pages/home.jsx'
import Categories from './pages/Сategories.jsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element= {<Layout/>}>
            <Route index element= {<Home/>}></Route>
            <Route path="categories" element = {<Categories />}></Route>
            <Route path="/categories/:slug" element ={<Category />} />
            <Route path="contacts" element = {<Contacts />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
