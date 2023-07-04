import { Component } from 'react'
import { signUp } from '../../utilities/users-service'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm

            const user = await signUp(formData)
            this.props.setUser(user)
        }
        catch {
            this.setState({ error: 'Sign Up Failed - Try Again' })
        }
    }

    render() {
    const disable = this.state.password !== this.state.confirm
    return (
        <div className="container">
            <div className="card black">
                <div className="card-content">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label className="white-text">Name</label>
                        <input type="text" name="name" className="white-text" value={this.state.name} onChange={this.handleChange} required />
                        
                        <label className="white-text">Email</label>
                        <input type="email" name="email" className="white-text" value={this.state.email} onChange={this.handleChange} required />
                        
                        <label className="white-text">Password</label>
                        <input type="password" name="password" className="white-text" value={this.state.password} onChange={this.handleChange} required />
                        
                        <label className="white-text">Confirm</label>
                        <input type="password" name="confirm" className="white-text" value={this.state.confirm} onChange={this.handleChange} required />
                        
                        <button type="submit" className="btn orange" disabled={disable}>SIGN UP</button>
                    </form>
                    <p className="error-message white-text">&nbsp;{this.state.error}</p>
                </div>
            </div>
        </div>
    );
    }      
}