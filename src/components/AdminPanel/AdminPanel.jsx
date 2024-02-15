import React from 'react'
import './AdminPanel.css';
import {Routes,Route,Link} from 'react-router-dom';

import AddProduct from '../AddProduct/AddProduct';
import Account from '../Account/Account';
import girl from './girl.webp';
 export const AdminPanel = () => {
  return (                                                                                              
    <div className='admin-panel'>
        <div className='sidebar'>

        <ul>
            <li><Link to='/admin/manageartworks'>Arworks List</Link></li>
            <li><Link to='/admin/addproduct'>Add Artworks</Link></li>
            <li><Link to='/admin/account'>Account</Link></li>
        </ul>
        </div>
        <div className='main-content'>
         <div className='image-container'>
          <img src={girl} alt='Girl'/>
          </div>

            <Routes>
             
            <Route path='/addproduct' element={<AddProduct/>}/>
            
            </Routes>
        </div>

    </div>
  );
}
export default AdminPanel;

