import { Link } from 'react-router-dom';
import '../css/Homepage.css';

function Homepage() {
    return (
        <div className='homepage'>
            <div className='intro'>Welcome to our Shop i know it's empty but please be patient
                <div className='shop-link'><Link to='/shop'>Shop Now</Link></div>
            </div>
            
        </div>
    )
  }
  
  export default Homepage