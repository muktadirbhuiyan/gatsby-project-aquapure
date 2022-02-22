import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery, Link } from "gatsby"

function Header() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
            }
            id
          }
        }
      }
    }
  `)
  return (
    <div className="container">
      <div className="row">
        <section className="header">
          <header className="header-wrapper">
            <div className="header-top">
              <div className="col-md-6 col-xs-12 col-sm-6">
                <div className="logo">
                  <Link title="aquapure" to="/">
                    <StaticImage
                      src="../images/aquapureLogo.jpg"
                      alt="aquapure"
                    />
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
                      <Link>Products</Link>
                      <ul className="dropdown-menu">
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                          <li key={node.id}>
                            <Link to={"/" + node.frontmatter.slug}>
                              {node.frontmatter.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li>
                      <Link to="/contactUs">Contact Us</Link>
                    </li>
                  </ul>
                  {/* <!-- /navbar-nav --> */}

                  <div
                    className="nav navbar-nav navbar-right"
                    id="header-right"
                  >
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
}

export default Header
