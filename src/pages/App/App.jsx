import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import Nav  from '../../components/Nav/Nav'
import IndexPage from '../IndexPage/IndexPage'
import WishlistPage from '../WishlistPage/WishlistPage'
import AboutPage from '../AboutPage/AboutPage'
import MotorcycleSearchPage from '../MotorcycleSearchPage/MotorcycleSearchPage'
import MotorcycleDetailPage from '../MotorcycleDetailPage/MotorcycleDetailPage'
import WishlistDetailPage from '../WishlistDetailPage/WishlistDetailPage'


export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {
        user ?  
        <>
          <Nav user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/search' element={<MotorcycleSearchPage />} />
            <Route path='/wishlists' element={<WishlistPage user={user} />} />
            <Route path='/wishlists/:id' element={<WishlistDetailPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/motorcycles/:id' element={<MotorcycleDetailPage />} />
          </Routes>
        </>
        : 
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}

