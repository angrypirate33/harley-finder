import { useNavigate } from 'react-router-dom'
import { updateWishlist, deleteWishlist } from '../../utilities/wishlists-api'
import './WishlistCard.css'

export default function WishlistCard({ wishlist }) {

    const { _id, name, description, motorcycles, public: isPublic, createdBy } = wishlist
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            await deleteWishlist(_id)
            navigate('/wishlists')
        } catch (error) {
            console.log('Error deleting wishlist: ', error)
        }
    }

    return (
        <div className="card wishlist-card orange">
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>Description: {description}</p>
                <p>Motorcycles: {motorcycles.join(', ')}</p>
                <p>Public: {isPublic ? 'Yes' : 'No'}</p>
                <p>Created By: {createdBy}</p>
                <div className='card-action'>
                    <button className='btn black waves-effect waves-light'>Edit</button>
                    <button 
                        className='btn black waves-effect waves-light'
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
