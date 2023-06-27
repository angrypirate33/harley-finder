import { useState, useEffect } from 'react'
import './NewWishlistForm.css'

export default function NewWishlistForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')



    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
        <div className='row'>
            <div className='col s12 m8 offset-m2 l6 offset-l3'>
                <div className='card orange'>
                    <div className='card-content'>
                        <span className='card-title black-text'>Create New Wishlist</span>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input
                                        type='text'
                                        id='name'
                                        value={name}
                                        onChange={(evt) => setName(evt.target.value)}
                                        required
                                        className='black-text'
                                        autoComplete='off'
                                    />
                                    <label htmlFor='name' className='white-text'>Name</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <textarea
                                        id='description'
                                        className='materialize-textarea'
                                        value={description}
                                        onChange={(evt) => setDescription(evt.target.value)}
                                        autoComplete='off'
                                    ></textarea>
                                    <label htmlFor='description' className='white-text'>Description</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col s12'>
                                    <button
                                        className='btn black waves-effect waves-light'
                                        type='submit'
                                        name='action'
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}