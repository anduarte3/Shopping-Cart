
function Checkout({ cartItems, setCartItems }) {

    console.log(cartItems);
    return (
        <div className="checkout-page">
            <h2>Cart Items:</h2>
            {cartItems.map((item, index) => (
            <div key={index}>
                <img src={item.board} alt={item.title} />
                <p>{item.title}</p>
                <p>{item.quantity}</p>
                <p>Price: {item.price*item.quantity}$</p>
                {/* <p>Total Price: {item.price*item.quantity}$</p> */}
                {/* Additional details or functionalities */}
            </div>
            ))}
        </div>
    )
}

export default Checkout