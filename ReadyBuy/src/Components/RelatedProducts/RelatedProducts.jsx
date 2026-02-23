import React from 'react'
import './RelatedProducts.css'
import product from '../assets/product'
import Item from '../Item/Item'

const RelatedProducts = ({ s_product }) => {

  if (!s_product) return null;

  const related = product
    .filter((item) =>
      item.category === s_product.category &&
      item.id !== s_product.id
    )
    .slice(0, 4);

  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {related.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.images[0]}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts