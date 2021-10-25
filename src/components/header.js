import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Header = () => (
    <div className="container">
      <div className="row">
        <section className="header">
          <header className="header-wrapper">
            <div className="header-top">
              <div className="col-md-6 col-xs-12 col-sm-6">
                <div className="logo">
                  <Link title="aquapure" to="index.html">
                    <StaticImage src="../images/aquapureLogo.jpg" alt="aquapure" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 hidden-xs col-sm-6">
                <div className="header-connection">
                  <ul className="header-social social">
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                  </ul>
                  <p>
                    Call Us: <strong>+886-4-2562-5880</strong>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- .header-top--> */}
            <div className="main-nav-bar">
              <div className="col-md-12">
                <div className="navbar-header navbar-right pull-left">
                  {/* <!-- offcanvas-trigger-effects --> */}
                  <div id="offcanvas-trigger-effects" className="offcanvas">
                    <button
                      type="button"
                      className="navbar-toggle visible-xs"
                      data-toggle="offcanvas"
                      data-target=".navbar-collapse"
                      data-placement="left"
                      data-effect="offcanvas-effect"
                    >
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                  {/* <!-- offcanvas-trigger-effects --> */}
                </div>

                {/* <!-- navbar-collapse --> */}
                <nav
                  role="navigation"
                  className="collapse navbar-collapse navbar main-nav"
                >
                  <ul className="nav navbar-nav navbar-left">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/products">Products</Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="article-page.html">Domestic Water Filter</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Domestic RO Systems</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Commercial RO Systems</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Water Softeners</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Industrial RO Systems</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Sea Water RO Sysrems</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Industrial Filtration Systems</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">FRP Tanks</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Distribution Systems</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Multi-Port Control Valve</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Pumps and Accessories</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">RO Membrane</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Membrane Housings</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Multi-cartridges Filter Housings</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">UF Membranes&MBR</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Filter Media</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Filter Cartridges</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Cartridge Filter Housings</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">UV Sterilizer and Ozone</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Flow Meter&Pressure Gauge</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Meters and Instruments</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Commercial Accessories</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Residential Accessories</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/contactUs">Contact Us</Link>
                    </li>
                  </ul>
                  {/* <!-- /navbar-nav --> */}

                  <div className="nav navbar-nav navbar-right" id="header-right">
                    <div className="header-right">
                      <form>
                        <input
                          type="search"
                          name="search"
                          className="empty"
                          id="iconshow"
                          placeholder=" &#xF002;"
                        />
                      </form>
                    </div>
                  </div>
                </nav>
                {/* <!-- /navbar-collapse --> */}
              </div>
            </div>
            {/* <!-- .main-nav-bar --> */}
          </header>
          {/* <!-- .header-wrapper--> */}
        </section>
        {/* <!--End .header --> */}
      </div>
      {/* <!-- .row--> */}
    </div>
    // {/* <!-- .container--> */}
  
)

export default Header
