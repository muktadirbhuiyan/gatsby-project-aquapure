import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function ShowCase() {
  return (
    <div className="container">
      <div className="row">
        <div className="service-section">
          <div className="col-md-12">
            {/* <!-- Nav tabs --> */}
            <ul className="tablist" >
              <li>Products Does Matters</li>
              <li role="presentation" className="active">
                <a
                  href="/residential"
                  aria-controls="residential"
                  role="tab"
                  data-toggle="tab"
                >
                  Residential
                </a>
              </li>
              <li role="presentation">
                <a
                  href="/commercial"
                  aria-controls="commercial"
                  role="tab"
                  data-toggle="tab"
                >
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="residential">
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage src="../images/service/service1.jpg" alt="" />
                  </div>
                  <div className="service-description">
                    <a href="water-heater.html">
                      <h3>Water Heater</h3>
                    </a>
                    <p>
                      Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel aliquet nec vulputate
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage src="../images/service/service2.jpg" alt="" />
                  </div>
                  <div className="service-description">
                    <a href="bathroom.html">
                      <h3>Bathroom</h3>
                    </a>
                    <p>
                      Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel aliquet nec vulputate
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage src="../images/service/service3.jpg" alt="" />
                  </div>
                  <div className="service-description">
                    <a href="toilet.html">
                      <h3>Toilet</h3>
                    </a>
                    <p>
                      Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel aliquet nec vulputate
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage src="../images/service/service4.jpg" alt="" />
                  </div>
                  <div className="service-description">
                    <a href="shower.html">
                      <h3>Tube and shower</h3>
                    </a>
                    <p>
                      Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel aliquet nec vulputate
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage src="../images/service/service5.jpg" alt="" />
                  </div>
                  <div className="service-description">
                    <a href="pipes.html">
                      <h3>pipes and sewers</h3>
                    </a>
                    <p>
                      Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel aliquet nec vulputate
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage src="../images/service/service6.jpg" alt="" />
                  </div>
                  <div className="service-description">
                    <a href="drainage.html">
                      <h3>Drainage</h3>
                    </a>
                    <p>
                      Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel aliquet nec vulputate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="commercial">
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage src="../images/service/service4.jpg" alt="" />
                  </div>
                  <div className="service-description">
                    <a href="/">
                      <h3>Water Heater</h3>
                    </a>
                    <p>
                      Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel aliquet nec vulputate
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage src="../images/service/service5.jpg" alt="" />
                  </div>
                  <div className="service-description">
                    <a href="/">
                      <h3>Water Heater</h3>
                    </a>
                    <p>
                      Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel aliquet nec vulputate
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage src="../images/service/service6.jpg" alt="" />
                  </div>
                  <div className="service-description">
                    <a href="/">
                      <h3>Water Heater</h3>
                    </a>
                    <p>
                      Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel aliquet nec vulputate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .service-section--> */}
      </div>
      {/* <!-- .row--> */}
    </div>
    // {/* <!-- .container--> */}
  )
}

export default ShowCase
