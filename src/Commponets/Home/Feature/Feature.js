import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <section data-bg-img="images/pattern/02.png">
  <div className="container">

  <div class="grid grid-cols-3 gap-4">
  <div className="">
        <div className="featured-item text-center style-2">
          <div className="featured-icon">
            <img className="img-fluid" src="http://themeht.com/loptus/ltr/images/feature/01.png" alt="" />
          </div>
          <div className="featured-title">
            <h5>Online Marketing</h5>
          </div>
          <div className="featured-desc">
            <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p> <Link className="custom-btn custom-btn-theme mt-5" href="#">Learn More</Link>
          </div>
        </div>
      </div>
      <div className=" mt-5 mt-lg-0">
        <div className="featured-item text-center style-2">
          <div className="featured-icon">
            <img className="img-fluid" src="http://themeht.com/loptus/ltr/images/feature/02.png" alt="" />
          </div>
          <div className="featured-title">
            <h5>Data Analysis</h5>
          </div>
          <div className="featured-desc">
            <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p> <Link className="custom-btn custom-btn-theme mt-5" href="#">Learn More</Link>
          </div>
        </div>
      </div>
      <div className=" mt-5 mt-lg-0">
        <div className="featured-item text-center style-2">
          <div className="featured-icon">
            <img className="img-fluid" src="http://themeht.com/loptus/ltr/images/feature/03.png" alt="" />
          </div>
          <div className="featured-title">
            <h5>SEO Optimization</h5>
          </div>
          <div className="featured-desc">
            <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p> <Link className="custom-btn custom-btn-theme mt-5" href="#">Learn More</Link>
          </div>
        </div>
      </div>
</div>
    {/* <div className="row">

    </div> */}
  </div>
</section>
    );
};

export default Feature;