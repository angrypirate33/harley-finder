import { Link } from 'react-router-dom'
import harleyLogo from '../../components/harley.svg'
import './IndexPage.scss'

export default function IndexPage() {
  return (
      <div className='landing-page-container'>
          <header className='landing-page-header'>
              <div className='logo-container'>
                  <img src={harleyLogo} alt='Harley Logo' id='harley-logo' />
              </div>
              <h1 className='heading'>Welcome to Harley Davidson Tracker</h1>
          </header>

          <main className='landing-page-main'>
              <section className='intro-section'>
                  <h2>Explore Over 1500 Harley Davidson Models</h2>
                  <p>
                      Dive into the world of Harley Davidson. Search through an extensive database of over 1500 models. 
                      Find detailed specifications, compare models, and find the perfect ride for you.
                  </p>
                  <Link to='/search' className='cta-button'>Start Exploring</Link> 
              </section>

              <section className='wishlist-section'>
                  <h2>Create Your Wishlist</h2>
                  <p>
                      Don't lose track of your favorite Harley Davidson motorcycles. Create your wishlist and keep an eye on 
                      the models you're interested in. Start building your dream garage today!
                  </p>
                  <Link to='/wishlist' className='cta-button'>Create Wishlist</Link>
              </section>
          </main>

          <footer className='landing-page-footer'>
              <p>&copy; {new Date().getFullYear()} Harley Davidson Tracker. All rights reserved.</p>
          </footer>
      </div>
  );
}