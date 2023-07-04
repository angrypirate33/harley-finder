import './AuthPage.css'
import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {

    const [userPref, setUserPref] = useState('signup')

    function handlePref() {
      if ( userPref === 'signup' ) {
      setUserPref('login')
    } else {
      setUserPref('signup')
    }
  }
  
    return (
      <div className='container'>
        <div className='row'>
            <div className='col s12 m8 offset-m2'>
                <div className='card orange darken-1' id='login-card'>
                    <div className='card-content black-text' id='login-signup-form'>
                        <span className='card-title center' id='welcome-message'>
                          Welcome to Harley-Finder
                        </span>
                        {userPref === 'signup' 
                            ? <LoginForm setUser={setUser} /> 
                            : <SignUpForm setUser={setUser} />}
                    </div>
                    <div className='card-action'>
                        <a className='waves-effect waves-light btn black' onClick={handlePref}>
                            {userPref === 'login' 
                                ? 'Already a member? Log In' 
                                : 'Need an Account? Sign Up' }
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }