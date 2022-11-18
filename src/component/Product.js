import React from 'react'
import Secondnav2 from './Secondnav2'
import Topnavbar from './Topnavbar'
import IMGP from "./../Webimage/My project-1.png";
import './Product.css'
import { FaShoppingCart, FaRupeeSign } from 'react-icons/fa';
import { HiCurrencyRupee } from 'react-icons/hi';
import {MdLocalOffer } from 'react-icons/md';

export default function Product() {
  return (
    <>
          <Topnavbar name=" My account "/>
          <Secondnav2/>
          <div className='product-img-about'>
             <div className='pruduct-img d-flex'>
              
              <div className='main-sub d-flex position-fixed'>
               <div className='sub-images'>
                 <div className='small-img-col'>
                   <img src={IMGP} alt="..." class="img-thumbnail"/>
                </div>

                <div className='small-img-col'>
                   <img src={IMGP} alt="..." class="img-thumbnail"/>
                </div>

                <div className='small-img-col'>
                   <img src={IMGP} alt="..." class="img-thumbnail"/>
                </div>

                <div className='small-img-col'>
                   <img src={IMGP} alt="..." class="img-thumbnail"/>
                </div>

                <div className='small-img-col'>
                   <img src={IMGP} alt="..." class="img-thumbnail"/>
                </div>
                
                </div>

               <div className='main-image'>
               <img src={IMGP} alt="..." class="img-thumbnail"/>
                 <div className='Item-button'>
                    <a href="# " className='btn buy-buttoms add-to-cart  '> <span className='px-2 '>< FaShoppingCart/></span>ADD TO CART</a>
                    <a href="#" className='btn buy-buttoms buy-know'> <span className='px-1 '> <HiCurrencyRupee/> </span>BUY KNOW</a>
                 </div>
               </div>

              </div> 
               
              <div class="Details-iteam">
                  <div className='iteam-title'>
                        <span>SONY Alpha Full Frame ILCE-7M2K/BQ IN5 Mirrorless Camera Body with 28 - 70 mm Lens  (Black)</span>
                  </div>

                  <div className='Rating-Review'>
                         <a href='#'>000 Ratings & 92 Reviews</a>
                  </div> 

                  <div className='iteam-Rates'>
                      <div className='Price-rate'>
                      <span ><FaRupeeSign/>00000</span></div>

                      <div className='Price-rate-off'>
                      <span ><FaRupeeSign/>00000</span></div>

                     <div className="percent-off"> 
                          <span>37% off</span>
                     </div>
                  </div>

                 <div className='Available-offers'>
                      <small>Available offers</small>
                     <span><MdLocalOffer/>Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</span>
                     <span><MdLocalOffer/>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*Know More</span>
                     <span><MdLocalOffer/>Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</span>
                </div> 

                <div className='details-of-product'>
                    <div className='left-side_details'>
                          
                    </div>
                    <div className='right-side_details'>

                    </div>
                </div>
                   
              </div> 

             </div>
         </div>  
    </>
  )
}
