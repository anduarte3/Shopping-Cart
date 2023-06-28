import { Link } from 'react-router-dom';
import '../css/Homepage.css';

function Homepage() {
    return (
        <div className='homepage-container'>
            <div className='intro'>Find your favorite wallpapers here!
                <div className='shop-link'><Link to='/shop' className='shop-now'>Shop Now</Link></div>
            </div>
        </div>
    )
  }
  
  export default Homepage