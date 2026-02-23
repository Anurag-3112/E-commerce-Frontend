import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = () => {
    return (
        <div className='discriptionBox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box-fade">
                    Reviwes (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    This product is made with high-quality materials designed for
                    comfort, durability, and style. It is perfect for everyday use
                    and offers a modern design that suits all occasions. The fabric
                    is breathable, lightweight, and easy to maintain, making it an
                    ideal choice for long-term use.
                </p>

                <p>
                    Whether you are looking for premium quality, elegant design, or
                    reliable performance, this product delivers excellent value.
                    Carefully crafted to meet customer expectations, it ensures
                    maximum satisfaction and a great user experience.
                </p>
            </div>
        </div>
    )
}

export default DiscriptionBox
