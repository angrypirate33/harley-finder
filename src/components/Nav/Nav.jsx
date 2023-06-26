import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './Nav.css'

export default function Nav({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className='navbar-fixed orange'>
            <div className='nav-wrapper'>
                <span className='black-text left' id='welcomeMessage' >Welcome, {user.name}</span>
                <Link to='/' className='black-text waves-effect waves-light'>All Harleys</Link>
                <span className='black-text'>&nbsp; | &nbsp;</span>
                <Link to='/wishlist' className='black-text waves-effect waves-light'>Your Wishlists</Link>
                &nbsp;&nbsp;<Link to="" onClick={handleLogOut} className='black-text waves-effect waves-light right' id='logoutLink'>Log Out</Link>
            </div>
        </nav>
    )
}