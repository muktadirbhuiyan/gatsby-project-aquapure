import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Hero2() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="welcome-section">
            <div className="welcome-thumb">
              <StaticImage
                src="../images/welcome.jpg"
                alt="welcome fontanero"
              />
            </div>
            <div className="welcome-content">
              <h3>Aqua Pure Taiwan</h3>
              <p>
                Taichung City Aqua Pure Water Technology Co.,ltd is established
                in 2010. We are a professional manufacturer and exporter that is
                concerned with the design, development and production of water
                treatment system and components. We are located in Taichung City
                429, Taiwan(R.O.C.), with convenient transportation access. All
                of our products comply with international quality standards and
                are greatly appreciated in a variety of different markets
                throughout the world.{" "}
              </p>
              <a className="btn" href="/aboutUs">
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
