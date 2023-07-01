import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './Nav.css'

export default function Nav({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <div className='navbar-fixed'>
            <nav className='orange'>
                <div className='nav-wrapper container'>
                    <span className='black-text left' id='welcomeMessage' >Welcome, <span id='userName'>{user.name}</span>!</span>
                    <Link to='/search' className='black-text waves-effect waves-light navLink'>Search Harleys</Link>
                    <Link to='/wishlists' className='black-text waves-effect waves-light navLink'>Your Wishlists</Link>
                    <Link to='/about' className='black-text waves-effect waves-light navLink'>About</Link>
                    &nbsp;&nbsp;<Link to="" onClick={handleLogOut} className='black-text waves-effect waves-light right' id='logoutLink'>Log Out</Link>
                </div>
            </nav>
        </div>
    )
}