import React from 'react'
import pic from "./../flipkat_images/Top Offers.png"
import img from "./../flipkat_images/Grocery.webp"
import photo from "./../flipkat_images/Mobiles.webp"
import pimg from "./../flipkat_images/Electronics.webp"
import Rimg from "./../flipkat_images/Fashion.webp"
import Simg from "./../flipkat_images/Home.webp"
import Mimg from "./../flipkat_images/Appliances.webp"

const Secondnav =()=> {
    return(
       <>
           <div className='container1'>

             <div className="offers">
               <li><img src={pic}/></li>
                 <li> <a href='#'>Top Offers</a> </li></div>

              <div className="grocery">
                   <li><img src={img}/></li>
               <li><a href="#">Grocery </a></li>
              </div>
                
              <div className="home">
                <li><img src={Simg}/></li>
              <li>

                 <div className=' inmobile'> 
                    <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Home
                      </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                    </li>
                   </div>
                       
                </li></div>

              <div className="fashion">
                <li><img src={Rimg}/></li>
               <li>
                  <div className=' infashion'> 
                    <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Fashion
                      </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Men's T-Shirts</a>
                      <a className="dropdown-item" href="#">Men's casual shirts</a>
                      <a className="dropdown-item" href="#">Men's Formal shirts</a>
                      <a className="dropdown-item" href="#">Men's Kurtas</a>

                      <a className="dropdown-item" href="#">Men's Ethics Sets</a>
                      <a className="dropdown-item" href="#">Men's Blazers</a>
                      
                      <a className="dropdown-item" href="#">Men's Raincoat</a>
                      <a className="dropdown-item" href="#">Men's casual shirts</a>

                      <a className="dropdown-item" href="#">Men's T-Shirts</a>
                      <a className="dropdown-item" href="#">Men's casual shirts</a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                    </li>
                   </div>

              </li></div>

              <div className="electronics">
                <li><img src={pimg}/></li>
              <li>
                 <div className='inelectronics'> 
                    <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Electronics
                      </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                    </li>
                   </div>

                </li></div>


                <div className="mobile">
                <li><img src={photo}/></li>
                <li>
                 <a href='#'> Mobiles</a>

                </li> </div>

              <div className="appliances">
                <li><img src={Mimg}/></li>
              <li><a href="#">Appliances</a></li></div>
                
            </div>
       </>
    )
}

export default Secondnav;