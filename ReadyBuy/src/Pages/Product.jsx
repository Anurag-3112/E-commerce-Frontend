import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {product}= useContext(ShopContext);
  const {productId}= useParams();
  const s_product= product.find((e)=> e.id==productId);
  return (
    <div>
      <Breadcrum s_product={s_product}/>
      <ProductDisplay s_product={s_product}/>
      <DiscriptionBox/>
      <RelatedProducts s_product={s_product}/>
    </div>
  )
}

export default Product
