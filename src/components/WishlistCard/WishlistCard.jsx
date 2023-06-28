
import './WishlistCard.css'

export default function WishlistCard({ wishlist }) {

    const { name, description, user, motorcycles, public: isPublic, createdBy } = wishlist

    return (
        <div className="card wishlist-card orange">
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>Description: {description}</p>
                <p>User: {user}</p>
                <p>Motorcycles: {motorcycles.join(', ')}</p>
                <p>Public: {isPublic ? 'Yes' : 'No'}</p>
                <p>Created By: {createdBy}</p>
            </div>
        </div>
    )
}