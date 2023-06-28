import { useState } from 'react';
import plus from '../img/plus.png'
import minus from '../img/minus.png'
import '../css/ShopItems.css'

function ShopItems(props) {
    const { board, name, price } = props;
    const [value, setValue] = useState(0);

    const handleIncrement = (e) => {
        setValue(value + 1)
    }
    const handleDecrement = (e) => {
        if (value >= 1) setValue(value - 1)
    }
    const handleAddToCart = (e) => {
        const item = {
            board: board,
            name: name,
            price: price,
            quantity: value
        }

        props.addToCart(item);
        setValue(0)
    }

    return (
        <div className="paintings">
            <div className='align-painting'>
                <img src={board}/>
                <div className='title-name'>{name}</div>
                <div className='price-tag'>{price}$</div>
                <div className='item'>
                    <button onClick={handleDecrement} className='btn-decrement'>
                        <img src={minus} className='icon'/>
                    </button>
                    <button onClick={handleIncrement} className='btn-increment'>
                        <img src={plus} className='icon'/>
                    </button>
                    <input
                        type='number'
                        value={value}
                        className='no-arrows'
                    />
                    <button onClick={handleAddToCart} className='btn-add'>Add</button>
                </div>
           </div>
        </div>
    ) 
}

export default ShopItems