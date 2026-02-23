import React, { useContext, useState } from 'react'
import './CSS/ShopCateogory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import dropdown_icon from '../Components/assets/dropdown_icon.png'

const ShopCateogory = (props) => {
  const { product } = useContext(ShopContext);

  const [activeImage, setActiveImage] = useState({})

  const prevImage = (id, images) => {
    setActiveImage(prev => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : images.length - 1
    }))
  }

  const nextImage = (id, images) => {
    setActiveImage(prev => ({
      ...prev,
      [id]: prev[id] < images.length - 1 ? prev[id] + 1 : 0
    }))
  }

  return (
    <div className="shop-category">
      <img className='shop-cateogory-banner' src={props.banner} alt='' />
      <div className="shopcateogory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-cateogorySort">
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className="shopcateogory-products">
        {product.map((item, i) => {
          const index = activeImage[item.id] ?? 0

          if (props.category === item.category) {
            return (
              <div className="item-wrapper" key={item.id}>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.images[index]}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />

                <button
                  className="img-btn left"
                  onClick={() => prevImage(item.id, item.images)}
                >
                  ‹
                </button>

                <button
                  className="img-btn right"
                  onClick={() => nextImage(item.id, item.images)}
                >
                  ›
                </button>
              </div>
            )
          } else {
            return null
          }
        })}

      </div>
      <div className="shopcateogory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCateogory

