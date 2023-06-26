import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function Nav({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <Link to='/'>All Harleys</Link>
            &nbsp; | &nbsp;
            <Link to='/wishlist'>Your Wishlists</Link>
            &nbsp;&nbsp;<span>Welcome, {user.name}</span>
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}