import React from 'react';

const ContectUs = () => {
  return (
    <div className="container-inner-wrap">
      <div className="row justify-content-center justify-content-lg-between">
        <div className="col-lg-6 col-md-8 order-2 order-lg-0">
          <div className="contact-title mb-20">
            <h5 className="sub-title">Contact Us</h5>
            <h2 className="title">
              Let`s Talk Question<span>.</span>
            </h2>
          </div>
          <div className="contact-wrap-content">
            <p>
              The domestic dog is a doiated dendant of the wolf. The dog derived
              from an ancient, extinct wolf, and the modern grey.
            </p>
            <form className="contact-form">
              <div className="form-grp">
                <label>
                  Your Name <span>*</span>
                </label>
                <input type="text" id="name" placeholder="Jon Deo..." />
              </div>
              <div className="form-grp">
                <label>
                  Your Email <span>*</span>
                </label>
                <input type="text" id="email" placeholder="info.example@.com" />
              </div>
              <div className="form-grp">
                <label>
                  Your Message <span>*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Opinion..."
                ></textarea>
              </div>
              <div className="form-grp checkbox-grp">
                <input type="checkbox" id="checkbox" />
                <label>Don’t show your email address</label>
              </div>
              <button type="button" className="btn rounded-btn">
                Send Now
              </button>
            </form>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 col-md-8">
          <div className="contact-info-wrap">
            <div className="contact-img">
              <img src="img/images/contact_img.png" alt="" />
            </div>
            <div className="contact-info-list">
              <ul>
                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="content">
                    <p>W84 New Park Lan, New York, NY 4586 United States</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="content">
                    <p>+9 (256) 254 9568</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope-open"></i>
                  </div>
                  <div className="content">
                    <p>Contact@ info.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContectUs;
