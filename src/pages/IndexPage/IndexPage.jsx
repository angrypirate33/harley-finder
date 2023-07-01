import harleyLogo from '../../components/harley.svg'
import './IndexPage.css'

export default function IndexPage() {
  
    return (
      <div className='container' id='index-header-container'>
        <div className='logo-container'>
          <img src={harleyLogo} alt='Harley Logo' id='harley-logo' /> 
        </div>
        <h1 className='heading'>IndexPage</h1>
      </div>
    )
}