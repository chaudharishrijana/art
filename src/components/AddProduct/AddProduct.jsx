import React, { useState } from 'react';
import './AddProduct.css'; // Import your CSS file for styling

const AddProduct = () => {
    const [productData, setProductData] = useState({
        artworkTitle: '',
        price: '',
        offerPrice: '',
        category: 'Oil Painting', // Default category
        artworkImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setProductData({ ...productData, artworkImage: imageFile });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send productData to server or perform other actions
        console.log('Product data:', productData);
        // Reset form fields
        setProductData({
            artworkTitle: '',
            price: '',
            offerPrice: '',
            category: 'Oil Painting',
            artworkImage: null,
        });
    };

    return (
        <div>
            <h2>Add Artwork</h2>
            <form onSubmit={handleSubmit} className="add-product-form">
                <div className="form-group">
                    <label htmlFor="artworkTitle">Artwork Title:</label>
                    <input 
                        type="text" 
                        id="artworkTitle" 
                        name="artworkTitle" 
                        value={productData.artworkTitle} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        value={productData.price} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="offerPrice">Offer Price:</label>
                    <input 
                        type="number" 
                        id="offerPrice" 
                        name="offerPrice" 
                        value={productData.offerPrice} 
                        onChange={handleChange} 
                    />
                </div> */}
                <div className="form-group">
                    <label htmlFor="category">Artwork Category:</label>
                    <select 
                        id="category" 
                        name="category" 
                        value={productData.category} 
                        onChange={handleChange} 
                    >
                        <option value="Oil Painting">Oil Painting</option>
                        <option value="Sketch">Sketch</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="artworkImage">Artwork Image:</label>
                    <input 
                        type="file" 
                        id="artworkImage" 
                        name="artworkImage" 
                        onChange={handleImageChange} 
                        accept="image/*" 
                        required 
                    />
                </div>
                <button type="submit" className="add-button">Add Artwork</button>
            </form>
        </div>
    );
}

export default AddProduct;
