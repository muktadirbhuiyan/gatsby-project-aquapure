import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  }

  return (
    <div className="container-fluid">
      <section className="banner-section hidden-xs">
        <div
          id="carousel-example-generic"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* <!-- Wrapper for slides --> */}
          <div className="carousel-inner" role="listbox">
            <Slider {...settings}>
              <div className="item active">
                <StaticImage src="../images/slide1.jpg" alt="slide1" />
                {/* <div className="carousel-caption">
                  <h1>Quick Service, Quality Work &amp; Be Happy...</h1>
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Maecenas venenatis.
                  </p>
                  <a className="btn" href="/">
                    Learn More
                  </a>
                </div> */}
              </div>

              {/* <div className="item active">
                <StaticImage src="../images/slide1.jpg" alt="slide2" />
                <div className="carousel-caption">
                  <h1>Quick Service, Quality Work &amp; Be Happy...</h1>
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Maecenas venenatis.
                  </p>
                  <a className="btn" href="/">
                    Learn More
                  </a>
                </div>
              </div> */}

              <div className="item active">
                <StaticImage src="../images/slide2.jpg" alt="slide3" />
                {/* <div className="carousel-caption">
                  <h1>Quick Service, Quality Work &amp; Be Happy...</h1>
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Maecenas venenatis.
                  </p>
                  <a className="btn" href="/">
                    Learn More
                  </a>
                </div> */}
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* <!-- .banner-section--> */}
    </div>
  )
}

export default Hero
