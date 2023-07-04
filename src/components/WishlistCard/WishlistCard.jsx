import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateWishlist, deleteWishlist, removeMotorcycle } from '../../utilities/wishlists-api'
import './WishlistCard.css'

export default function WishlistCard({ wishlist, onEdit }) {

    const { _id, name, description, motorcycles: initialMotorcycles, public: isPublic, createdBy } = wishlist

    const [motorcycles, setMotorcycles] = useState(initialMotorcycles)
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
            [name]: newValue
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

    const handleRemove = async (motorcycle) => {
        try {
            await removeMotorcycle(motorcycle._id, _id)
            console.log('wishlist._id in handleRemove: ', wishlist._id)
            const updatedMotorcycles = motorcycles.filter(m => m._id !== motorcycle._id)
            setMotorcycles(updatedMotorcycles)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='card wishlist-card orange'>
            <div className='card-content flow-text'>
                {isEditing ? (
                    <form onSubmit={handleSave}>
                        <div className='input-field'>
                            <input id={`name-${_id}`} type='text' name='name' value={updatedData.name} onChange={handleChange} />
                            <label htmlFor={`name-${_id}`} className='active'>Name</label>
                        </div>
                        <div className='input-field'>
                            <textarea
                                id={`description-${_id}`}
                                className='materialize-textarea'
                                name='description'
                                value={updatedData.description}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor={`description-${_id}`} className='active'>Description</label>
                        </div>
                        <div className='input-field'>
                            <label className='active'>
                                <input
                                id={`public-${_id}`}
                                type='checkbox'
                                name='public'
                                checked={updatedData.public}
                                onChange={handleChange}
                                />
                                <span>Public</span>
                            </label>
                        </div>
                        <button className='btn black waves-effect waves-light' type='submit'>
                            Save
                        </button>
                    </form>
                ) : (
                    <>
                        <span className='card-title flow-text' id='wishlist-title'>{name}</span>
                        <p id='wishlist-description'>{description}</p>
                        <br />
                        <p>
                            <ul id='wishlist-motorcycles'>
                                {motorcycles.map(motorcycle => (
                                    <li id='wishlist-motorcycle' key={motorcycle._id}>
                                        <Link to={`/motorcycles/${motorcycle._id}`}>{motorcycle.year} {motorcycle.model}</Link>
                                        <i 
                                            className="material-icons" 
                                            id='trashcan'
                                            onClick={() => handleRemove(motorcycle)}
                                        >
                                            delete
                                        </i>
                                    </li>
                                ))}
                            </ul>
                        </p>
                        <p>Public: {isPublic ? 'Yes' : 'No'}</p>
                        <p id='created-by'>Created By: {createdBy}</p>
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
