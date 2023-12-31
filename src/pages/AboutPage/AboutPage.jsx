import databaseLogo from '../../components/Images/database.svg'
import securityLogo from '../../components/Images/security.svg'
import backendLogo from '../../components/Images/web-development.svg'
import reactLogo from '../../components/Images/react.svg'
import './AboutPage.css'

export default function AboutPage() {
    
    return (
        <div className='container'>
            <div className='row'>
                <h2>About Harley-Finder</h2>
            </div>

            <div className='row'>
                <h4 className='center-align'>Technologies Used</h4>
            </div>

            <div className='row'>
                <div className='col s12 m4 offset-m2'>
                    <div className='card orange'>
                        <div className='card-image waves-effect waves-block waves-light'>
                            <div id='database-image-container'>
                                <img className='activator' id='database-logo' src={databaseLogo} alt='Database Logo'/>
                            </div>
                        </div>
                        <div className='card-content'>
                            <span className='card-title activator black-text text-darken-4'>Database<i className='material-icons right'>more_vert</i></span>
                        </div>
                        <div className='card-reveal orange'>
                            <span className='card-title black-text text-darken-4'>Database<i className='material-icons right'>close</i></span>
                            <p className='black-text'>MongoDB - NoSQL database<br /><br />Mongoose - Object Data Modeling (ODM) library</p>
                        </div>
                    </div>
                </div>

                <div className='col s12 m4'>
                    <div className='card orange'>
                        <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator' src={securityLogo} alt='Security Logo'/>
                        </div>
                        <div className='card-content'>
                            <span className='card-title activator grey-text text-darken-4'>Security<i className='material-icons right'>more_vert</i></span>
                        </div>
                        <div className='card-reveal orange'>
                            <span className='card-title grey-text text-darken-4'>Security<i className='material-icons right'>close</i></span>
                            <p className='black-text'>bcrypt - Password hashing middleware<br /><br />JWT - Toekn authentication<br /><br />dotenv - Secret keeper</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col s12 m4 offset-m2'>
                    <div className='card orange'>
                        <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator' src={backendLogo} alt='Backend Logo'/>
                        </div>
                        <div className='card-content'>
                            <span className='card-title activator grey-text text-darken-4'>Backend<i className='material-icons right'>more_vert</i></span>
                        </div>
                        <div className='card-reveal orange'>
                            <span className='card-title grey-text text-darken-4'>Backend<i className='material-icons right'>close</i></span>
                            <p className='black-text'>Node.js - Open-source, cross-platform, back-end JavaScript runtime environment<br /><br />Express - Web application framework for Node.js</p>
                        </div>
                    </div>
                </div>

                <div className='col s12 m4'>
                    <div className='card orange'>
                        <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator' src={reactLogo} alt='React Logo'/>
                        </div>
                        <div className='card-content'>
                            <span className='card-title activator grey-text text-darken-4'>Frontend<i className='material-icons right'>more_vert</i></span>
                        </div>
                        <div className='card-reveal orange'>
                            <span className='card-title grey-text text-darken-4'>Frontend<i className='material-icons right'>close</i></span>
                            <p className='black-text'>React - JavaScript library for building user interfaces<br /><br />Materialize - Modern responsive front-end framework</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}