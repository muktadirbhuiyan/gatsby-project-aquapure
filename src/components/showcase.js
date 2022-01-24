import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function ShowCase() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            internal {
              content
            }
            frontmatter {
              title
              image1alt
              Image01 {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `)
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
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="col-md-4 col-xs-12 col-sm-6">
                  <div className="service-item">
                    <div className="service-thumb">
                      <GatsbyImage
                        image={getImage(node.frontmatter.Image01)}
                        alt={node.frontmatter.image1alt}
                      />
                    </div>
                    <div className="service-description">
                      <Link to="/">
                        <h3>{node.frontmatter.title}</h3>
                      </Link>
                      <p>{node.internal.content} </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div role="tabpanel" className="tab-pane fade" id="commercial">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="col-md-4 col-xs-12 col-sm-6">
                  <div className="service-item">
                    <div className="service-thumb">
                      <GatsbyImage
                        image={getImage(node.frontmatter.Image01)}
                        alt={node.frontmatter.image1alt}
                      />
                    </div>
                    <div className="service-description">
                      <Link to="/">
                        <h3>{node.frontmatter.title}</h3>
                      </Link>
                      <p>{/* {node.frontmatter.Descrip} */}</p>
                    </div>
                  </div>
                </div>
              ))}
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
