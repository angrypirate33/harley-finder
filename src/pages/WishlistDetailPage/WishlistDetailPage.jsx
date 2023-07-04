import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as wishlistsAPI from '../../utilities/wishlists-api'
import WishlistCard from '../../components/WishlistCard/WishlistCard'
import './WishlistDetailPage.css'

export default function WishlistDetailPage() {

    const [wishlist, setWishlist] = useState(null)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const loadWishlist = async () => {
            try {
                const response = await wishlistsAPI.getWishlistById(id)
                setWishlist(response)
            } catch (error) {
                console.log(error)
                setError('Failed to fetch wishlist')
            }
        }

        loadWishlist()
    }, [id])

    if (error) {
        return (
            <div>
                Error: {error}
            </div>
        )
    }

    if (!wishlist) {
        return (
            <div>
                Loading wishlist...
            </div>
        )
    }

    return (
        <div>
            <h2>Wishlist Details</h2>
            <WishlistCard wishlist={wishlist} />
        </div>
    )
}