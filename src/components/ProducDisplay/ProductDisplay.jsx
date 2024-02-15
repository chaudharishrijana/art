import React from 'react'
// import kitty from '../src/assets/kitty.jpg';
import './ProductDisplay.css';
import { useLocation } from 'react-router-dom';

export const ProductDisplay = () => {
  const location = useLocation();

  const state = location.state || {};

  const {name, price, description, image} = location.state
  // console.log(props?.description)
  return (
    <div className='product-display' > 
    <img src={image} alt="Kitty" className='image'/>
    <div className='details'>
        <h2 className='title'>{name}</h2>
        <p className='price'>{price}</p>
        <p className='description'>{description}</p>
        <button className='view-button'>View</button>
        <button className='add-to-cart-button'>Add to Cart</button>
    
   
        
         
    </div>

    </div>
  )
}
