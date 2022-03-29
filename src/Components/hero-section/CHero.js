import React from 'react';
import { Navbar } from '../nav links/CNav';
import './CHero.css';

export const Hero = () => {
  return (
         <div class="d-flex flex-column gap-3 container">
          
             <div className="d-flex align-items-center fullscreen mt-5">
                <div class="d-flex flex-column align-items-start gap-5 mt-3">
                <p className='introText'>SELL AND BUY CROPS IN INDIAN MANDI AT <br/> <span className='highlight'>BEST PRICE</span></p>
                <span className='ctaButton'>JOIN US</span> 
                </div>
             </div>
         </div>
    
  );
}


