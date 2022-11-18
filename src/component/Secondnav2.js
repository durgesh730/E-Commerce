import React from 'react'

const Secondnav2 =()=> {
    return(
       <>
           <div className='container1'>

             <div className="offers2">
                 <li> <a href='#'>Top Offers</a> </li></div>

              <div className="grocery2">
               <li><a href="#">Grocery </a></li>
              </div>
                
              <div className="home2">
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

              <div className="fashion2">
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

              <div className="electronics2">
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


                <div className="mobile2">
                <li>
                 <a href='#'> Mobiles</a>
                </li>
                 </div>

              <div className="appliances2">
              <li><a href="#">Appliances</a></li></div>
                
            </div>
       </>
    )
}

export default Secondnav2;