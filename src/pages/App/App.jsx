import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import Nav  from '../../components/Nav/Nav'
import IndexPage from '../IndexPage/IndexPage'
import WishlistPage from '../WishlistPage/WishlistPage'
import AboutPage from '../AboutPage/AboutPage'
import { getUser } from '../../utilities/users-service'


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
            <Route path='/wishlist' element={<WishlistPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </>
        : 
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}

