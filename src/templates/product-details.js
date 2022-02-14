import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../components/css/productPageStyle.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

function productDetails({data}) {
  const {html} = data.markdownRemark
  const { title, image1alt, Image01 } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Seo title={title} />
      <main className="container-body">
        {/* <!-- Left Column / Headphones Image --> */}
        <div className="left-column">
          <GatsbyImage
            className="active"
            image={getImage(Image01)}
            alt={image1alt}
          />
        </div>

        {/* <!-- Right Column --> */}
        <div className="right-column">
          {/* <!-- Product Description --> */}
          <div className="product-description">
            <span>Product Details</span>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML = {{__html: html}} />
          </div>

          <div>
            {/* <!-- Cable Configuration --> */}
            <div className="cable-config">
              <span>Cable configuration</span>
              <div className="cable-choose">
                <button>Straight</button>
                <button>Coiled</button>
                <button>Long-coiled</button>
              </div>
              <a href="/">How to configurate your products</a>
            </div>
          </div>

          {/* <!-- Product Pricing --> */}
          <div className="product-price">
            <span>148$</span>
            <a href="/" className="cart-btn">
              Add to cart
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ProductDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image1alt
        Image01 {
          childImageSharp {
            gatsbyImageData(layout: FIXED, height: 600, width: 600)
          }
        }
      }
    }
  }
`

export default productDetails
