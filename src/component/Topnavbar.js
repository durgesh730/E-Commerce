import React from 'react'
// import PropTypes from 'prop-types';

export default function Topnavbar(props){
       
         const openNav =()=> {
           document.getElementById("mySidenav").style.width = "250px";
         }
  
         const closeNav =()=> {
           document.getElementById("mySidenav").style.width = "0";
         }
      
    return(
        <>
            
           <div className='navigation'>

             <div className='container'>
                  <span className='logo'>logo</span>
                  <input type="text" placeholder="Search for Product, Brands and more "></input>

                   <button className="search-bar__submit-btn" type="submit">
                   <svg width="20" height="20" viewBox="0 0 17 18"  className="" xmlns="http://www.w3.org/2000/svg" >
                     <g fill="#2874F1" fillRule="evenodd">
                       <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                       <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                     </g>
                    </svg>
                   </button>
             
            <div className=' account'> 
            <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {props.name}
               </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <a className="dropdown-item" href="#">My Profile</a>
                 <a className="dropdown-item" href="#">Orders</a>
                 <a className="dropdown-item" href="#">Coupons</a>
                 <a className="dropdown-item" href="#">Notifications</a>
                 <div className="dropdown-divider"></div>
                 <a className="dropdown-item" href="#">Logout</a>
              </div>
          </li>
          </div>

          <div className='more'>  
          <li className="nav-more dropdown">
               <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 More
               </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <a className="dropdown-item" href="#">Wishlist</a>
                 <a className="dropdown-item" href="#">Help 24*7</a>
                 <div className="dropdown-divider"></div>
                 <a className="dropdown-item" href="#">Download App</a>
              </div>
          </li>
          </div>  

             <div className="icon">
                <span onClick={openNav}>&#9776;</span>
                </div> 

          {/* side nav bar ka code yaha se start hai */}

            <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>

            <a href="#"><i class="fa-solid fa-user "></i><span className='mx-3'>Welcome!</span></a>
            <div className="dropdown-divider"></div>

            <a href="#"><i class="fa-brands fa-bitcoin"></i> <span className='mx-1'>SuperCoin Zone</span></a>
            <a href="#"><i class="fa-solid fa-list"></i> <span className='mx-1'>All Category</span></a>
            <a href="#"><i class="fa-sharp fa-solid fa-store"></i> <span className='mx-1'>Trending Stores</span></a>
            <div className="dropdown-divider"></div>

            <a href="#"><i class="fa-solid fa-language"></i> <span className='mx-1'>Choose language</span></a>
 
            <div className="dropdown-divider"></div>
            <a href="#"> <span className='mx-1'>Offer Zone</span></a>
            <a href="#"><span className='mx-1'>Sell on shops</span></a>
            <div className="dropdown-divider"></div>
                
            <a href="#"><i class="fa-regular fa-house-flood-water-circle-arrow-right"></i> <span className='mx-1'>My Orders</span></a>
            <a href="#"><i class="fa-brands fa-stumbleupon-circle"></i> <span className='mx-1'>Coupons</span></a>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i> <span className='mx-1'>My Cart</span></a>
            <a href="#"><i class="fa-solid fa-user "></i> <span className='mx-1'>My Account</span></a>
            <a href="#"><i class="fa-solid fa-bell"></i> <span className='mx-1'>Notifications</span></a>
            <div className="dropdown-divider"></div>
            <a href="#" className='mx-1'>Help Centre</a>

           </div> 
         </div> 

       {/* seach in phone options  */}

         <div className='searchphone'>
                    
                    <input type="text" placeholder="Search for Product, Brands and more "></input>
                    <button className="search-bar__submit-btn" type="submit">
                    <svg width="20" height="20" viewBox="0 0 17 18"  className="" xmlns="http://www.w3.org/2000/svg" >
                      <g fill="#2874F1" fillRule="evenodd">
                        <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                        <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                      </g>
                     </svg>
                    </button>
              </div>
         </div>

        </>
    );
}

// export default Topnavbar;

// Topnavbar.PropTypes ={
//   name: PropTypes.string.isRequired,
// }
