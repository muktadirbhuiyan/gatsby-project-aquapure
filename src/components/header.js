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
                  <Link title="fontanero" to="index.html">
                    <StaticImage src="../images/logo.png" alt="fontanero" />
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
                    Call Us: <strong>(345) 345-3456</strong>
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
                      <Link to="index.html">Home</Link>
                    </li>
                    <li>
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="service.html">Products</Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="article-page.html">Water Heater</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Bathroom</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Toilet</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Tube and Shower</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Pipes and sweres</Link>
                        </li>
                        <li>
                          <Link to="article-page.html">Drainage</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="contact.html">Contact Us</Link>
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
