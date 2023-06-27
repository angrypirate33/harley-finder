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
            <form className='col s12' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            autoComplete='off'
                            onChange={(evt) => setName(evt.target.value)}
                            required
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <textarea 
                            id='description'
                            className='materialize-textarea'
                            value={description}
                            autoComplete='off'
                            onChange={(evt) => setDescription(evt.target.value)}
                        ></textarea>
                        <label htmlFor='description'>Description</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12'>
                        <button
                            className='btn waves-effect waves-light'
                            type='submit'
                            name='action'
                        >
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}