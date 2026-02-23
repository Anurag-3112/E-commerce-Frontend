import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/arrow.png'

const Breadcrum = (props) => {
    const {s_product}=props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt=''/>
      SHOP <img src={arrow_icon} alt=''/>
      {s_product.category} <img src={arrow_icon} alt=''/>
      {s_product.name}
    </div>
  )
}

export default Breadcrum
