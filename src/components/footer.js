import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="footer-top">
          <div className="col-md-3 col-sm-6">
            <div className="logo footer-logo">
              <a title="fontanero" href="index.html">
                <StaticImage src="../images/logo.png" alt="fontanero" />
              </a>
              <p>
                Competently conceptualize go forward testing procedures and B2B
                expertise. Phosfluorescently cultivate principle-centered
                methods.of empowerment through fully researched.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="news list-group">
              <h4>Latest News</h4>
              <ul>
                <li>
                  <div className="news-list">
                    <span className="date">February 9, 2016</span>
                    <p>Consectetuer adipiscing aenean</p>
                  </div>
                </li>
                <li>
                  <div className="news-list">
                    <span className="date">February 9, 2016</span>
                    <p>
                      Consectetuer adipiscing aenean commodo ligula eget dolor.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="responsability">
              <h4>Social responsability</h4>
              <ul>
                <li>
                  <a href="/">Owner’s message</a>
                </li>
                <li>
                  <a href="/">Mission statement</a>
                </li>
                <li>
                  <a href="/">History &amp; resources</a>
                </li>
                <li>
                  <a href="/">Management team</a>
                </li>
                <li>
                  <a href="/">Ben’s Bell Award</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="contact-us">
              <h4>Contact us</h4>
              <address>
                3456 E. Wieding Road <br />
                Tucson AZ, 3456
              </address>
              <address>
                <span>Email :</span>
                <a href="info@fontaneroplumbing.net">
                  info@fontaneroplumbing.net
                </a>
              </address>
              <address>
                <span>Phones :</span>
                Main: (345) 345-3456 <br />
                Fax: (345) 345-3456 <br />
              </address>
            </div>
          </div>
        </div>
        {/* <!-- .footer-top--> */}
      </div>
      {/* <!-- .row--> */}
      <div className="row">
        <div className="footer">
          <div className="col-md-6 col-xs-12 col-sm-6">
            <div className="copyright">
              <p>
                Copyright 2016. fontanero inc. | Design by{" "}
                <a href="https://uicookies.com">uiCookies</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-6">
            <div className="footer-social social">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- .footer--> */}
      </div>
      {/* <!-- .row--> */}
    </div>
    // {/* <!-- .container--> */}
  )
}

export default Footer
