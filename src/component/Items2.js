import React from 'react'

import pic from "./../flipkat_images/Top Offers.png"
import img from "./../flipkat_images/Grocery.webp"
import photo from "./../flipkat_images/Mobiles.webp"
import pimg from "./../flipkat_images/Electronics.webp"
import Rimg from "./../flipkat_images/Fashion.webp"
import Simg from "./../flipkat_images/Home.webp"
import Mimg from "./../flipkat_images/Appliances.webp"

export default function items2(props) {
  return (
         <>
               <div className="iteam2heading">
                    <div className='row'>
                          <div>
                             <span>{props.topheading}</span>
                          </div>
                          <div>
                               <a href='#'>View All</a>
                          </div>
                    </div>
               </div>

               <div className='imageitem2'>

                  {/* <div className='imagetext'>
                    <div className='firstimage'>
                    <img src={pic} alt="..." class="img-thumbnail"/></div>
                    <div className='firstimage'>
                    <span>Name</span></div>
                    <div className='firstimage'>
                    <a href='#'>Price</a></div>
                  </div> */}
                  
                  {/* <div className='imagetext2'>
                    <div>
                    <img src={img} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>Name</span></div>
                    <div>
                    <a href='#'>Price</a></div>
                  </div> */}

                  <div className='imagetext2'>
                    <div>
                    <img src={photo} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>Name</span></div>
                    <div>
                    <a href='#'>Price</a></div>
                  </div>

                  <div className='imagetext2'>
                    <div>
                    <img src={pimg} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>Name</span></div>
                    <div>
                    <a href='#'>Price</a></div>
                  </div>

                  <div className='imagetext2'>
                    <div>
                    <img src={Rimg} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>Name</span></div>
                    <div>
                    <a href='#'>Price</a></div>
                  </div>

                  <div className='imagetext2'>
                    <div>
                    <img src={Simg} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>Name</span></div>
                    <div>
                    <a href='#'>Price</a></div>
                  </div>

                  <div className='imagetext2'>
                    <div>
                    <img src={Mimg} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>Name</span></div>
                    <div>
                    <a href='#'>Price</a></div>
                  </div>
                    
               </div>
         </>
  )
}


