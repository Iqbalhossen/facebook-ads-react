import React from 'react';
import { Link } from 'react-router-dom';
import image from './../../../assets/home/images/pattern/01.png'

const Sliders = () => {
    return (
        <>
      <section className="fullscreen-banner mouse-parallax p-0 banner overflow-hidden " data-bg-img={image}>
  <div className="insideText ">Loptus</div>
  <div className="align-center">
    <div className="container">
    <div class="grid grid-cols-3 gap-4 text-justify">
    <div className="border position-relative">
          <div className="mouse-parallax">
            <div className="bnr-img1 animated fadeInRight delay-4 duration-4">
              <img className="img-fluid rotateme" src="http://themeht.com/loptus/ltr/images/banner/01.png" alt="" />
            </div>
            <img className="img-fluid bnr-img2 animated zoomIn delay-5 duration-4" src="http://themeht.com/loptus/ltr/images/banner/02.png" alt="" />
          </div>
        </div>
        <div className=" mt-5 mt-lg-0 col-span-2 p-2">
          <h1 className="mb-4 text-6xl animated bounceInLeft delay-2 duration-4">Looking For Most Powerfull <span className="font-w-5">Digital Marketing</span></h1>
          <p className="lead animated mb-3 fadeInUp delay-3 duration-4">Start working with an company that provide everything you need to generate awareness, drive traffic, connect with customers.</p>
          <div className="d-flex align-items-center animated fadeInUp delay-4 duration-5"> <Link className="custom-btn custom-btn-theme" href="#"><span>Learn More</span></Link>
            <Link className="play-btn popup-youtube ms-4 d-flex align-items-center" href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"><span>Play Now</span><img className="img-fluid pulse radius-4" src="images/play.png" alt="" /></Link>
          </div>
        </div>  
</div>
      
      <div className="row align-items-center">
      
              
      </div>
    </div>
   </div>
</section>

        </>
    );
};

export default Sliders;