import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  }
  return (
    <>
      <div className="container">
        <div className="service-activity">
          <div className="row">
            <div className="col-md-12">
              <div className="activity-head">
                <h2>
                  Why you can rely with 100% confidence ON{" "}
                  <span>PURE WATER</span> Service.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="activity-list-items">
              <div className="col-md-4 col-xs-12 col-sm-4">
                <div className="activity-list">
                  <div className="activity-icon">
                    <i className="fa fa-book"></i>
                  </div>
                  <div className="activity-details">
                    <h4>Honesty</h4>
                    <p>
                      we operate with honesty, integrity and in complete
                      transparency. So that we serve 10,000+ clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-4">
                <div className="activity-list">
                  <div className="activity-icon">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="activity-details">
                    <h4>Non-stop service</h4>
                    <p>
                      We operate 24/7/365. You will be hard-pressed to to find
                      in a plumber.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-4">
                <div className="activity-list">
                  <div className="activity-icon">
                    <i className="fa fa-trophy"></i>
                  </div>
                  <div className="activity-details">
                    <h4>Awards</h4>
                    <p>
                      This is why we earned the Angie’s List Super Service Award
                      4 times in the last 4 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- .activity-list-items--> */}
          </div>
        </div>
        {/* <!-- .service-activity--> */}
      </div>
      {/* <!-- .container--> */}

      <div className="quote-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="quote">
                <h2>Let's wow you!</h2>
                <p>
                  Ready to take it a step further? Let’s start talking about
                  your Commercial or Residence Plumb Need. We can help you.
                </p>
                <a className="btn" href="/">
                  Request a Quote
                </a>
              </div>
              {/* <!--quote--> */}
            </div>
          </div>
          {/* <!-- .row--> */}
        </div>
        {/* <!-- .container--> */}
      </div>
      {/* <!-- .quote-section--> */}

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="our-clients-carousel">
              <h2>We Serving our Clients</h2>
              <div id="our-client-thumb">
                <Slider {...settings}>
                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client1.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client2.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client3.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client4.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client5.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client1.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client2.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client3.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client4.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="client-logo">
                      <StaticImage src="../images/clients/client5.jpg" alt="" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* <!-- .our-clients-carousel--> */}
          </div>
        </div>
        {/* <!-- .row -->						 */}
      </div>
      {/* <!-- .container--> */}
    </>
  )
}

export default Clients
