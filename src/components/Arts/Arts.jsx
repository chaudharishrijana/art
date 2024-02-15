import React from "react";
import kitty from "./kitty.jpg";
import pp from "./pp.jpg";
import { Link } from "react-router-dom";

export const Arts = () => {
  return (
    <div className="art-container">
      <Link to="/display" state={{ name: 'Kitty', price: '$10', description: 'A cute kitty painting', image:kitty}}>
        <div className="art-item">
          <img src={kitty} alt="Kitty" className="art-image" />
          <div className="art-details">
            <h2>NATURE LOVE</h2>
            <p className="description">The Image describes the love for the nature </p>
            <p className="price">$10</p>
          </div>
        </div>
        </Link>
      <Link to="/display" state={{ name: 'PP', price: '$15', description: 'A beautiful abstract art piece', image:pp}}>
      <div className="art-item">
        <img src={pp} alt="PP" className="art-image" />
        <div className="art-details">
          <h2>FLOWERS DEFINITION</h2>
          
          <p className="description">A beautiful abstract art piece</p>
          <p className="price">$15</p>
        </div>
      </div>
      </Link>
    </div>
  );
};
