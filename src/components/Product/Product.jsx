import React from 'react';
import color from './color.jpg';
import horse from './horse.jpg';
import green from './green.jpg';
import water from './water.jpg';
import './Product.css';

const Product =() =>{
    return (
        
        <div className='container_product' >
          <div className='product' >
          <div className='top_card'>
                
           
               <img className='color' src={color} width={320} alt='null'></img>
                  <div className='product_description'>
                    <p>Defining Colors </p>
                    <p>Arthor Liuetient</p>
                    
                     </div>
                
                       </div>
                
                         <div className='bottom_card'>
                          <img className='horse' src={horse} width={320} alt='null'></img>

                            <div className='product_description'>
                              <p>Nature Painting</p>
                               <p>Ms. Sarah</p>
                            </div>
                          </div>

                          <div className='side_card'>
                
           
               <img className='green' src={green} width={320} alt='null'></img>
                  <div className='product_description'>
                    <p>THE GREEN PARADISE</p>
                    <p>Jin-woo Presena</p>
                   
                     </div>
                
                       </div>
                       <div className='left_card'>
                
           
               <img className='water' src={water} width={320} alt='null'></img>
                  <div className='product_description'>
                    <p>Soap Bubble Stories</p>
                    <p>Marlies Plank</p>
                    
                     </div>
                
                       </div>
                
             </div>

        </div>    

            
           

              

      
        
    );
}
export default Product;