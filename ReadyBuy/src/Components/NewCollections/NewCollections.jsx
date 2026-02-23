import React, { useState } from 'react'
import './NewCollections.css'
import product from '../assets/product'
import Item from '../Item/Item'

const NewCollections = () => {
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
    <div className='new-collections' id="collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {product.map((item) => {
          const index = activeImage[item.id] ?? 0

          return (
            <div className="item-wrapper" key={item.id}>
              <Item
                id={item.id}
                name={item.name}
                image={item.images[index]}
                new_price={item.new_price}
                old_price={item.old_price}
              />

              {/* hover buttons */}
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
        })}
      </div>
    </div>
  )
}

export default NewCollections
