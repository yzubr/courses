import { BrowserRouter, Route, Routes } from 'react-router'
import styles from './App.module.css'
import Layout from './layout.jsx'
import Categories from './pages/categories.jsx'
import Category from './pages/Category.jsx'
import CreateCategory from './pages/CreateCategory.jsx'
import EditCategory from './pages/EditCategory.jsx'
import Home from './pages/home.jsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/categories/:slug/edit" element={<EditCategory />} />
            <Route path="categories/create" element={<CreateCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
