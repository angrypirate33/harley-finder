import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NewWishlistForm from '../../components/NewWishlistForm/NewWishlistForm'
import * as wishlistsAPI from '../../utilities/wishlists-api'
import './WishlistPage.css'


export default function WishlistPage({ user }) {
  const [wishlists, setWishlists] = useState([])
  const [error, setError] = useState(null)
  const [wishlistCreated, setWishlistCreated] = useState(false)

  useEffect(() => {
    const loadWishlists = async () => {
      try {
        const response = await wishlistsAPI.getAllWishlists()
        setWishlists(response)
      } catch(error) {
        console.log(error)
      }
    }
    loadWishlists()
    setWishlistCreated(false)
  }, [wishlistCreated])

  const handleWishlistCreated = async () => {
    try {
      setWishlistCreated(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {wishlists.length === 0 ? (
        <div>
          <h3>No wishlists yet</h3>
          <h5>Create your first wishlist using the form below:</h5>
        </div>
      ) : (
        <div className="wishlist-list">
          <ul className="collection with-header">
            <li className='collection-header orange'>
              <h4 className='black-text'>{user.name}'s Wishlists</h4>
            </li>
              {wishlists.map((wishlist) => (
                <li key={wishlist._id} className="collection-item orange">
                  <Link className='black-text' to={`/wishlists/${wishlist._id}`}>
                    {wishlist.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
      <NewWishlistForm onWishlistCreated={handleWishlistCreated} />
    </div>
  )
}