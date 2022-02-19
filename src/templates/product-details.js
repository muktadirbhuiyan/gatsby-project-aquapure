import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../components/css/product-details.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

function ProductDetails({ data }) {
  const [show, setShow] = useState("block")
  console.log("show", show)
  
  const { html } = data.markdownRemark
  const { title, price, image1alt, Image01 } = data.markdownRemark.frontmatter
  
  
  const handleClick = (n) => {
    setShow((s) => {
      console.log("s", s)
      if(s=="block"){
        return "none"
      } else{
        return "block"
      }
    })
    
  }

  return (
    <Layout>
      <Seo title={title} />
      <div className="main-container">
        <section className="left">
          <div className="product-container" id="product-container">
            <div className="product-image" style={{display: show ? "block" : "none"}}>
              <GatsbyImage
                image={getImage(Image01)}
                alt={image1alt}
                className="product-img"
              />
            </div>
            <div className="product-image" style={{display: show ? "none" : "block"  }}>
              <GatsbyImage
                image={getImage(Image01)}
                alt={image1alt}
                className="product-img"
              />
            </div>
            <div className="product-image" style={{display: show ? "none" : "block" }}>
              <GatsbyImage
                image={getImage(Image01)}
                alt={image1alt}
                className="product-img"
              />
            </div>
            <div className="product-image" style={{display: show ? "none" : "block" }}>
              <GatsbyImage
                image={getImage(Image01)}
                alt={image1alt}
                className="product-img"
              />
            </div>
          </div>

          <div className="thumbnail-container">
            <div className="thumbnail-image" onClick={()=> handleClick()}>
              <GatsbyImage
                image={getImage(Image01)}
                alt="product-thumbnail-1"
                className="product-thumbnail"
              />
            </div>
            <div className="thumbnail-image" onClick={()=> handleClick()}>
              <GatsbyImage
                image={getImage(Image01)}
                alt="product-thumbnail-2"
                className="product-thumbnail"
              />
            </div>
            <div className="thumbnail-image" onClick={()=> handleClick()}>
              <GatsbyImage
                image={getImage(Image01)}
                alt="product-thumbnail-3"
                className="product-thumbnail"
              />
            </div>
            <div className="thumbnail-image" onClick={()=> handleClick()}>
              <GatsbyImage
                image={getImage(Image01)}
                alt="product-thumbnail-4"
                className="product-thumbnail"
              />
            </div>
          </div>
        </section>

        <section className="right">
          <small>Product Details</small>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div className="price">
            <div className="discounted-price">
              <strong className="current-price">{price}.00</strong>
              <strong className="discount">50%</strong>
            </div>
            <s>$250.00</s>
          </div>

          <div className="add-to-cart">
            <div className="quantity">
              <button className="decrease-btn quantity-btn" id="decrease-btn">
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/e6f54e15253b9446814d89e3709730eb174136bd/images/icon-minus.svg"
                  alt="decrease-icon"
                  className="decrease-icon"
                />
              </button>
              <span id="add-quantity">0</span>
              <button className="increase-btn quantity-btn" id="increase-btn">
                <img
                  src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/e6f54e15253b9446814d89e3709730eb174136bd/images/icon-plus.svg"
                  alt="increase-icon"
                  className="increase-icon"
                />
              </button>
            </div>

            <button className="add-to-cart-btn" id="add-to-cart-btn">
              <img
                src="https://raw.githubusercontent.com/frontendmentorio/ecommerce-product-page/e6f54e15253b9446814d89e3709730eb174136bd/images/icon-cart.svg"
                alt="cart-btn-icon"
                className="cart-btn-icon"
              />
              Add to cart
            </button>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProductDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        price
        image1alt
        Image01 {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
        Image02 {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
        Image03 {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
        Image04 {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

export default ProductDetails
