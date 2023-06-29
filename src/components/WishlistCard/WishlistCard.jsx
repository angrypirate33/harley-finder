import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateWishlist, deleteWishlist } from '../../utilities/wishlists-api'
import './WishlistCard.css'

export default function WishlistCard({ wishlist, onEdit }) {

    const { _id, name, description, motorcycles, public: isPublic, createdBy } = wishlist
    const [isEditing, setIsEditing] = useState(false)
    const [updatedData, setUpdatedData] = useState({ name, description, public: isPublic })

    const navigate = useNavigate()
    
    const handleEdit = () => {
        setIsEditing(true)
    }
    
    const handleSave = async () => {
        try {
            const updatedWishlist = { ...updatedData, public: updatedData.public }
            await updateWishlist(_id, updatedWishlist)
            setIsEditing(false)
        } catch (error) {
            console.log('Failed to update wishlist: ', error.message)
        }
    }

    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const newValue = type === 'checkbox' ? checked : value
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

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
                {isEditing ? (
                    <form onSubmit={handleSave}>
                        <div className="input-field">
                            <input id={`name-${_id}`} type="text" name="name" value={updatedData.name} onChange={handleChange} />
                            <label htmlFor={`name-${_id}`}>Name</label>
                        </div>
                        <div className="input-field">
                            <textarea
                                id={`description-${_id}`}
                                className="materialize-textarea"
                                name="description"
                                value={updatedData.description}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor={`description-${_id}`}>Description</label>
                        </div>
                        <div className="input-field">
                            <label>
                                <input
                                id={`public-${_id}`}
                                type="checkbox"
                                name="public"
                                checked={updatedData.public}
                                onChange={handleChange}
                                />
                                <span>Public</span>
                            </label>
                        </div>
                        <button className="btn black waves-effect waves-light" type="submit">
                            Save
                        </button>
                    </form>
                ) : (
                    <>
                        <span className="card-title">{name}</span>
                        <p>Description: {description}</p>
                        <p>Motorcycles: {motorcycles.join(', ')}</p>
                        <p>Public: {isPublic ? 'Yes' : 'No'}</p>
                        <p>Created By: {createdBy}</p>
                        <div className='card-action'>
                            <button 
                                className='btn black waves-effect waves-light'
                                onClick={handleEdit}
                            >
                                Edit
                            </button>
                            <button 
                                className='btn black waves-effect waves-light'
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
