
import './App.css';
import {Navbar}  from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import  LoginSignup  from './components/LoginSingnup/LoginSignup';
import  Signup from './components/Signup/Signup';
import Home from './pages/Home';
 import Product from './components/Product/Product';
import Gallery from './Gallery';
// import { ProductDisplay } from './components/ProducDisplay/ProductDisplay';
import {AdminPanel} from './components/AdminPanel/AdminPanel';
// import AddProduct from './components/AddProduct/AddProduct';
import Account from './components/Account/Account';
import { ProductDisplay } from './components/ProducDisplay/ProductDisplay';
function App() { 
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        
          
        <Route path='/' element={<Home/>}/>
       
       
      <Route path='/Gallery' element={<Gallery/>}/>
     
        <Route path='/Product' element={<Product/>}/>
       
        <Route path='/background' element={<background/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/loginascustomer' element={<LoginSignup/>}/>
        <Route path= '/display' element={<ProductDisplay/>}/>
       
        <Route path='/signupascustomer' element={<Signup/>}/>
       {/* <Route path='/productdisplay' element={<ProductDisplay/>}/> */}
        <Route path='/admin/*' element={<AdminPanel/>}/>
       <Route path='/admin/account' element={<Account/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
