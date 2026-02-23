import React, { useState, useEffect, useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import stardull_icon from '../assets/stardull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    const { s_product } = props;

    const [mainImage, setMainImage] = useState(
        s_product ? s_product.images[0] : null
    );

    useEffect(() => {
        if (s_product && s_product.images && s_product.images.length > 0) {
            setMainImage(s_product.images[0]);
        }
    }, [s_product]);

    if (!s_product) {
        return <div>Loading...</div>;
    }

    const quantity = cartItems[s_product.id] || 0;

    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    {s_product.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={s_product.name}
                            onClick={() => setMainImage(img)}
                            className={mainImage === img ? "active-thumb" : ""}
                        />
                    ))}
                </div>

                <div className="product-display-img">
                    <img src={mainImage} alt={s_product.name} />
                </div>
            </div>

            <div className="product-display-right">
                <h1>{s_product.name}</h1>

                <div className="product-display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={stardull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="product-display-right-prices">
                    <div className="old-price">
                        ₹{s_product.old_price}
                    </div>
                    <div className="new-price">
                        ₹{s_product.new_price}
                    </div>
                </div>

                <div className="product-display-right-size">
                    <h3>Select Size</h3>
                    <div className="product-display-right-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                {quantity === 0 ? (
                    <button 
                        onClick={() => addToCart(s_product.id)} 
                        className="btn btn-primary mt-3"
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div className="product-quantity-controls mt-3">
                        <button 
                            className="qty-btn minus"
                            onClick={() => removeFromCart(s_product.id)}
                        >
                            −
                        </button>

                        <span className="qty-display">
                            {quantity}
                        </span>

                        <button 
                            className="qty-btn plus"
                            onClick={() => addToCart(s_product.id)}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDisplay