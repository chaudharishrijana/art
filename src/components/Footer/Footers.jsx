import React from 'react'
import './Footers.css'

 const Footers = () => {
  return (
    <div  className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links-div'>
                    <h4>For Buyers</h4>
                    <a href="/hero">
                        <p>Buyer Help</p>
                    </a>
                    <a href="/buyerfaq">
                        <p>Buyer FAQ</p>
                    </a>
                    <a href="/artinformation">
                        <p>Art Information</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                    <h4>For Artists</h4>
                    <a href="/admin">
                        <p>why sell</p>
                    </a>
                    <a href="/Artisthandbook">
                        <p>Artist Handbook</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                    <h4>Artistry Hub</h4>
                <a href="/gallery">
                        <p>Artwork</p>
                    </a>
                    <a href="/shop">
                        <p>Collections</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                    <h4>Top Categories</h4>
                    <a href="/paintings">
                        <p>Paintings</p>
                    </a>
                    <a href="/oilpainting">
                        <p>Oil Painting</p>
                    </a>
                    <a href="/sketches">
                        <p>Sketches</p>
                    </a>
                </div>
            </div>
            </div>
            </div>
  );
};
export default Footers;