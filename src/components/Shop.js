import { useState } from 'react';
import cloudy from '../img/cloudy.png'
import night from '../img/night.png'
import rain from '../img/rain.png'
import spring from '../img/spring.png'
import summer from '../img/summer.png'
import winter from '../img/winter.png'
import ShopItems from './ShopItems'
import '../css/Shop.css'

function Shop({ cartItems, setCartItems }) {
    
    let paintings = [
        {
            src: cloudy,
            title: 'Cloudy',
            price: 19
        },
        {
            src: night,
            title: 'Night',
            price: 19
        }, 
        {
            src: rain,
            title: 'Rain',
            price: 19
        },
        {
            src: spring,
            title: 'Spring',
            price: 19
        },
        {
            src: summer,
            title: 'Summer',
            price: 19
        },
        {
            src: winter,
            title: 'Winter',
            price: 19
        } 
    ]

    const addToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item])
    }

    return (
        <div className="shop-page">
            <div className="shop-intro">Enjoy our products!</div>
                <div className='items'>
                    {paintings.map((board) =>
                        <ShopItems
                            board={board.src}
                            name={board.title}
                            price={board.price}
                            addToCart={addToCart}
                        />
                    )}
                </div>
        </div>
    )
  }
  
  export default Shop

  //Add checkout, display current amounts and total value, removing items will change the value