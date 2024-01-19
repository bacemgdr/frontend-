
import React from 'react';
import './footer.css'; 

function Footer() {
  return (
    <>
  <section className="info_section  layout_padding2-top">
  <div className="info_container ">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h6>ABOUT US</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, 
            </p>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>Newsletter</h5>
            <form action="#">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="col-md-3">
          <h6>NEED HELP</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, 
          </p>
        </div>
        <div className="col-md-3">
          <h6>CONTACT US</h6>
          <div className="info_link-box">
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true" />
              <span>   <h6>GoMyCode 3200 Tatouin</h6> </span>
            </a>
            <a href="">
              <i className="fa fa-phone" aria-hidden="true" />
              <span>+216 54095209</span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true" />
              <span> bacem.ghdiri@gmail.com</span>
              
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </>
  
  );
}

export default Footer;
