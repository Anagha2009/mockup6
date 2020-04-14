import React from 'react';
import logo from '../images/logo.svg';
 const Navbar =()=>{
  return(
      <div className="container">
        <nav className="nav-wrapper white black-text">
        <img src={logo} alt=""></img>
            {/* <ul id="nav-mobile" class="right">
                <li><span>Product</span></li>
                <li>Features</li>
                <li>Pricing</li>
                <li className="grey-text">Login</li>
            </ul> */}
        </nav>
          
      </div>
  )
 }
 export default Navbar;