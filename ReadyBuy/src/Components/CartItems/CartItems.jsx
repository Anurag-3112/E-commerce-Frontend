import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const { product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    const getTotalAmount = () => {
        let total = 0;
        product.forEach((item) => {
            if (cartItems[item.id] > 0) {
                total += item.new_price * cartItems[item.id];
            }
        });
        return total;
    };

    const getTotalItems = () => {
        let count = 0;
        for (const itemId in cartItems) {
            count += cartItems[itemId];
        }
        return count;
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {product.map((item) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div key={item.id}>
                            <div className="cartitems-format cartitems-format-main">
    
    <img
        src={item.images[0]}
        alt={item.name}
        className='carticon-product-icon'
    />

    <p>{item.name}</p>

    <p>₹{item.new_price}</p>

    <div className="cartitems-quantity-controls">
        <button
            className="cartitems-qty-btn minus"
            onClick={() => removeFromCart(item.id)}
        >
            −
        </button>

        <span className="cartitems-quantity">
            {cartItems[item.id]}
        </span>

        <button
            className="cartitems-qty-btn plus"
            onClick={() => addToCart(item.id)}
        >
            +
        </button>
    </div>

    <p>
        ₹{item.new_price * cartItems[item.id]}
    </p>

    <button
        className='cartitems-remove-btn'
        onClick={() => removeFromCart(item.id)}
    >
        Remove
    </button>
</div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h2>Cart Totals</h2>

                    <div>
                        <div className="cartitems-total-item">
                            <p>Total Items</p>
                            <p>{getTotalItems()}</p>
                        </div>
                        <hr />

                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>₹{getTotalAmount()}</p>
                        </div>
                        <hr />

                        <div className="cartitems-total-item">
                            <h3>Grand Total</h3>
                            <h3>₹{getTotalAmount()}</h3>
                        </div>
                    </div>

                    <button className="cartitems-checkout">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItems