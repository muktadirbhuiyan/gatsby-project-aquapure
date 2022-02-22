import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./css/bootstrap.min.css"
// import "./css/fontawesome-min.css"
import "./css/offcanvas.css"
import "./css/style.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper" id="wrapper">
        <div className="offcanvas-pusher">
          <div className="content-wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
