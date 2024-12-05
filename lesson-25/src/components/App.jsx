import { BrowserRouter, Route, Routes } from 'react-router'
import Category from '../pages/Category.jsx'
import Contacts from '../pages/Contacts.jsx'
import Home from '../pages/Home.jsx'
import Categories from '../pages/Сategories.jsx'
import Layout from './Layout.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:slug" element={<Category />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
