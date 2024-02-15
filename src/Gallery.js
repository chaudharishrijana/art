import React from 'react';
import {Arts} from '../src/components/Arts/Arts';
import Footers from '../src/components/Footer/Footers';

const Gallery = () => { 
 

  return (
    <> 
   
    <h1 className ="text-center mt-3" style={{ fontFamily:'initial'}}>Original Artworks for Sale</h1>
         <p>&nbsp;</p>
        <hr style={{width:'1400px',margin :'auto',marginBottom:'20px'}}/>
            <div className="text-center" style={{ display:'flex',flexDirection:'column',alignItems:'center',   fontFamily:'revert-layer'}}>
             <p> Whether you are looking for an original painting or a high quality art, </p>
              Artistry Hub has many original paintings for sale from emerging artists around the world.
               </div>
               <hr style={{width:'1400px',margin :'auto',marginBottom:'20px'}}/>
             {/* <div className="arts" style={{align-items:'center'}}> */}
              <Arts/>
             
              <Footers/>
    </>
  )
}
export default Gallery;