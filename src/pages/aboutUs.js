import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const aboutUs = () => (
  <Layout>
    <Seo title="About us" />
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-title">
              <h2>About</h2>
              <ul className="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">about us</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- .row--> */}
      </div>
      {/* <!-- .container--> */}
    </div>
    {/* <!-- .breadcrumb-area--> */}

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="history">
            <h3>History &amp; Resources</h3>
            <div className="history-details">
              <StaticImage src="../images/about.jpg" alt="" />
              <p>
                Shanghai Hello Pure Water Technology Co.,ltd is established in
                2010. We are a professional manufacturer and exporter that is
                concerned with the design, development and production of water
                treatment system and components. We are located in Shanghai,
                China, with convenient transportation access. All of our
                products comply with international quality standards and are
                greatly appreciated in a variety of different markets throughout
                the world.
              </p>
              <p>
                The Range of our products include residential, commercial and
                industrial water treatment system and components.{" "}
              </p>
              <p>
                Our well-equipped facilities and excellent quality control
                throughout all stages of production enables us to guarantee
                total customer satisfaction. As a result of our high quality
                products and outstanding customer service, we have gained a
                global sales network reaching the Whole Asia, Middle East,
                Europe, America and South of America.
              </p>
              <p>
                If you are interested in any of our products or would like to
                discuss a custom order, please feel free to contact us. We are
                looking forward to forming successful business relationships
                with new clients around the world in the near future.
              </p>
              <h4>Our company promises: reasonable prices, short production time and satisfactory after-sales service, Mutual development, mutual benefits </h4>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- .row--> */}
    </div>
    {/* <!-- .container--> */}

    <div className="container">
      <div className="row">
        <div className="company-focus">
          <div className="col-md-6 col-xs-12">
            <div className="company-mision">
              <h3>History &amp; Resources</h3>
              <StaticImage src="../images/mission.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.{" "}
              </p>
              <p>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="company-vision">
              <h3>History &amp; Resources</h3>
              <StaticImage src="../images/vision.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.{" "}
              </p>
              <p>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <!--.company-focus --> */}
      </div>
      {/* <!-- .row--> */}
    </div>
    {/* <!-- .container--> */}
  </Layout>
)

export default aboutUs
