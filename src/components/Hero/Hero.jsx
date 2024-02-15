import React from 'react'
import './Hero.css';

import Footers from '../Footer/Footers';
import Product from '../Product/Product';


const Hero = () => {
  
  return (


    <div >
     
     
    <div className='hero' >
      <div className="hero-left">
      
      
     
        <div className="hero-text-wrapper">
          <div className='hero-content'>

        
          <h2>Discover Art You Love</h2>

          <p className='hero-subtitle'>
            From the World's Leading Online Gallery
          </p> 
          </div>
         

          
        </div> 
        
        <div className='website-introduction'>
         <p >
            Welcome to our online gallery where you can explore a diverse collection of beautiful artworks.
             Whether you're a seasoned art enthusiast or a newcomer, we have something special for everyone.
           </p>
        </div>

       
        <p>&nbsp;</p>
        <hr style={{width:'1400px',margin :'auto',marginBottom:'20px'}}/>
          <div className='shop-by-category'>
            <h3>Shop by Category</h3>
            <div className='category-boxes'>
              <div className='category-box'>
                <p>Paintings</p>
              </div>
              <div className='category-box'>
                <p>Sketch</p>
              </div>
              <div className='category-box'>
                <p>Oil Paintings</p>
              </div>
              <div className='category-box'>
                <p>Portraits</p>
              </div>
            </div>
            </div>
            <hr style={{width:'1400px',margin :'auto',marginBottom:'20px'}}/>

            <div className='featured-collection '>
            <p>&nbsp;</p>
              <p>Featured Collection</p>
            </div>
            
          <div className='product-image'>
        <Product/>
        
       
        
        </div>
      </div>

      <div className="hero-latest-btn">
        {/* Your button content goes here */}
      </div>

      <div className="hero-right">
        {/* Content for the right side goes here */}

        </div>
      </div>
                
                
        <Footers/>

      
    </div>
  ); 
};

export default Hero;
