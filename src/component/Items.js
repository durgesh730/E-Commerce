import React from 'react'

// import pic from "./../flipkat_images/Top Offers.png"
// import img from "./../flipkat_images/Grocery.webp"
// import photo from "./../flipkat_images/Mobiles.webp"
// import pimg from "./../flipkat_images/Electronics.webp"
// import Rimg from "./../flipkat_images/Fashion.webp"
// import Simg from "./../flipkat_images/Home.webp"
// import Mimg from "./../flipkat_images/Appliances.webp"

export default function Items(props) {
  return (
         <>
               <div className="iteamheading">
                    <div className='rows'>
                          <div>
                             <span>{props.topheading}</span>
                          </div>
                          <div className='view'>
                               <a href='#'>View All</a>
                          </div>
                    </div>
               </div>

               <div className='imageitem'>

                  <div className='imagetext'>
                    <div  >
                    <img src={props.p} alt="..." class="img-thumbnail"/></div>

                    <div >
                    <span>{props.itemName}</span></div>

                    <div className='firstimage'>
                    <a href='#'>{props.itemprice}</a></div>
                     
                    <div className='brand'>
                    <a href='#'>{props.brandName}</a></div>

                  </div>
                  

                  <div className='imagetext'>
                    <div >
                    <img src={props.k} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>{props.itemName2}</span></div>
                    <div  className='firstimage'>
                    <a href='#'>{props.itemprice2}</a></div>

                    <div className='brand'>
                    <a href='#'>{props.brandName}</a></div>
                  </div>


                  <div className='imagetext'>
                    <div className='firstimage'>
                    <img src={props.j} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>{props.itemName3}</span></div>
                    <div  className='firstimage'>
                    <a href='#'>{props.itemprice3}</a></div>

                    <div className='brand'>
                    <a href='#'>{props.brandName}</a></div>

                  </div>

                  <div className='imagetext'>
                    <div >
                    <img src={props.p} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>{props.itemName4}</span></div>
                    
                    <div className='firstimage'>
                    <a href='#'>{props.itemprice4}</a></div>

                    <div className='brand'>
                    <a href='#'>{props.brandName}</a></div>
                  </div>

                  <div className='imagetext'>
                    <div>
                    <img src={props.b} alt="..." class="img-thumbnail"/></div>
                    <div >
                    <span>{props.itemName5}</span></div>

                    <div className='firstimage'>
                    <a href='#'>{props.itemprice5}</a></div>

                    <div className='brand'>
                    <a href='#'>{props.brandName}</a></div>
                  </div>

                  <div className='imagetext'>
                    <div>
                    <img src={props.h} alt="..." class="img-thumbnail"/></div>
                    <div >
                    <span>{props.itemName6}</span></div>
                    <div  className='firstimage'>
                    <a href='#'>{props.itemprice6}</a></div>

                    <div className='brand'>
                    <a href='#'>{props.brandName}</a></div>
                  </div>

                  <div className='imagetext'>
                    <div>
                    <img src={props.seven} alt="..." class="img-thumbnail"/></div>
                    <div>
                    <span>{props.itemName7}</span></div>

                    <div className='firstimage'>
                    <a href='#'>{props.itemprice7}</a></div>

                    <div className='brand'>
                    <a href='#'>{props.brandName}</a></div>
                  </div>
                    
               </div>

            
         </>
  )
}


