import { useEffect, useState } from 'react'
import WishlistCard from '../../components/WishlistCard/WishlistCard'
import NewWishlistForm from '../../components/NewWishlistForm/NewWishlistForm'
import * as wishlistsAPI from '../../utilities/wishlists-api'
import './WishlistPage.css'



export default function WishlistPage() {
  const [wishlists, setWishlists] = useState([])

  useEffect(() => {
    const loadWishlists = async () => {
      try {
        const response = await wishlistsAPI.getAllWishlists()
        console.log('API Response:', response.data)
        setWishlists(response.data)
      } catch(error) {
        console.log(error)
      }
    }
    loadWishlists()
  }, [])

  return (
    <div>
      <h1>WishlistPage</h1>
      {wishlists.length === 0 ? (
        <p>No wishlists yet</p>
      ) : (
        <div className="wishlist-list">
          {wishlists.map((wishlist) => (
            <WishlistCard key={wishlist._id} wishlist={wishlist} />
          ))}
        </div>
      )}
      <NewWishlistForm />
    </div>
  )
}