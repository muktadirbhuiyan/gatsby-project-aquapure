import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Hero2() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="welcome-section">
            <div className="welcome-thumb">
              <StaticImage src="../images/welcome.jpg" alt="welcome fontanero" />
            </div>
            <div className="welcome-content">
              <h3>welcome to fontanero</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt cras dapibus.{" "}
              </p>
              <a className="btn" href="/">
                Read More
              </a>
            </div>
          </div>
          {/* <!-- .welcome-section--> */}
        </div>
        {/* <!-- .col-md-12--> */}
      </div>
      {/* <!-- .row--> */}
    </div>
    // {/* <!-- .container--> */}
  )
}

export default Hero2
