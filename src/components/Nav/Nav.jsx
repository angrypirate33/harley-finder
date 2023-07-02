import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './Nav.css'

export default function Nav({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    useEffect(() => {
        let elems = document.querySelectorAll('.sidenav')
        let instances = window.M.Sidenav.init(elems, {})
    }, [])

    return (
        <header>
            <div className='navbar-fixed'>
                <nav className='orange'>
                    <div className='nav-wrapper container'>
                        <a href="#" data-target="mobile-links" className="sidenav-trigger left"><i className="material-icons">menu</i></a>
                        <span className='black-text left' id='welcomeMessage' >Welcome, <span id='userName'>{user.name}</span>!</span>
                        <ul className='right hide-on-med-and-down nav-links'>
                            <li><Link to='/' className='black-text waves-effect waves-light'>Home</Link></li>
                            <li><Link to='/search' className='black-text waves-effect waves-light'>Search Harleys</Link></li>
                            <li><Link to='/wishlists' className='black-text waves-effect waves-light'>Your Wishlists</Link></li>
                            <li><Link to='/about' className='black-text waves-effect waves-light'>About</Link></li>
                            <li><Link to="" onClick={handleLogOut} className='black-text waves-effect waves-light'>Log Out</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
                <ul className="sidenav" id="mobile-links">
                    <li><Link to='/' className='black-text waves-effect waves-light'>Home</Link></li>
                    <li><Link to='/search' className='black-text waves-effect waves-light'>Search Harleys</Link></li>
                    <li><Link to='/wishlists' className='black-text waves-effect waves-light'>Your Wishlists</Link></li>
                    <li><Link to='/about' className='black-text waves-effect waves-light'>About</Link></li>
                    <li><Link to="" onClick={handleLogOut} className='black-text waves-effect waves-light'>Log Out</Link></li>
                </ul>
        </header>
    )
}