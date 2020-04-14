import React from 'react';
import Navbar from './navbar';
import bg from '../images/illustration-devices.svg'
const Layout =()=>{
  return(
      <div>
          <Navbar/>
          <div className="container">
              <div className="row">
                  <div className="col-lg-5 part1">
                    <button id="butt">New</button><span className="mono">MONOGRAPH DASHBOARD</span>
                    <p>Powerful insights into your team</p>
                    <h6> Project planning and time tracking <br></br>for agile teams</h6>
                    <button className="button">  Schedule a demo </button> <span className="free">to see a preview</span>
                    
                  </div>
                  <div className="col-lg-7 part">
                    </div>                  
                  <img src={bg} alt="" id="img"/> 
              </div>
            </div>
        </div>
      
  )
}
export default Layout;