import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/css/product-details.css"

function ProductDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, price, image1alt, Image01, Image02, Image03, Image04 } =
    data.markdownRemark.frontmatter

  const [show1, setShow1] = useState("block")
  const [show2, setShow2] = useState("none")
  const [show3, setShow3] = useState("none")
  const [show4, setShow4] = useState("none")

  const [classname1, setClassname1] = useState("")
  const [classname2, setClassname2] = useState("")
  const [classname3, setClassname3] = useState("")
  const [classname4, setClassname4] = useState("")

  const currentSlide = (event, n) => {
    if (n === 1) {
      setShow1("block")
      setShow2("none")
      setShow3("none")
      setShow4("none")
      setClassname1(" active")
      setClassname2("")
      setClassname3("")
      setClassname4("")
    }
    if (n === 2) {
      setShow1("none")
      setShow2("block")
      setShow3("none")
      setShow4("none")
      setClassname1("")
      setClassname2(" active")
      setClassname3("")
      setClassname4("")
    }
    if (n === 3) {
      setShow1("none")
      setShow2("none")
      setShow3("block")
      setShow4("none")
      setClassname1("")
      setClassname2("")
      setClassname3(" active")
      setClassname4("")
    }
    if (n === 4) {
      setShow1("none")
      setShow2("none")
      setShow3("none")
      setShow4("block")
      setClassname1("")
      setClassname2("")
      setClassname3("")
      setClassname4(" active")
    }
  }

  return (
    <Layout>
      <Seo title={title} />
      <div className="main-container">
        <section className="left">
          <div className="product-container" id="product-container">
            <div className="product-image" style={{ display: show1 }}>
              <GatsbyImage
                image={getImage(Image01)}
                alt={image1alt}
                className="product-img"
              />
            </div>
            <div className="product-image" style={{ display: show2 }}>
              <GatsbyImage
                image={getImage(Image02)}
                alt={image1alt}
                className="product-img"
              />
            </div>
            <div className="product-image" style={{ display: show3 }}>
              <GatsbyImage
                image={getImage(Image03)}
                alt={image1alt}
                className="product-img"
              />
            </div>
            <div className="product-image" style={{ display: show4 }}>
              <GatsbyImage
                image={getImage(Image04)}
                alt={image1alt}
                className="product-img"
              />
            </div>
          </div>

          <div className="thumbnail-container">
            <div
              className={"thumbnail-image" + classname1}
              onClick={(e) => currentSlide(e, 1)}
              onKeyDown={currentSlide(1)}
              role="none"
            >
              <GatsbyImage
                image={getImage(Image01)}
                alt="product-thumbnail-1"
                className="product-thumbnail"
              />
            </div>
            <div
              className={"thumbnail-image" + classname2}
              onClick={(e) => currentSlide(e, 2)}
              onKeyDown={currentSlide(2)}
              role="none"
            >
              <GatsbyImage
                image={getImage(Image02)}
                alt="product-thumbnail-2"
                className="product-thumbnail"
              />
            </div>
            <div
              className={"thumbnail-image" + classname3}
              onClick={(e) => currentSlide(e, 3)}
              onKeyDown={currentSlide(3)}
              role="none"
            >
              <GatsbyImage
                image={getImage(Image03)}
                alt="product-thumbnail-3"
                className="product-thumbnail"
              />
            </div>
            <div
              className={"thumbnail-image" + classname4}
              onClick={(e) => currentSlide(e, 4)}
              onKeyDown={currentSlide(4)}
              role="none"
            >
              <GatsbyImage
                image={getImage(Image04)}
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
