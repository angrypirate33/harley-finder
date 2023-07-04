import { useState } from 'react'
import { login } from '../../utilities/users-service'

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [error, setError] = useState('')

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
        setError('')
    }

    async function handleSubmit(evt) {
        evt.preventDefault()

        try {
           const user = await login(credentials)
           setUser(user)
        }
        catch {
            setError('Login Failed - Try Again')
        }
    }

    return (
        <div className="container">
            <div className="card black">
                <div className="card-content">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label className="white-text">Email</label>
                        <input type="email" name="email" className="white-text" value={credentials.email} onChange={handleChange} required />
                        
                        <label className="white-text">Password</label>
                        <input type="password" name="password" className="white-text" value={credentials.password} onChange={handleChange} required />
                        
                        <button type="submit" className="btn orange">LOG IN</button>
                    </form>
                    <p className="error-message white-text">&nbsp;{error}</p>
                </div>
            </div>
        </div>
    );    
}