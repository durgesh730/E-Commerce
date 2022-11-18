import React from 'react'


export default function items2(props) {
  return (
         <>
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


