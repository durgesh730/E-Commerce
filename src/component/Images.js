import React from 'react'

import pic1 from './../Presentation2/Untitled design (1).png'
import pic2 from './../Presentation2/Untitled design (2).png'
import pic3 from './../Presentation2/Untitled design (3).png'
import pic4 from './../Presentation2/Untitled design (4).png'
import pic5 from './../Presentation2/Untitled design.png'

export default function Images() {

  return (
    <>
       <div className='image'>
             <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
             
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <a href="#">
                    <img className="d-block w-100" src={pic1} alt="First slide"/></a>
                  </div>
                  <div className="carousel-item">
                  <a href="#">
                    <img className="d-block w-100" src={pic2} alt="Second slide"/></a>
                  </div>
                  <div className="carousel-item">
                    <a href="#">
                    <img className="d-block w-100" src={pic3} alt="Third slide"/></a>
                  </div>

                  <div className="carousel-item">
                    <a href="#">
                    <img className="d-block w-100" src={pic4} alt="Third slide"/></a>
                  </div>

                  <div className="carousel-item">
                    <a href="#">
                    <img className="d-block w-100" src={pic5} alt="Third slide"/></a>
                  </div>
                </div>
                {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a> */}
              </div>
       </div>

     </>  
  )
}

