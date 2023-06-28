import { useEffect, useState } from 'react'
import WishlistCard from '../../components/WishlistCard/WishlistCard'
import NewWishlistForm from '../../components/NewWishlistForm/NewWishlistForm'
import * as wishlistsAPI from '../../utilities/wishlists-api'
import './WishlistPage.css'



export default function WishlistPage() {
  const [wishlists, setWishlists] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadWishlists = async () => {
      try {
        const response = await wishlistsAPI.getAllWishlists()
        console.log('API Response:', response)
        setWishlists(response)
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
        <div>
          <h3>No wishlists yet</h3>
          <h5>Create your first wishlist using the form below:</h5>
        </div>
      ) : (
        <div className="wishlist-list">
          {wishlists.map((wishlist) => (
            <li key={wishlist._id}>{wishlist.name}</li>
          ))}
        </div>
      )}
      <NewWishlistForm />
    </div>
  )
}