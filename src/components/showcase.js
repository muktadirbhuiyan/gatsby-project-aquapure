import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function ShowCase() {
  return (
    <div className="container">
      <div className="row">
        <div className="service-section">
          <div className="col-md-12">
            {/* <!-- Nav tabs --> */}
            <ul className="tablist">
              <li>Products Does Matter</li>
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
                    <StaticImage
                      src="../images/product/11G Pressure Storage Tank.jpg"
                      alt=""
                    />
                  </div>
                  <div className="service-description">
                    <a href="/">
                      <h3>11G Pressure Storage Tank</h3>
                    </a>
                    <p>
                      With stainless connector 3/4"stainless steel inlet With
                      butyl diaphragm Fit for public place
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage
                      src="../images/product/20 Jumbo Filter Housing.jpg"
                      alt=""
                    />
                  </div>
                  <div className="service-description">
                    <a href="/">
                      <h3>20 Jumbo Filter Housing</h3>
                    </a>
                    <p>
                      Meterial :High Quality PP Color: Blue/Transparent
                      Type:Pressure Relief Port size:3/4" ;1' ; Single O Ring or
                      Double O ring
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage
                      src="../images/product/75GPD Auto Flush Five Stage RO System.jpg"
                      alt=""
                    />
                  </div>
                  <div className="service-description">
                    <a href="/">
                      <h3>75GPD Auto Flush Five Stage RO System</h3>
                    </a>
                    <p>
                      RO (reverse osmosis) membrane Function: Filtering germ,
                      virus,corpuscule,other solute chemical from tap water
                      processinge
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage
                      src="../images/product/Carbon Filter Cartridge.jpg"
                      alt=""
                    />
                  </div>
                  <div className="service-description">
                    <a href="/">
                      <h3>Carbon Filter Cartridge</h3>
                    </a>
                    <p>
                      The filtration media of activated carbon filter cartridge
                      is nut-shell carbon as the raw material.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage
                      src="../images/product/Domestic RO Booster Pump.png"
                      alt=""
                    />
                  </div>
                  <div className="service-description">
                    <a href="/">
                      <h3>Domestic RO Booster Pump</h3>
                    </a>
                    <p>
                      Domestic RO Booster Pump Capacity:50/75/100/200/300/400GPD
                      Self Priming/Normal Pump
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="service-item">
                  <div className="service-thumb">
                    <StaticImage
                      src="../images/product/PP Melted Sediment.png"
                      alt=""
                    />
                  </div>
                  <div className="service-description">
                    <a href="/">
                      <h3>PP Melted Sediment</h3>
                    </a>
                    <p>
                      Using 100% food grade polypropylene(pp) as material.
                      Mainly it is suitable for filter bigger pellests,water
                      pre-treatment.
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
