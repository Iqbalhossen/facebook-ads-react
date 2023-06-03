import React from 'react';

const About = () => {
    return (
        <section className="position-relative">
        <div className="container-fluid px-lg-3 px-md-8 px-3">


        <div class="grid grid-cols-2 gap-4">
        <div className=" bg-contain bg-pos-l" data-bg-img="images/pattern/07.png">
              <div className="round-animation">
               <img className="img-fluid" src="http://themeht.com/loptus/ltr/images/about/01.png" alt="" />
              </div>
            </div>
            <div className=" me-auto mt-5 mt-lg-0 ps-lg-11">
              <div className="section-title mb-4">
                <h6>About Us</h6>
                <h2 className="title">Do you want to generate more We know the solution</h2> 
              </div>
              <ul className="list-unstyled list-icon-3">
                <li className="mb-2"><i className="fas fa-check"></i> Mattis effic iturut magna pelle sit</li>
                <li className="mb-2"><i className="fas fa-check"></i> Iturut magna pelle ntesque sit</li>
                <li><i className="fas fa-check"></i> Fusce enim nulla mollis eu metus in fringilla</li>
              </ul>
              <div className="white-bg box-shadow radius px-4 py-4 mt-5">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="counter"> <i className="flaticon-development"></i>
                      <span className="count-number" data-to="2304" data-speed="10000">2304</span>
                      <h5>Success</h5>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-5 mt-sm-0">
                    <div className="counter"> <i className="flaticon-user"></i>
                      <span className="count-number" data-to="3498" data-speed="10000">3498</span>
                      <h5>Happy Clients</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</div>


          <div className="row align-items-center">
           
          </div>
        </div>
      </section>
    );
};

export default About;